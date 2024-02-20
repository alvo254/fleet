// import { useState } from "react";
// import { useEffect } from "react";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Button } from "@mui/material";
// import { Link }from 'react-router-dom';
// // import Delivery from './Delivery';
// import "./Deliveries.css"
// // import Editdelivery from "./Editdelivery";


// function Deliveries() {

// const[deliveries, setDeliveries]= useState([])


// useEffect(()=>{
//     fetch("http://127.0.0.1:3000/deliveries")
//     .then(response => response.json())
//     .then(data => setDeliveries(data))
// },[])


// function deleteDelivery(id) {
//   fetch(`http://127.0.0.1:3000/deliveries/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(r => r.json())
//   .then(()=> { const deleting = deliveries.filter((delivery) => delivery.id !== id)
//     setDeliveries(deleting)



//   })

//   .catch(err=> console.log(err))
//   alert("delete was successful")

// }


// return(
// <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//         <TableHead>Deliveries</TableHead>
//           <TableRow>
//             <TableCell>Id</TableCell>
//             <TableCell align="right">Receiver Name</TableCell>
//             <TableCell align="right">Contact Name</TableCell>
//             <TableCell align="right">Pickup Instructions</TableCell>
//             <TableCell align="right">Delivery Instructions</TableCell>
//             <TableCell align="right">Service Type</TableCell>
//             <TableCell align="right">Package Details</TableCell>
//             {/* <TableCell align="right">Delivery</TableCell>
//             <TableCell align="right">Receipt</TableCell> */}



//             {/* <TableCell align="right">View</TableCell> */}
//              {/* <TableCell align="right">View</TableCell> */}
//               {/* <TableCell align="right">View</TableCell> */}

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {deliveries.map((row) => (
//             <TableRow
//               key={row.id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.id}
//               </TableCell>
//               <TableCell align="right">{row.receiver_name}</TableCell>
//               <TableCell align="right">{row.receiver_contact}</TableCell>
//               <TableCell align="right">{row.pickup_instructions}</TableCell>
//               <TableCell align="right">{row.delivery_instructions}</TableCell>
//               <TableCell align="right">{row.service_type}</TableCell>
//               <TableCell align="right">{row.package_details}</TableCell>
//               {/* <TableCell align="right">{row.delivery_id}</TableCell>
//               <TableCell align="right">{row.receipt_id}</TableCell> */}
//               <TableCell align="right"><Link to="/deliveries/:id">{row.view}</Link></TableCell>
//               {/* <Stack direction="row" spacing={2}>
//             <Link
//               to={`/deliveries/${id}`}
//               onClick={() => <Delivery key={deliveries.id} />}
//             >
//               <button className="viewBtn">View</button>
//             </Link>
//             <Button
//               variant="outlined"
//               color="error"
//               size="small"
//               onClick={onClick}
//             >
//               Delete
//             </Button>
//           </Stack> */}

//               {/* <button onClick={() => {deleteDelivery (row.id)}} type="button display in-line padding: 15px" className="btn-danger btn-xsm">DELETE</button> */}

//              <Button classname="editbtn" variant="contained" color="success">EDIT</Button>

//               <Button onClick={() => {deleteDelivery (row.id)}} variant="outlined" color="error">DELETE</Button>


//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }




// export default Deliveries;


import { useState, useEffect } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import Delivery from "./Delivery";
import "./Deliveries.css"


function Deliveries({ onAddingDelivery }) {

    const [deliveries, setDeliveries] = useState([]);
    const [receiver_name, setReceiver_name] = useState("");
    const [receiver_contact, setReceiver_contact] = useState("");
    const [pickup_instructions, setPickup_instructions] = useState("");
    const [ delivery_instructions, setDelivery_instructions ] = useState( "" );
    const [service_type, setService_type] = useState("");
    const [package_details, setPackage_details] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    getDeliveries();
  }, []);

  async function getDeliveries() {
    let result = await fetch("https://quickfleet-api.herokuapp.com/deliveries");
    result = await result.json();
    setDeliveries(result);
  }

  function deleteDelivery(id) {
    fetch(`https://quickfleet-api.herokuapp.com/deliveries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => {
        const deleting = deliveries.filter((row) => row.id !== id);
        setDeliveries(deleting);
      })

      .catch((err) => console.log(err));
    alert("delete was successful");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("https://quickfleet-api.herokuapp.com/deliveries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        receiver_name,
        receiver_contact,
        pickup_instructions,
        delivery_instructions,
        service_type,
        package_details,
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((newDelivery) => {
          console.log(newDelivery);
          onAddingDelivery(newDelivery);

          navigate(`https://quickfleet-api.herokuapp.com/deliveries/${id}`);
          setErrors([]);
        });

        // navigate("/dashboard");
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (


    <div>
      {/* <Header/> */}
      <button
          onClick={handleOpen}
          type="button"
          className="btn btn-primary my-4"
          data-toggle="modal"
          data-target="#exampleModal"
        >
        + Dispatch
      </button>
      <Box m="20px" className="receiptTable">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Delivery
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
              <div className="addtenant-pg">
                <form className="adding-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Receiver Name</label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter receiver name..."
                      value={receiver_name}
                      onChange={(e) => setReceiver_name(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Receiver Contact</label>
                    <input
                      type="number{ >= 18}"
                      id="age"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter receiver contact..."
                      value={receiver_contact}
                      onChange={(e) => setReceiver_contact(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pickup Instructions</label>
                    <input
                      type="ext"
                      id="gender"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter pickup instructions..."
                      value={pickup_instructions}
                      onChange={(e) => setPickup_instructions(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Delivery Instructions</label>
                    <input
                      type="tel"
                      id="contact"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter delivery instructions..."
                      value={delivery_instructions}
                      onChange={(e) => setDelivery_instructions(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Service Type</label>
                    <input
                      type="text"
                      id="room-no"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter service type..."
                      value={service_type}
                      onChange={(e) => setService_type(e.target.value)}
                    />
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Package Details</label>
                    <input
                      type="text"
                      id="room-no"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant room..."
                      value={package_details}
                      onChange={(e) => setPackage_details(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      {isLoading ? "Loading..." : "Add"}{" "}
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="form-group">
                    {errors.map((err) => (
                      <div key={err}>{err}</div>
                    ))}
                  </div>
                  </div>
                </form>

              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      </Modal>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Receiver Name</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Pickup Instructions</TableCell>
              <TableCell align="right">Delivery Instructions</TableCell>
              <TableCell align="right">Service Type</TableCell>
              <TableCell align="right">Package Details</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deliveries.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.receiver_name}</TableCell>
                <TableCell align="right">{row.contact_name}</TableCell>
                <TableCell align="right">{row.pickup_instructions}</TableCell>
                <TableCell align="right">{row.delivery_instructions}</TableCell>
                <TableCell align="right">{row.service_type}</TableCell>
                <TableCell align="right">{row.package_details}</TableCell>
                <TableCell align="right">
                  <Link
                    to={`https://quickfleet-api.herokuapp.com/deliveries/${row.id}`}
                    onClick={() => <Delivery key={row.id} />}
                  >
                    <button className="viewBtn">View More</button>
                  </Link>
                </TableCell>
                  <button
                    onClick={() => {
                      deleteDelivery(row.id);
                    }}
                    type="button"
                    className="btn-danger my-3"
                  >
                    DELETE
                  </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </div>


  );
}

export default Deliveries
