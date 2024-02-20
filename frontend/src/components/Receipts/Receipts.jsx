import { useState, useEffect } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import Receipt from "./Receipt";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import "./Receipts.css";

function Receipts({ onAddingReceipt }) {

  const [receipts, setReceipts] = useState([]);
  const [receipt_no, setReceiptNumber] = useState("");
  const [sender_name, setSender] = useState("");
  const [receiver_name, setReceiver] = useState("");
  const [nature_of_goods, setNatureGoods] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [ amount_paid, setAmount ] = useState( "" );
  const [order_id, setOrderId] = useState("");
  const [errors, setErrors] = useState([]);
  const [ isLoading, setIsLoading ] = useState( false );
  const [ pageSize, setPageSize ] = useState( 5 );
  const [rowId, setRowId] = useState(null);
  const [receipt, setReceipt] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns = [
    { field: "id", headerName: "ID", width: 50, align: "center" },

    {
      field: "receipt_no",
      headerName: "Receipt.No",
      width: 170,
      align: "center",
    },

    {
      field: "sender_name",
      headerName: "Sender Name",
      width: 150,
      align: "center",
    },
    {
      field: "receiver_name",
      headerName: "Receiver Name",
      width: 150,
      align: "center",
    },
    {
      field: "nature_of_goods",
      headerName: "Nature Of Goods",
      type: "singleSelect",
      valueOptions: ["Flammable", "Perishable", "Fragile", "Bulk", "Medical"],
      editable: true,
      width: 150,
      align: "center",
    },
    {
      field: "pickup",
      headerName: "PickUp",
      width: 130,
      align: "center",
    },
    {
      field: "destination",
      headerName: "Destination",
      width: 130,
      align: "center",
    },
    {
      field: "amount_paid",
      headerName: "Amount Paid",
      width: 130,
      align: "center",
    },
    {
      field: "order_id",
      headerName: "Order Number",
      width: 130,
      align: "center",
    },
    {
      field: "Route",
      headerName: "View",
      type: "actions",
      width: 130,
      align: "center",

      renderCell: (params) => {
        console.log(params);

        return (
          <>
            <Link
              to={`/receipt/${params.id}`}
              onClick={() => <Receipt key={receipt.id} />}
              target="blank"
            >
              <button className="viewBtn">View More</button>
            </Link>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    fetch("/receipts")
      .then((response) => response.json())
      //   .then( ( response ) => console.log(response) )
      .then((data) => {
        console.log(data);
        setReceipts(data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    // fetch("/receipts", {
      fetch('https://quickfleet-api.herokuapp.com/receipts', { 

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        receipt_no,
        sender_name,
        receiver_name,
        nature_of_goods,
        pickup,
        destination,
        amount_paid,
        order_id
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          onAddingReceipt(data);

          navigate(`/receipts/${id}`);
          setErrors([]);
        });

        // navigate("/dashboard");
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <div className="addReceipt">
        <button
          onClick={handleOpen}
          type="button"
          className="btn btn-primary my-4"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          + Receipt
        </button>
      </div>
      <Box m="20px" className="receiptTable">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Receipt
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="addreceipt-pg">
                  <form className="adding-form" onSubmit={handleSubmit}>
                    <div className="formGrp">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Receipt.No</label>
                        <input
                          type="text"
                          id="name"
                          autoComplete="off"
                          className="form-control"
                          placeholder="enter receipt number..."
                          value={receipt_no}
                          onChange={(e) => setReceiptNumber(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Sender</label>
                        <input
                          type="number{ >= 18}"
                          id="age"
                          autoComplete="off"
                          className="form-control"
                          placeholder="enter sender name..."
                          value={sender_name}
                          onChange={(e) => setSender(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="formGrp">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Receiver</label>
                        <input
                          type="text"
                          id="receiver"
                          autoComplete="off"
                          className="form-control"
                          placeholder="enter receiver name..."
                          value={receiver_name}
                          onChange={(e) => setReceiver(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Nature of Goods
                        </label>
                        <input
                          type="text"
                          id="nature of goods"
                          autoComplete="off"
                          className="form-control"
                          placeholder="enter nature of goods..."
                          value={nature_of_goods}
                          onChange={(e) => setNatureGoods(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="formGrp">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Pickup</label>
                        <input
                          type="text"
                          id="room-no"
                          autoComplete="off"
                          className="form-control"
                          placeholder="enter pickup place.."
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Destination</label>
                        <input
                          type="text"
                          id="room-no"
                          autoComplete="off"
                          className="form-control"
                          placeholder="enter destination..."
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="formGrp">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Price</label>
                        <input
                          type="text"
                          id="amount"
                          autoComplete="off"
                          className="form-control"
                          placeholder="enter price..."
                          value={amount_paid}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Order</label>
                        <input
                          type="number"
                          id="order_no"
                          autoComplete="off"
                          className="form-control"
                          placeholder="enter order number..."
                          value={order_id}
                          onChange={(e) => setOrderId(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary createreceipt"
                      >
                        {isLoading ? "Loading..." : "Add"}{" "}
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="form-group">
                      {errors?.map((err) => (
                        <div key={err}>{err}</div>
                      ))}
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary savechanges">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary closemodal"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <Typography variant="h3" component="h3" sx={{ textAlign: "center" }}>
          Manage Receipts
        </Typography>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
          }}
        >
          <DataGrid
            rows={receipts}
            columns={columns}
            getRowId={(row) => row.id}
            rowsPerPageOptions={[5, 10, 20]}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            getRowSpacing={(params) => ({
              top: params.isFirstVisible ? 0 : 4,
              bottom: params.isLastVisible ? 0 : 4,
            })}
            onCellEditCommit={(params) => setRowId(params.id)}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </>
  );
}
export default Receipts;