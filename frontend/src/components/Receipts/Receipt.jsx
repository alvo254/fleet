import { Dashboard } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Image5 from "../Image/logo.png";
import "./Receipt.css";
import Navbar from '../Navbar/Navbar'


function Receipt() {
  const [{ data: receipt, error, status }, setReceipt] = useState({
    data: {},
    error: "",
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/receipts/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((receipt) => {
          console.log(receipt);
          setReceipt({ data: receipt, error: "", status: "resolved" });
        });
        // console.log(receipt);
      } else {
        response.json().then((err) =>
          setReceipt({
            data: "not found",
            error: err.error,
            status: "rejected",
          })
        );
      }
    });
  }, [id]);

  function handleSubmitReceipt() {
    window.print();
  }

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <>
    {/* <Navbar /> */}
      <div className="restbody">
        <div className="container bg-darksalmon">
          <div className="card restcards" key={receipt.id}>
            <div className="card-body">
              <div className="applogo">
                <img src={Image5} />
                <div className="address">
                  <div senderAddress>
                    <h4>
                      <strong>From:</strong>
                    </h4>
                    <p>{receipt.sender_name}</p>
                    <p>{receipt.pickup}</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                  <div className="receiverAddress">
                    <h4>
                      <strong>To:</strong>
                    </h4>
                    <p>{receipt.receiver_name}</p>
                    <p>{receipt.destination}</p>
                    <p>Nairobi, Kenya</p>

                    <div className="receiptId">
                      <h4>
                        <strong>Receipt#:</strong> {receipt.id}
                      </h4>
                      <h4>
                        <strong>Price:</strong> {receipt.amount_paid}
                      </h4>
                      <h4>
                        <strong>Currency</strong> Kenya Shillings
                      </h4>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              </div>
              <div className=" card receiptDetails">
                <div  className="sec1card">
                  <h5 className="card-title text-center rec_no">
                    <strong>Receipt</strong>: {receipt.receipt_no}
                  </h5>
                  <p className="card-text text-center">
                    <strong>Sender</strong>:  {receipt.sender_name}
                  </p>
                  <p className="card-text text-center">
                    <strong>Receiver</strong>: {receipt.receiver_name}
                  </p>
                  <p className="card-text text-center">
                    <strong>Nature of Goods</strong>:{" "}
{receipt.nature_of_goods}
                  </p>
                </div>
                <div className="sec2card">
                  <p className="card-text text-center">
                    <strong>Pickup</strong>: {receipt.pickup}
                  </p>
                  <p className="card-text text-center">
                    <strong>Destination</strong>:{receipt.destination}
                  </p>
                  <p className="card-text text-center">
                    <strong>Amount Paid</strong>: {receipt.amount_paid}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary my-4 printBtn"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={handleSubmitReceipt}
        >
          Print <i className="fa fa-print" aria-hidden="true"></i>
        </button>
      </div>
      <div className='account'>
      <Link
              to="/dashboard"
              onClick={ () => <Dashboard /> }
            >
              <button className="btn btn-primary back-btn">Back</button>
            </Link>
        </div>
    </>
  );
}
export default Receipt;
