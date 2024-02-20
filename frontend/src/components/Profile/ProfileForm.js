import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


function ProfileForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [location, setLocation] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    fetch('/user_profiles',{
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          firstName,
          lastName,
          location,
          telephone,
      }),
  })
    .then((r)=> r.json())
    navigate('/profile')
  }

  return (
    <>
      {/* <Navbar /> */}

      <div className='container my-4 d-flex align-items-center justify-content-center'>
        <form class="w-full max-w-lg" onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}  />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Location
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={location} onChange={(e)=>setLocation(e.target.value)} />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Telephone
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={telephone} onChange={(e)=>setTelephone(e.target.value)} />
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button type="submit button" class="btn btn-primary">Create Profile</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProfileForm
