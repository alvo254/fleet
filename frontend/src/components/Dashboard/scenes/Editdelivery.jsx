import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Editdelivery () {

    const {id} = useParams();


     const[data,setData]= useState({

        receiver_name:'',
        contact_name:'',
        pickup_instructions:'',
        delivery_instructions:'',
        package_type:'',
        package_details:'',
    })

    function handleChange(e){


        setData({...setData, [e.target.id]: e.target.value});
    }

    useEffect(() => {

        fetch(`https://quickfleet-api.herokuapp.com/deliveries/${id}`)
          .then((response) => response.json())
          .then((data) => {

              setData(data)
             console.log(data)


          })
          .catch((error) => console.log(error));

      }, [])


      function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://quickfleet-api.herokuapp.com/deliveries/${id}`,{
	method:'PATCH',
  	headers:{
    	'Content-Type': 'application/json'
    },
  	body:JSON.stringify(data)
})
.then(resp => resp.json())
.then(data => {
console.log(data)
setData(data)
})
    }


    return(
        <div>

            <form  onSubmit={(e)=>handleSubmit(e)}>
            <label>   Receiver Name: </label>
            <input id="receiver-name" value={data.receiver_name} onChange={e=>handleChange(e)}/>
            <label>Receiver Contact   </label>
            <input id="receiver-contact" onChange={e=>handleChange(e)}
            value={data.receiver_contact} />
            <label > Pickup Instructions: </label>
            <input id="pickup-instructions"onChange={e=>handleChange(e)}
            value={data.pickup_instructions}/>
            <label >Delivery Instructions:  </label>
            <input value={data.delivery_instructions} id="delivery-instructions"onChange={e=>handleChange(e)} />
            <label >Package Type:  </label>
            <input value={data.package_type} id="package-type"onChange={e=>handleChange(e)} />
            <label >Package Details:  </label>
            <input value={data.package_details} id="package-details"onChange={e=>handleChange(e)} />


            <button type="button display in-line padding: 15px" className="btn btn-primary">SUBMIT</button>

        </form>

        </div>



    )
}
export default Editdelivery;
