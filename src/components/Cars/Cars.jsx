import { useNavigate } from 'react-router-dom'
import Sidebar from '../bar/Sidebar'
const Cars = () => {
    const token = localStorage.getItem("tokenxon")
    const navigate = useNavigate()
    if(!token){
        navigate("/")
    }else{
        navigate("/car")
    }
  return (
    <div>
        ewfwefz
        <Sidebar/>
    </div>
  )
}

export default Cars