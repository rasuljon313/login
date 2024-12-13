import { useState } from "react";
import  toast  from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const Forinn = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate()
  function submit(e) {
    e.preventDefault(); 

    fetch("https://realauto.limsa.uz/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        phone_number: number,
        password: password
      })
    })
    .then((response) => response.json())
    .then((element) =>
    { 
      if(element?.success){
        localStorage.setItem("tokenxon", element?.data?.tokens?.accessToken?.token)
        toast.success(element?.message)
        navigate("/home")
      }else{
        toast.error("username or password is wrong")
      }
    }
    )
    setNumber('');
    setPassword('');
  }

  return (
    <div>
      <div className="forin">
        <div className="container">
          <div className="forin_box">
            <form onSubmit={submit} className="forin_card">
              <input  
                type="text"  
                value={number} 
                onChange={(e) => setNumber(e.target.value)}  
                placeholder="Username"  
                required 
              />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forinn;





