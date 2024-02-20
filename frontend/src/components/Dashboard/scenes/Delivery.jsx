import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function Delivery() {
  const [{ data: delivery, error, status }, setDelivery] = useState({
    data: {},
    error: "",
    status: "pending",
  } );
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ editdelivery, setEditDelivery ] = useState( {
    receiver_name: "",
    receiver_contact: "",
    pickup_instructions:"",
    delivery_instructions:"",
    package_type:"",
    package_details:"",

  } );

  function FillEditInput (tenant)
  {
    setEditDelivery({receiver_name:delivery.receiver_name, receiver_contact:delivery.receiver_contact, pickup_instructions:delivery.pickup_instructions, delivery_instructions:delivery.delivery_instructions, service_type: delivery.service_type, package_details: delivery.package_details})
  }
  function handleChange(e) {
    setEditDelivery({ ...editdelivery, [e.target.id]: e.target.value });
  }

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://quickfleet-api.herokuapp.com/deliveries/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((delivery) => {

          setDelivery({ data: delivery, error: "", status: "dispatched" });
        });

      } else {
        response.json().then((err) =>
          setDelivery({
            data: "not found",
            error: err.error,
            status: "rejected",
          })
        );
      }
    });
  }, [id]);

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;


  function handleSubmit ( e )
  {
    e.preventDefault();

    console.log(editdelivery);
    fetch(`https://quickfleet-api.herokuapp.com/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editdelivery),
    })
      .then((resp) => resp.json())
      .then((data) => {

        setDelivery(data);
      });


  }
  return (
    <>

    <div className="restbody">
      <div className="container bg-darksalmon">
        <div className="card restcards" key={delivery?.id}>
          <div className="card-body">
            <h5 className="card-title text-center">
              Receiver Name: <em>{delivery?.receiver_name}</em>
            </h5>
            <p className="card-text text-center">
              Receiver Contact: {delivery?.recever_contact}
            </p>
            <p className="card-text text-center">
              Pickup Instructions: {delivery?.pickup_instructions}
            </p>
            {/* <p className="card-text text-center">Age: {delivery?.age}</p> */}
            {/* <p className="card-text text-center">Gender: {delivery?.gender}</p> */}
            <p className="card-text text-center">
              Delivery Instructions: {delivery?.delivery_instructions}
            </p>
            <p className="card-text text-center">
              Service Type: {delivery?.service_type}
            </p>
            <p className="card-text text-center">
              Package Details: {delivery?.package_details}
            </p>
            <p className="card-text text-center">
              Receipt.no: {delivery?.receipt_no}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary my-4"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => FillEditInput(delivery)}
      >
        Edit <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>
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
                Edit Delivery Details
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
                <form className="adding-form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Receiver Name</label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant name..."
                      value={editdelivery.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Receiver Contact</label>
                    <input
                      type="number{ >= 18}"
                      id="age"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant age..."
                      value={editdelivery.age}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Gender</label>
                    <input
                      type="ext"
                      id="gender"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter tenant gender..."
                      value={editdelivery.gender}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Receiver Contact</label>
                    <input
                      type="tel"
                      id="contact"
                      autoComplete="off"
                      className="form-control"
                      placeholder="enter receiver contact..."
                      value={editdelivery.contact}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      {isLoading ? "Loading..." : "Change"}{" "}
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="form-group">
                    {errors.map((err) => (
                      <div key={err}>{err}</div>
                    ))}
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
      </div>
      </>
  );
}


export default Delivery;
