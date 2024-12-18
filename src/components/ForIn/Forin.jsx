import { useEffect, useState } from "react";
import  toast  from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const Forinn = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("tokenxon")
  const navigate = useNavigate()
  function submit(e) {
    e.preventDefault(); 
    setLoading(true);
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
    .finally(() => {
      setLoading(false);
    });
    setNumber('');
    setPassword('');
  }

  useEffect(() => {
    if(token) {
      navigate('/home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <div className="forin">
        <div className="container">
          <div className="forin_box">
            <form onSubmit={submit} className="forin_card">
              <input  className="forin_input" 
                type="text"  
                value={number} 
                onChange={(e) => setNumber(e.target.value)}  
                placeholder="Username"  
                required 
              />
              <input className="forin_input"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
              />
              <button className="forin_btn" type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Login"}
                      </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forinn;





