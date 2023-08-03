import React, { Component, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Bill = () => {
  const pdfRef = useRef();

  function printDocument() {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfw = pdf.internal.pageSize.getWidth();
      const pdfh = pdf.internal.pageSize.getHeight();
      const imgw = canvas.width;
      const imgh = canvas.height;
      const ratio = Math.min(pdfw / imgw, pdfh / imgh);
      const imgx = (pdfw - imgw * ratio) / 2;
      const imgy = 30;
      pdf.addImage(imgData, "PNG", imgx, imgy, imgw * ratio, imgh * ratio);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  return (
    <>
      <div>
        {/* Hospital */}
        <div ref={pdfRef} className="container">
          <div className="header">
            <ul className="list heading">
              <li>
                <h1 className="org">AMRUTH PHARMA</h1>
              </li>
              <li>ANATHARAGANGE ROAD, NEAR K.S.R.T.C BUS STAND</li>
              <li>D.L.No: KA/KLR/20-21/686</li>
              <li>GSTIN No. : 29ABYPR9879D3ZB</li>
              <li>Tel: 08152 - 229097,9945782481</li>
            </ul>
            {/* Details */}
            <div className="details">
              <div className="patient">
                <ul className="list grid">
                  <li>INVOICE</li>
                  <span className="list__item">: NO 1398</span>
                  <li>Date</li>
                  <span className="list__item">: 07/05/2023</span>
                  <li>Patient</li>
                  <span className="name lsit__item">: Shivani</span>
                  <li>Address</li>
                  <span className="list__item">: Kolar</span>
                  <li>DOCTOR</li>
                  <span className="list__item">: Manohar P V, M.S. Ortho</span>
                  <li>HOSPITAL </li>
                  <span className="list__item">
                    : Accident And Truma Care Centre
                  </span>
                </ul>
              </div>
            </div>
          </div>
          {/* Table */}
          <table className="table">
            <thead>
              <th>QTY</th>
              <th>PRODUCT NAME</th>
              <th>COMPANY</th>
              <th>BATCH</th>
              <th>EX.DT</th>
              <th>M.R.P</th>
              <th>PRICE</th>
              <th>AMOUNT</th>
            </thead>
            <tr>
              <td>3</td>
              <td>PIROMAC 20MG INJ</td>
              <td>TOTAL HEALTH CLIC.</td>
              <td>398</td>
              <td>10/24</td>
              <td>37.00</td>
              <td>33.04</td>
              <td>111.00</td>
            </tr>
            <tr>
              <td className="bottom">3</td>
              <td className="bottom">MECB-500 INJ</td>
              <td className="bottom">SRI MARUTHESI</td>
              <td className="bottom">2207802</td>
              <td className="bottom">12/24</td>
              <td className="bottom">39.00</td>
              <td className="bottom">34.83</td>
              <td className="bottom">117.0</td>
            </tr>
            <tr>
              <td style={{ columnSpan: "8", height: "10rem" }}></td>
            </tr>

            <tr>
              <td className="foot_1">Tax ID</td>
              <td className="foot_1">Item Value</td>
              <td className="foot_1">Tax</td>
              <td className="foot_1">Taxable</td>
              <td className="foot_1">Items</td>
              <td className="foot_1">8</td>
              <td className="foot_1">Gross total</td>
              <td className="foot_1">400.0</td>
            </tr>

            <tr>
              <td>GST - 12%</td>
              <td>400.00</td>
              <td>60.00</td>
              <td>400</td>
              <td>Qty</td>
              <td>57</td>
              <td>Tax Amount</td>
              <td>60.00</td>
            </tr>

            <tr>
              <td className="foot_2 rupee" colSpan={4}>
                Four hundred Only
              </td>

              <td className="foot_2 bill-amount" colSpan={4}>
                BILL AMOUNT 460.00
              </td>
            </tr>

            <tr>
              <td className="end-note" colSpan={8}>
                {" "}
                We are Registered under VAT and Liable to Pay Tax{" "}
              </td>
            </tr>

            <tr>
              <td colSpan={8}>
                Goods Once Sold cannot be taken Back or Exchanged, Wish You
                Speedy Recovery
              </td>
            </tr>
          </table>
          <button className="btn btn--download" onClick={printDocument}>
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Bill;
