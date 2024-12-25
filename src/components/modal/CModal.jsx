/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from 'react-icons/io'

const CModal = ({
  color, setOpenC, pushApiC, setYear, setMaxspeed, location, setCover, setLocationID, setPremiumP, 
  setPremiumA, setPremiumAS, setPremiumUS, setPremiumU, setDeposit, setPetrol, setLimitp, setDrives, 
  setMator, setTransmission, setMaxpeople, saveModels, setSecond, setImg, setCityID, saveCity, saveBrand, 
  setBrandId, setModelID, setColor, saveCategories, setCategoryID, premiumUS, premiumAS, premiumu, 
  premiuma, premiump, deposit, limitperday, petrol, driveSide, setMatorID, transmissionID, maxpeopleID, 
  maxspeedID, second, year, editCategoryId, brandID, imgID ,  modelID,
  categoryID,
  cityID,
  locationID,
  i,setI,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenC(false);
    pushApiC(e);
    // Reset all values after submit
    setModelID("")
    setLocationID("")
    setCityID("")
    setCategoryID("")
    setBrandId(null);
    setColor("");
    setYear("");
    setSecond("");
    setMaxspeed("");
    setMaxpeople("");
    setTransmission("");
    setMator("");
    setDrives("");
    setPetrol("");
    setLimitp("");
    setDeposit("");
    setPremiumP("");
    setPremiumA("");
    setPremiumU("");
    setPremiumAS("");
    setPremiumUS("");
    setImg("");
    setI(""); 
    setCover("");
  };

  const closeModal = (e) => {
    e.preventDefault();
    setOpenC(false);
    setBrandId(null);
    setLocationID("")
    setModelID("")
setCityID("")
setCategoryID("")
    setColor("");
    setYear("");
    setSecond("");
    setMaxspeed("");
    setMaxpeople("");
    setTransmission("");
    setMator("");
    setDrives("");
    setPetrol("");
    setLimitp("");
    setDeposit("");
    setPremiumP("");
    setPremiumA("");
    setPremiumU("");
    setPremiumAS("");
    setPremiumUS("");
    setImg("");
    setI(""); 
    setCover("");
  };
console.log(imgID);
// console.log(i);


  return (
    <div>
      <div className='modal_overlay'>
        <div className='modal_content'>
          <button className='modal_close' onClick={closeModal}>
            <IoIosCloseCircleOutline />
          </button>
          <form onSubmit={handleSubmit}>
            <h2 className='modal_title'>{`${editCategoryId ? "Edit" : "Add"} Model`}</h2>
            <div className='modal_box'>
              <select value={brandID} onChange={(e) => setBrandId(e.target.value)}>
                <option value="">Select Brand</option>
                {saveBrand.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.title}
                  </option>
                ))}
              </select>

              <select value={modelID} onChange={(e) => setModelID(e.target.value)} aria-label='Choose a model' required>
                <option value='' disabled>
                  Select a model
                </option>
                {saveModels?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.brand_title}
                  </option>
                ))}
              </select>

              <select value={categoryID} onChange={(e) => setCategoryID(e.target.value)} aria-label='Choose a category' required>
                <option value='' disabled>
                  Select a category
                </option>
                {saveCategories?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name_en}
                  </option>
                ))}
              </select>

              <select value={cityID} onChange={(e) => setCityID(e.target.value)} aria-label='Choose a city' required>
                <option value='' disabled>
                  Select a city
                </option>
                {saveCity?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              <select value={locationID} onChange={(e) => setLocationID(e.target.value)} aria-label='Choose a location' required>
                <option value='' disabled>
                  Select a location
                </option>
                {location?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>


              <select value={i === true ? 'true' : i === false ? 'false' : ''} onChange={(e) => setI(e.target.value)}>
  <option value="">Select inclusive</option>
  <option value="true">true</option>
  <option value="false">false</option>
</select>

              {/* <select>
                <option value="">Select inclusive</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select> */}

              <input value={color} onChange={(e) => setColor(e.target.value)} required type='text' placeholder='Car color' />
              <input value={year} onChange={(e) => setYear(e.target.value)} required type='number' placeholder='Car year' />
              <input value={second} onChange={(e) => setSecond(e.target.value)} required type='number' placeholder='Car seconds' />
              <input value={maxspeedID} onChange={(e) => setMaxspeed(e.target.value)} required type='number' placeholder='Max speed' />
              <input value={maxpeopleID} onChange={(e) => setMaxpeople(e.target.value)} required type='number' placeholder='Max people' />
              <input value={transmissionID} onChange={(e) => setTransmission(e.target.value)} required type='number' placeholder='Transmission' />
              <input value={setMatorID} onChange={(e) => setMator(e.target.value)} required type='number' placeholder='Motor' />
              <input value={driveSide} onChange={(e) => setDrives(e.target.value)} required type='number' placeholder='Drive side' />
              <input value={petrol} onChange={(e) => setPetrol(e.target.value)} required type='number' placeholder='Petrol' />
              <input value={limitperday} onChange={(e) => setLimitp(e.target.value)} required type='number' placeholder='Limit' />
              <input value={deposit} onChange={(e) => setDeposit(e.target.value)} required type='number' placeholder='Deposit' />
              <input value={premiump} onChange={(e) => setPremiumP(e.target.value)} required type='number' placeholder='Premium' />
              <input value={premiuma} onChange={(e) => setPremiumA(e.target.value)} required type='number' placeholder='Premium AED' />
              <input value={premiumu} onChange={(e) => setPremiumU(e.target.value)} required type='number' placeholder='Premium USD' />
              <input value={premiumAS} onChange={(e) => setPremiumAS(e.target.value)} required type='number' placeholder='AED sale' />
              <input value={premiumUS} onChange={(e) => setPremiumUS(e.target.value)} required type='number' placeholder='USD sale' />

              <input required onChange={(e) => setImg(e.target.files[0])} accept='image/*' type='file' />
              <input required onChange={(e) => setCover(e.target.files[0])} accept='image/*' type='file' />

            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CModal;
