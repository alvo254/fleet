import React, {useState} from 'react'
import "./OrderForm.css";
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel'
import { Select } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import "./OrderForm.css"


function OrderForm() {

  const [senderName, setSenderName] = useState('')
  const [receiverName, setReceiverName] = useState('')
  const [natureOfGoods, setNatureOfGoods] = useState('')
  // const [amountPaid, setAmountPaid] = useState('')
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://quickfleet-api.herokuapp.com/orders',{
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          senderName,
          receiverName,
          natureOfGoods,
          // amountPaid,
          pickup,
          destination,
        }
      ),
    })
    .then((r) => r.json())
    navigate('/ordercard')
  }

  return(
    <>
      <div className='form'>
        <form onSubmit={handleSubmit} className="forrm">
          <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              style={{"background":"white",
              "padding":'20px',
              "marginTop":"10px",
              "marginBottom": '30px',
              "width":'100%',
              }}
            >
            <FormLabel
              style={{"justifyContent": 'center',
                "alignItems":"center",
                "display": "flex",
                "fontWeight": "bolder",
                "color": "black",
                "fontSize": "40px"
              }}
            >
              Place your order
            </FormLabel>
            <div className='class'>
              <TextField
                required
                id="outlined-required"
                label="Sender name"
                value={senderName}
                onChange={(e)=>setSenderName(e.target.value)}
              />
              <TextField
                id="outlined-disabled"
                label="Receiver name"
                value={receiverName}
                onChange={(e)=>setReceiverName(e.target.value)}
              />
              </div>
              <div className='selecter'>


                  {/* // id="outlined-password-input"
                  // label="Nature of goods"
                  // value={natureOfGoods}
                  // onChange={(e)=>setNatureOfGoods(e.target.value)} */}

            <InputLabel className='order-card' id="demo-simple-select-label">Nature of Goods</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                  id="outlined-password-input"
                  value={natureOfGoods}
                label="Nature of goods"
                className='inputt'
                onChange={(e)=>setNatureOfGoods(e.target.value)}>
            <MenuItem value="perishable">Perishable</MenuItem>
            <MenuItem value="flammable">Flammable</MenuItem>
            <MenuItem value="bulk">Bulk</MenuItem>
            <MenuItem value="fragile">Fragile</MenuItem>
              </Select>
              </div>
              <div className='class'>
                <TextField
                  id="outlined-password-input"
                  label="Pickup"
                  value={pickup}
                  onChange={(e)=>setPickup(e.target.value)}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Destination"
                  value={destination}
                  onChange={(e)=>setDestination(e.target.value)}

                />
              </div>
              <div>
                <Button type="submit" variant="contained" style={{
                  "margin":"18px", "background-color": "#272D55", "width": "462px", "padding": "15px", "margin-left":"10px"
                }}>Make Order</Button>
              </div>
            </Box>
        </form>
      </div>
    </>
  )

}

export default OrderForm;






