import React, {useState} from 'react';
import './DeliveryForm.css'
import TextField from '@mui/material/TextField';
import Image1 from '../Image/receiver.png'
import Image2 from '../Image/instructions.png'
import Image3 from "../Image/packagearrival.png";
import Navbar from '../Navbar/Navbar'

function DeliveryForm() {

    const [receiverName, setReceiverName] = useState('')
    const [receiverContact, setReceiverContact] = useState('')
    const [pickupInstructions, setPickupInstructions] = useState('')
    const [deliveryInstructions, setDeliveryInstructions] = useState('')
    const [packageType, setPackageType] = useState('')
    const [packageDetails, setPackageDetails] = useState('')

  return (
    <div>
      {/* <Navbar /> */}
        {/* <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-24 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Deliver To</h5>
                    <form class="w-full max-w-sm">
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Name" value={receiverName} variant="standard" onChange={(e)=> setReceiverName(e.target.value)} />
                        </div>
                        <div class="flex items-center py-2">
                        <TextField id="standard-basic" label="Receiver Contact" value={receiverContact} variant="standard" onChange={(e)=> setReceiverContact(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Instructions</h5>
                    <form class="w-full max-w-sm">
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Contact" value={pickupInstructions} variant="standard" onChange={(e)=> setPickupInstructions(e.target.value)} />
                        </div>
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Contact" value={deliveryInstructions} variant="standard" onChange={(e)=> setDeliveryInstructions(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Package Details</h5>
                    <form class="w-full max-w-sm">
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Contact" value={packageType} variant="standard" onChange={(e)=> setPackageType(e.target.value)} />
                        </div>
                        <div class="flex items-center py-2">
                            <TextField id="standard-basic" label="Receiver Contact" value={packageDetails} variant="standard" onChange={(e)=> setPackageDetails(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div> */}

      <div class="flex justify-center mb-4">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg deliveryformCard1">
          <div className="deliveryformimg">
            <img
              class=" w-full h-28 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg deliveryImg"
              src={Image1}
              alt=""
            />
          </div>

          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Deliver To</h5>
            <form class="w-full max-w-sm">
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Receiver Name"
                  value={receiverName}
                  variant="standard"
                  onChange={(e) => setReceiverName(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Receiver Name" aria-label="Receiver Name" /> */}
              </div>
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Receiver Contact"
                  value={receiverContact}
                  variant="standard"
                  onChange={(e) => setReceiverContact(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Receiver Contact" aria-label="Receiver Contact" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-4 ">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg deliveryformCard2">
          <div className="deliveryformimg">
            <img
              class=" w-full h-28 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg deliveryImg"
              src={Image2}
              alt=""
            />
          </div>
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Instructions</h5>
            <form class="w-full max-w-sm">
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Pickup Instructions"
                  value={pickupInstructions}
                  variant="standard"
                  onChange={(e) => setPickupInstructions(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Pickup Instructions" aria-label="Pickup Instructions" /> */}
              </div>
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Delivery Instructions"
                  value={deliveryInstructions}
                  variant="standard"
                  onChange={(e) => setDeliveryInstructions(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Delivery Instructions" aria-label="Delivery Instructions" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-4 ">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg deliveryformCard3">
          <div className="deliveryformimg">
            <img
              class=" w-full h-28 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg deliveryImg"
              src={Image3}
              alt=""
            />
          </div>
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Package Details
            </h5>
            <form class="w-full max-w-sm">
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Select Package Type"
                  value={packageType}
                  variant="standard"
                  onChange={(e) => setPackageType(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Select Package Type" aria-label="Package Type" /> */}
              </div>
              <div class="flex items-center py-2">
                <TextField
                  id="standard-basic"
                  label="Package Details"
                  value={packageDetails}
                  variant="standard"
                  onChange={(e) => setPackageDetails(e.target.value)}
                />
                {/* <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Package Details" aria-label="Package Details" /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='deliveryBtn'>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded delivery-button"
        >
          Deliver Courier Now
        </button>
      </div>
    </div>
    // </div>
  );
}

export default DeliveryForm
