import Nav from '../../components/nav/Nav'
import Sidebar from '../../components/bar/Sidebar'
import { useEffect, useState } from 'react'
import CModal from '../modal/CModal'
import { BsQuestionCircleFill } from 'react-icons/bs'
import { IoPencil } from 'react-icons/io5'
import { ImBin } from 'react-icons/im'
import Delate from '../modal/Delate'

const Cars = () => {
  const [saveBrand, setSaveBrand] = useState([])
  const [saveCars, setSaveCars] = useState([])
  const [saveModels, setSaveModels] = useState([])
  const [saveCategories, setSaveCategories] = useState([])
  const [saveCity, setSaveCity] = useState([])
  const [location, setLocation] = useState([])
  const [openC, setOpenC] = useState(false)
  const [color, setColor] = useState('')
  const [year, setYear] = useState('')
  const [maxspeedID, setMaxspeed] = useState('')
  const [maxpeopleID, setMaxpeople] = useState('')
  const [transmissionID, setTransmission] = useState('')
  const [setMatorID, setMator] = useState('')
  const [driveSide, setDrives] = useState('')
  const [second, setSecond] = useState('')
  const [petrol, setPetrol] = useState('')
  const [limitperday, setLimitp] = useState('')
  const [deposit, setDeposit] = useState('')
  const [premiump, setPremiumP] = useState('')
  const [premiuma, setPremiumA] = useState('')
  const [premiumAS, setPremiumAS] = useState('')
  const [premiumu, setPremiumU] = useState('')
  const [premiumUS, setPremiumUS] = useState('')
  const [inclusive, setInclusive] = useState(false)
  const [delateNameC, setDelateName] = useState("")
  const [delatModalopen, setDeleteModalOpen] = useState("")
  const [delateID, setDelateID] = useState("")
  const [editCategoryId, setEditCategoryId] = useState()

  const [imgID, setImg] = useState(null)
  const [cover, setCover] = useState('')
  const [brandID, setBrandId] = useState(null)
  const [categoryID, setCategoryID] = useState("")
  const [currentimg, setcurrentimg] = useState("")
  const [i, setI] = useState("")
  
  const [modelID, setModelID] = useState('')
  const [cityID, setCityID] = useState('')
  const [locationID, setLocationID] = useState('')
  const token = localStorage.getItem('tokenxon')

  const getBrand = () => {
    fetch('https://realauto.limsa.uz/api/brands')
      .then(res => res.json())
      .then(elem => setSaveBrand(elem?.data))
  }
  const getModel = () => {
    fetch('https://realauto.limsa.uz/api/models')
      .then(res => res.json())
      .then(elem =>setSaveModels(elem?.data))
  }
  const getCategory = () => {
    fetch('https://realauto.limsa.uz/api/categories')
      .then(res => res.json())
      .then(elem => setSaveCategories(elem?.data))
  }
  const getCity = () => {
    fetch('https://realauto.limsa.uz/api/cities')
      .then(res => res.json())
      .then(elem => setSaveCity(elem?.data))
  }
  const getLocation = () => {
    fetch('https://realauto.limsa.uz/api/locations')
      .then(res => res.json())
      .then(elem => setLocation(elem?.data))
  }
  const getCar = () => {
    fetch('https://realauto.limsa.uz/api/cars')
      .then(res => res.json())
      .then(elem => setSaveCars(elem?.data))
  }
  useEffect(() => {
    getBrand()
    getCar()
    getModel()
    getCity()
    getLocation()
    getCategory()
  }, [])

  const pushApiC = (e) => {
    e.preventDefault();
    const formdata = new FormData()
    formdata.append('color', color)
    formdata.append('brand_id', brandID)
    formdata.append('location_id', locationID)
    formdata.append('model_id', modelID)
    formdata.append('category_id', categoryID)
    formdata.append('city_id', cityID)
    formdata.append('year', year)
    formdata.append('seconds', second)
    formdata.append('max_speed', maxspeedID)
    formdata.append('max_people', maxpeopleID)
    formdata.append('transmission', transmissionID)
    formdata.append('motor', setMatorID)
    formdata.append('drive_side', driveSide)
    formdata.append('petrol', petrol)
    formdata.append('limitperday', limitperday)
    formdata.append('deposit', deposit)
    formdata.append('premium_protection', premiump)
    formdata.append('price_in_aed', premiuma)
    formdata.append('price_in_usd', premiumu)
    formdata.append('price_in_aed_sale', premiumAS)
    formdata.append('price_in_usd_sale', premiumUS)
    formdata.append('inclusive', inclusive)
    formdata.append('cover', cover)
    if(imgID) formdata.append('images', imgID)

      const apiUrl = editCategoryId ? `https://realauto.limsa.uz/api/cars/${editCategoryId}` : "https://realauto.limsa.uz/api/cars";
      const method = editCategoryId ? "PUT" : "POST";
    fetch( apiUrl, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    })
      .then(res => res.json())
    .then((data) => {
      if (data.success) {
        getCar();
        setOpenC(false);
        setColor("");
        setYear("");
        setSecond("");
        setCityID("");
        setModelID("");
        setBrandId("");
        setImg(null);setCategoryID("")
        // setcurrentimg("")
        setEditCategoryId("");
      } else {
        console.error("Error:", data.message);
      }
    })
    .catch((err) => console.error("Error:", err));
  }
  const deleteCarscategory = () => {
      {
        delateID &&
         fetch(`https://realauto.limsa.uz/api/cars/${delateID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((item) => {
            if (item.success) {
              getCar();
              setDeleteModalOpen(false);
              setDelateID(null);
              setDelateName("");
              setSaveBrand([])
              setSaveCars([])
              setSaveModels([])
              setSaveCategories([])
              setSaveCity([])
              setLocation
              setColor("")
              setYear("")
              setSecond("")
              setMaxspeed("")
              setMaxpeople("")
              setTransmission("")
              setMator("")
              setDrives("")
              setPetrol("") 
              setLimitp("") 
              setDeposit("") 
              setPremiumP("") 
              setPremiumA("") 
              setPremiumU("") 
              setPremiumAS("") 
              setPremiumUS("") 
              setImg("") 
              setCover("") 
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
  }
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setDelateID(null);
    setDelateName("");
  };
  
  const editCategory = (item) => {
    // {
    //   console.log(item.inclusive);
      
    // }
    setI(item.inclusive)
    setOpenC(true)
    setEditCategoryId(item.id)
   setColor(item?.color)
   setYear(item?.year)
   setMaxspeed(item?.max_speed)
   setMaxpeople(item?.max_people)
   setTransmission(item?.transmission)
   setMator(item?.motor)
   setDrives(item?.drive_side)
   setSecond(item?.seconds)
   setPetrol(item.petrol)
   setLimitp(item?.limitperday)
   setDeposit(item?.deposit)
   setPremiumP(item?.premium_protection)
   setPremiumA(item?.price_in_aed)
   setPremiumU(item?.price_in_usd)
   setPremiumAS(item?.price_in_aed_sale)
   setPremiumUS(item?.price_in_usd_sale)
   setModelID(item?.model.id)
   setBrandId(item?.brand?.id);
   setLocationID(item?.location?.id)
   setCityID(item?.city?.id);
   setCategoryID(item?.category?.id);
 setcurrentimg(
    item?.car_images?.map((img) =>{ return img.image.src})
  );

   setCover(item?.cover || "")
  }

const confirmDeleteCategory = (id) => {
setDelateID(id?.id)
setDelateName(id?.category?.name_en)
setDeleteModalOpen(true);
}

console.log(currentimg);

  return (
    <div>
      <Nav setOpenC={setOpenC} />
      <div className='cars'>
        <Sidebar />
        <div className='cars_box'>
          <div className='container'>
          <div className="cars_card">
            <ul className='cars_list'>
              <li className='cars_item'>Brad img</li>
              <li className='cars_item'>City img</li>
              <li className='cars_item'>location img</li>
              <li className='cars_item'>Category name <span>EN</span></li>
              <li className='cars_item'>Model Name</li>
              <li className='cars_item'>Cars Images</li>
              <li className='cars_item'>Cars color</li>
              <li className='cars_item'>Cars year</li>
              <li className='cars_item'>Cars deposit</li>
              <li className='cars_item'>Cars drive <span>side</span> </li>
              <li className='cars_item'>Cars limit <span>per day</span> </li>
              <li className='cars_item'>Cars max <span>people</span></li>
              <li className='cars_item'>Cars max <span>speed</span></li>
              <li className='cars_item'>Cars motor</li>
              <li className='cars_item'>Cars petrol</li>
              <li className='cars_item'>Cars premium</li>
              <li className='cars_item'>Cars AED</li>
              <li className='cars_item'>Cars aed sale</li>
              <li className='cars_item'>Cars USD</li>
              <li className='cars_item'>Cars usd sale</li>
              <li className='cars_item'>Cars seconds</li>
              <li className='cars_item'>Cars <span>transmission</span></li>
              <li className='cars_item'>Update</li>
            </ul>

            {saveCars?.map(item => (  
              <section className="cars_list_box" key={item.id}>
                <div className="cars_list_card">
                <img className='cars_inbrandimg' src={`https://realauto.limsa.uz/api/uploads/images/${item.brand.image_src}`} alt={item.brand.title} />
                <img className='cars_inbrandimg' src={`https://realauto.limsa.uz/api/uploads/images/${item.city.image_src}`} alt={item.city.name} />
                <img className='cars_inbrandimg' src={`https://realauto.limsa.uz/api/uploads/images/${item.location.image_src}`} alt={item.location.name} />
                <div className='cars_color'>{item.category.name_en}</div>
                <div className='cars_color'>{item.model.name}</div>
                </div> 
                <div className="cars_img_card">
                {
                  item?.car_images?.map(item=> (
                    <section key={item?.id}>{item?.image?.src ? (
                        <img 
                        className='cars_img'
                        src={`https://realauto.limsa.uz/api/uploads/images/${item?.image?.src}`} 
                        alt="item image"
                      />
                    ) :   <BsQuestionCircleFill className='cars_svg' /> }
                    </section>
                  ))
                }
                 </div>
                 <div className='cars_color'>{item.color}</div>
                 <div className='cars_color'>{item.year}</div>
                 <div className='cars_color'>{item.deposit}</div>
                 <div className='cars_color'>{item.drive_side}</div>
                 <div className='cars_color'>{item.limitperday}</div>
                 <div className='cars_color'>{item.max_people}</div>
                 <div className='cars_color'>{item.max_speed}</div>
                 <div className='cars_color'>{item.motor}</div>
                 <div className='cars_color'>{item.petrol}</div>
                 <div className='cars_color'>{item.premium_protection}</div>
                 <div className='cars_color'>{item.price_in_aed}</div>
                 <div className='cars_color'>{item.price_in_aed_sale}</div>
                 <div className='cars_color'>{item.price_in_usd}</div>
                 <div className='cars_color'>{item.price_in_usd_sale}</div>
                 <div className='cars_color'>{item.seconds}</div>
                 <div className='cars_color'>{item.transmission}</div>
                  <div className="category_btns">
                <div className="category_btn" onClick={() => confirmDeleteCategory(item)}>
                        <ImBin />
                </div>
                 <button className="category_update" onClick={() => editCategory(item)}>
                   <IoPencil />
                 </button>
               </div>
              </section>
            ))}
            </div>
            </div>
          </div>
        </div>

      {openC && (
        <CModal
        setI={setI}
        i={i}
        imgID={imgID}
        editCategoryId={editCategoryId}
        categoryID={categoryID}
        year={year}
        second={second}
        maxspeedID={maxspeedID}
        maxpeopleID={maxpeopleID}
        transmissionID={transmissionID}
        setMatorID={setMatorID}
        driveSide={driveSide}
        petrol={petrol}
        limitperday={limitperday}
        deposit={deposit}
        premiump={premiump}
        premiuma={premiuma}
        premiumu={premiumu}
        premiumAS={premiumAS}
        premiumUS={premiumUS}
        // currentimg={currentimg}
        cover={cover}
        color={color}
          setCover={setCover}
          setInclusive={setInclusive}
          setLocationID={setLocationID}
          location={location}
          setPremiumUS={setPremiumUS}
          setPremiumAS={setPremiumAS}
          setPremiumU={setPremiumU}
          setPremiumA={setPremiumA}
          setPremiumP={setPremiumP}
          setDeposit={setDeposit}
          setLimitp={setLimitp}
          setPetrol={setPetrol}
          setDrives={setDrives}
          setMator={setMator}
          setTransmission={setTransmission}
          setMaxspeed={setMaxspeed}
          setMaxpeople={setMaxpeople}
          setImg={setImg}
          setSecond={setSecond}
          setYear={setYear}
          setCityID={setCityID}
          saveCity={saveCity}
          setModelID={setModelID}
          saveModels={saveModels}
          saveCategories={saveCategories}
          pushApiC={pushApiC}
          setBrandId={setBrandId}
          brandID={brandID}
          setCategoryID={setCategoryID}
          setColor={setColor}
          setOpenC={setOpenC}
          saveBrand={saveBrand}
          modelID={modelID}
cityID={cityID}
locationID={locationID}
        />
      )}
      {
        delatModalopen &&  <Delate delateNameC={delateNameC} deleteCarscategory={deleteCarscategory} closeDeleteModal={closeDeleteModal}/> 
      }
    </div>
  )
}

export default Cars