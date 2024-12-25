/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from 'react-icons/io'

const CModal = ({color,setOpenC,pushApiC,setYear,setMaxspeed,location,setCover,setLocationID,setPremiumP,setPremiumA,setPremiumAS,setPremiumUS,setPremiumU,setDeposit,setPetrol,setLimitp,setDrives,setMator,setTransmission,setMaxpeople,saveModels,setSecond,setImg,setCityID,saveCity,saveBrand,setBrandId,setModelID,setColor,saveCategories,setCategoryID,premiumUS,premiumAS,premiumu,premiuma,premiump,deposit,limitperday,petrol,driveSide,setMatorID,transmissionID,maxpeopleID,maxspeedID,second,year,editCategoryId
  // cover,
  // currentimg,
}) => {

  const handleSubmit = (e) => {
e.preventDefault();
setOpenC(false)
pushApiC(e);
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
setCover("") };

  const a = (e) => {
    e.preventDefault();
    pushApiC(e);
    setOpenC(false)
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
  
  return (
    <div>
      <div className='modal_overlay'>
        <div className='modal_content'>
          <button className='modal_close' onClick={a}>
            <IoIosCloseCircleOutline />
          </button>
          <form onSubmit={handleSubmit}>
            <h2 className='modal_title'>{`${editCategoryId ? "edit" :" Add Model"}`}</h2>
            <div className='modal_box'>
              <select
                name='chose'
                onChange={e => setBrandId(e.target.value)}
                aria-label='Choose a brand'
                required
              >
                <option value='' disabled selected>
                  Select a brand
                </option>
                {saveBrand?.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>

              <select name='chose' onChange={e => setModelID(e.target.value)} aria-label='Choose a model' required >
                <option value='' disabled selected>
                  Select a model
                </option>
                {saveModels?.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.brand_title}
                  </option>
                ))}
              </select>
              <select name='chose' onChange={e => setCategoryID(e.target.value)} aria-label='Choose a category' required >
                <option value='' disabled selected>
                  Select a category
                </option>
                {saveCategories?.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name_en}
                  </option>
                ))}
              </select>

              <select name='chose' onChange={e => setCityID(e.target.value)} aria-label='Choose a city' required >
                <option value='' disabled selected>
                  Select a city
                </option>
                {saveCity?.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select name='chose' onChange={e => setLocationID(e.target.value)} aria-label='Choose a location' required >
                <option value='' disabled selected>
                  Select a location
                </option>
                {location?.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select name="" id="">
                <option value=""> Select inclusive</option>
                <option value=""> true</option>
                <option value=""> false</option>
              </select>

              
      <input value={color} required onChange={e => setColor(e.target.value)} type='text' placeholder='Car color'/>
      <input required onChange={e => setYear(e.target.value)} type='number' value={year} placeholder='Car year' />
      <input required onChange={e => setSecond(e.target.value)} type='number' value={second} placeholder='Car seconds'/> 
      <input required onChange={e => setMaxspeed(e.target.value)} type='number' value={maxspeedID} placeholder='Max speed'/>
      <input required onChange={e => setMaxpeople(e.target.value)} type='number' value={maxpeopleID} placeholder='Max people'/>
      <input required onChange={e => setTransmission(e.target.value)} type='number' value={transmissionID} placeholder='Transmission'/>
      <input required onChange={e => setMator(e.target.value)} type='number' value={setMatorID} placeholder='Motor'/>
      <input required onChange={e => setDrives(e.target.value)} type='number' value={driveSide} placeholder='Drive side'/>
      <input required onChange={e => setPetrol(e.target.value)} type='number' value={petrol} placeholder='Petrol'/>
      <input required onChange={e => setLimitp(e.target.value)} type='number' value={limitperday} placeholder='Limit'/>
      <input required onChange={e => setDeposit(e.target.value)} type='number' value={deposit} placeholder='Deposit'/>
      <input required onChange={e => setPremiumP(e.target.value)} type='number' value={premiump} placeholder='Premium' />
      <input required onChange={e => setPremiumA(e.target.value)} type='number' value={premiuma} placeholder='Premium AED' />
      <input required onChange={e => setPremiumU(e.target.value)} type='number' value={premiumu} placeholder='Premium USD' />
      <input required onChange={e => setPremiumAS(e.target.value)} type='number' value={premiumAS} placeholder='AED sale' />
      <input required onChange={e => setPremiumUS(e.target.value)} type='number' value={premiumUS} placeholder='USD sale' />
      <input  required onChange={e => setImg(e.target.files[0])} accept='image/*' type='file'/>
              {/* {
                currentimg && (
                  <div className="image_preview">
                    {
                      currentimg?.map(item=>(
                        // console.log(item)
                        // <img key={item} src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_id?.image}`} alt="Existing Category" style={{ width: "100px", height: "auto" }} />
                        <img key={item} src={`https://realauto.limsa.uz/api/uploads/images/${item?.image?.src}`}  alt="Existing Category" style={{ width: "100px", height: "auto" }} />
                      ))
                    }
                </div>
                )
              } */}
              <input type='file' accept='image/*' required onChange={e => setCover(e.target.files[0])}/>
              {/* {
                cover && (
                  <div className="image_preview">
                  <img src={`https://realauto.limsa.uz/api/uploads/images/${cover}`} alt="Existing Category" style={{ width: "100px", height: "auto" }} />
                </div>
                )
              } */}
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CModal

