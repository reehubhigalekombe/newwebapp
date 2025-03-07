import React, {useState} from 'react'
import axios from 'axios';
import "../styles/auth.css"
function Auth () {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isLogin ? "http://localhost:5500/api/login" : "http://localhost:5500/api/signup";
            const res = await axios.post(endpoint, formData);
            setMessage(res.data.message);
            if (isLogin && res.data.token) {
                localStorage.setItem("token", res.data.token);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || "something went wrong")
        }
    };
  return (
    <div className='myContainer'>
<h2>{isLogin ? "Login" : "Sign Up"}</h2>
{message && <p className='message'  >{message}</p>}
<form onSubmit={handleSubmit} className='form'>
{isLogin && (
    <input type='text'  name='username' placeholder='Username'  onChange={handleChange}  required  className='input'/>
)}
<input type='email'  name='email' placeholder='Email'  onChange={handleChange}  required  className='input'/>
<input type='password'  name='password' placeholder='Password'  onChange={handleChange}  required  className='input'/>
<button type='submit' className='button'>{isLogin? "Login" : "Sign Up"}</button>

</form>

<p onClick={() => setIsLogin(!isLogin)} className='toggle'>  
    {isLogin?  "Don't have an account? Sign up" : "Already have an accout?  Login"}
</p>
    </div>
  )
}

export default Auth
