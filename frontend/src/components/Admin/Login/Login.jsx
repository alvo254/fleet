// import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';




export default function Login({setUser}) {

    // const { setAuth } = useAuth();
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    // const userRef = useRef();
    // const errRef = useRef();

    // const [email, setUser] = useState('');
    // const [password, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])


    const [form, setForm] = useState({
        email: "",
        password: ""
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form,[name]: value})
      };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const createUser = async () => {
    //       const newUser = await login(user);
    //       setForm(newUser);
    //       setTimeout(() => {
    //         // history.push("/");
    //       }, 500);
    //     };
    //     createUser();
    //   };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch("http://localhost:3004/users/login",{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({user: {
    //             email:form.email,
    //             password: form.password
    //         }},
    //         )
    //     })
    //     .then(response => response.json())
    //     .then(user =>{
    //         console.log(user)
    //         // sessionStorage.setItem("user_id", JSON.stringify(user.id))
    //         setUser(user)
    //         // navigate("/")
    //     }
    //     ).catch(err => console.log("Login error", err));

    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(LOGIN_URL,
    //             JSON.stringify({ email, password }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' }
    //                 // withCredentials: true
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data));
    //         //console.log(JSON.stringify(response));
    //         const accessToken = response?.data?.accessToken;
    //         const roles = response?.data?.role;
    //         console.log(response)
    //         setAuth({ email, password, roles, accessToken });
    //         setUsers('');
    //         setPwd('');
    //         navigate(from, { replace: true });
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 400) {
    //             setErrMsg('Missing Username or Password');
    //         } else if (err.response?.status === 401) {
    //             setErrMsg('Unauthorized');
    //         } else {
    //             setErrMsg('Login Failed');
    //         }
    //         errRef.current.focus();
    //     }
    // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     axios.post("/users/signin",{
    //         email: form.email,
    //         password: form.password
    //     })
    //     .then((res) => {console.log(res.data);
    //     // sessionStorage.setItem("user_id", JSON.stringify(user.id))

    // })
    //     .finally(()=>
    //     setUser({
    //         email: "",
    //         password: ""
    //     }))

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // post user credentialas to login route
        fetch("https://quickfleet-api.herokuapp.com/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setUser(user);
              navigate("/dashboard");
              console.log(user);
              sessionStorage.setItem("user", JSON.stringify(user));
              console.log(user);
              // alert(errors);
            });
          } else {
            res.json().then((error) => setErrors(error.errors));
          }
        });
      };



    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                <span className='quick'>Log</span><span className='fleet'>In</span>
                </h1>
            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}

                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            // ref={userRef}
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            // ref={userRef}
                            name='password'
                            onChange={handleChange}
                            value={form.password}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href=" "
                        className="text-xs text-blue-600"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        {/* <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 login" /> */}
                        <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to='/Signup'>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
