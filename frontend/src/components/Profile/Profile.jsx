import React, {useState, useEffect} from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Profile() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/user_profiles')
    .then((res)=> res.json())
    .then((data) => setUsers(data))
  }, [])

  return (
    <>
      {/* <Navbar /> */}
      <div class="container mt-4">
        <div class="row">
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
              {users.map((user)=>{
                return(
                  <div>
                    <div class="background"></div>
                    <div class="outer-div">
                      <div class="inner-div">
                        <div class="front">
                          <div class="front__bkg-photo"></div>
                          <div class="front__face-photo"></div>
                          <div class="front__text">
                            <h3 class="front__text-header"><span>{user.firstName}</span> <span>{user.lastName}</span></h3>
                            <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>{user.location}</p>
                            <span class="front__text-hover">Read more about Me</span>
                          </div>
                        </div>
                        <div class="back">
                          <div class="social-media-wrapper">
                            <a href=" " class="social-icon"><i class="fa-solid fa-pencil" aria-hidden="true"></i></a>
                            <a href=" " class="social-icon"><i class="fa fa-phone">{user.telephone}</i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          <div class="col-md-6 d-flex align-items-center justify-content-center my-4">
          {/* <div class="background"></div> */}
                    <div class="outer-div">
                      <div class="inner-divv">
                        <div class="front">
                          <div class="box booking-orders">
                              <p>Book your Orders</p>
                                <Link to="/orderform">
                                  <button class="btn">
                                      Book Orders
                                  </button>
                                </Link>
                              <p>Check your Orders</p>
                                <Link to="/ordercard">
                                  <button class="btn">
                                      Manage Your Orders
                                  </button>
                                </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          {/* <div class="box">
            <div class='options'>
            <p>Book your Orders</p>
              <button class="btn">
                <Link to="/orderform" >
                  Book Orders
                </Link>
              </button>
              <p>Check your Orders</p>
              <button class="btn">
                <Link to="/ordercard" >
                  Manage Your Orders
                </Link>
              </button> */}
              {/* <p>Track your Orders</p>
              <button class="btn">
                <Link to="/order/${id}" >
                  Track Your Order
                </Link>
              </button> */}
            {/* </div>
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </>

  )
}

export default Profile
