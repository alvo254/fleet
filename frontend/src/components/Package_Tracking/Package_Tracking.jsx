import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./Package_Tracking.css";
import Navbar from '../Navbar/Navbar'

function Package_Tracking() {
  const [ receipts, setReceipts ] = useState( [] );
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect( () =>
  {
    fetch( "/receipts" )
      .then( response => response.json() )
      .then( ( receipts ) =>
      {
        console.log( receipts );
        setReceipts(receipts)
    })

  }, [] )

  function handleFilter (event)
  {
    event.preventDefault();

    const searchWord = event.target.value;
    setWordEntered(searchWord)

    const newFilter = receipts.filter( ( receipt ) =>
    {
      return receipt.receipt_no.toLowerCase().includes( searchWord.toLowerCase() )
    } );
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData( newFilter );
      console.log(newFilter);
    }

    // setFilteredData( newFilter );
  }
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

  return (
  <>
    {/* <Navbar /> */}
    <div className="container-fluid bg">
      <div className="receipt-form">
        <form className="receiptNo-form">
          <h5>Track Your Package Delivery </h5>
          <p>Enter the receipt number that you got from our offices</p>
          <div className="form-group">
            <div>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder="enter your receipt.no..."
                value={wordEntered}
                onChange={handleFilter}
              />
              <div className="searchIcon">
                {filteredData.length === 0 ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon className="clearBtn" onClick={clearInput} />
                )}
              </div>
            </div>
            {filteredData.length != 0 && (
              <div className="dataResults">
                {filteredData.map((receipt, index) => {
                  return (
                    <a className="dataItem" href="/receipts" target="blank">
                      {/* { receipt.receipt_no } */}
                      <p>{receipt.receipt_no}</p>
                    </a>
                  );
                })}
              </div>
            )}

            {/* <i className="fa fa-search searchIcon" aria-hidden="true"></i> */}
          </div>
          <div className=" container package-receipt">
            <div className="receipt-details">
              {/* <h5>{singleReceipt.receipt_no}</h5> */}
              <h5>Quick Fleet</h5>
              <p>#KEN23454634</p>
            </div>
            <div>
              <button className="receiptBtn">On Process</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  );
}

export default Package_Tracking;
