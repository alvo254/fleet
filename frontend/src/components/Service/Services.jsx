import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Services.css"
import Navbar from '../Navbar/Navbar'


export default function Services() {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("/services")
        fetch('https://quickfleet-api.herokuapp.com/services')

        .then((res) => res.json())
        .then((data)=>{
            setServices(data)
            console.log("fetched")
        })
    }, [])


  return (
    <>
        {/* <Navbar /> */}
    <div class="grid gap-10 px-5 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
        {services.map((service)=>{
                return(
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={service.image_url}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {service.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ReactReadMoreReadLess
                    charLimit={100}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                    style={{"color": "blue"}}
                    >
                    {service.description}
                </ReactReadMoreReadLess>
                    </Typography>
                    </CardContent>
                </Card>
                )
            })}
            <div className='account'>
                <p>Interested in our services?</p>
                <h5>Create an account <a href="/login">Proceed</a></h5>
            </div>
            </div>
    </>

  );
}
