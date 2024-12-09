// import {  Form } from "antd";
// import { useState } from "react";
// const Forin = () => {

//     const [number, setNumber] = useState()
//     const [password, setPassword] = useState()


//     function loginSubmit(e){
//         e.preventDefault();
//    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin"),{
//     method:"POST",
//     headers:{
//     "Content-Type": "application/json; charset=utf-8"
//     },
//     body:{
//     phone_number:number,
//     password:password
//     }
//    }.then((response)=> response.json())
//    .then((natija)=>console.log(natija))
//    e.target.reset()
//     }
  
//     return (
//         <Form onSubmit={loginSubmit}>
//             <input type="text" placeholder="phone" onChange={(e)=> setNumber(e?.target?.value) } required />
//             <input type="text" placeholder="password" onChange={(e)=> setPassword(e?.target?.value)}  required />
//             <button>click</button>
//         </Form>
//     );
// }

// export default Forin

// import { Form } from "antd";
// import { useState } from "react";

// const Forin = () => {
//   const [number, setNumber] = useState("");
//   const [password, setPassword] = useState("");

//   function loginSubmit(e) {
//     e.preventDefault(); // Formaning avtomatik yuborilishini to'xtatish

//     fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//       body: JSON.stringify({
//         phone_number: number,
//         password: password,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok: " + response.statusText);
//         }
//         return response.json();
//       })
//       .then((result) => console.log("Serverdan javob:", result))
//       .catch((error) => console.error("Xato yuz berdi:", error));

//     // Formani tozalash
//     setNumber("");
//     setPassword("");
//   }

//   return (
//     <Form onSubmit={loginSubmit}>
//       <input
//         type="text"
//         placeholder="Telefon raqami"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Parol"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Jo'natish</button>
//     </Form>
//   );
// };

// export default Forin;
