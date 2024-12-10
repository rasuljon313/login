import { useState } from "react";

const Forinn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function submit(e) {
    e.preventDefault(); 
    console.log(name);
    console.log(password);
  }

  return (
    <div>
      <div className="forin">
        <div className="container">
          <div className="forin_box">
            <form onSubmit={submit} className="forin_card">
              <input  type="text"  value={name} onChange={(e) => setName(e.target.value)}  placeholder="Username"  required  />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required 
              />
              <button  type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forinn;

