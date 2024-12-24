/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from 'react-icons/io'

const CModal = ({
  color,
  setOpenC,
  pushApiC,
  setYear,
  setMaxspeed,
  location,
  setCover,
  setLocationID,
  setPremiumP,
  setPremiumA,
  setPremiumAS,
  setPremiumUS,
  setPremiumU,
  setDeposit,
  setPetrol,
  setLimitp,
  setDrives,
  setMator,
  setTransmission,
  setMaxpeople,
  saveModels,
  setSecond,
  setImg,
  setCityID,
  saveCity,
  saveBrand,
  setBrandId,
  setModelID,
  setColor,
  saveCategories,
  setCategoryID,
  cover
}) => {
  
  return (
    <div>
      <div className='modal_overlay'>
        <div className='modal_content'>
          <button className='modal_close' onClick={() => setOpenC(false)}>
            <IoIosCloseCircleOutline />
          </button>
          <form onSubmit={pushApiC}>
            <h2 className='modal_title'>{'Add Model'}</h2>
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

              <select
                name='chose'
                onChange={e => setModelID(e.target.value)}
                aria-label='Choose a model'
                required
              >
                <option value='' disabled selected>
                  Select a model
                </option>
                {saveModels?.map(item => (
                  // console.log(item)
                  <option key={item.id} value={item.id}>
                    {item.brand_title}
                  </option>
                ))}
              </select>

              <select
                name='chose'
                onChange={e => setCategoryID(e.target.value)}
                aria-label='Choose a category'
                required
              >
                <option value='' disabled selected>
                  Select a category
                </option>
                {saveCategories?.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name_en}
                  </option>
                ))}
              </select>

              <select
                name='chose'
                onChange={e => setCityID(e.target.value)}
                aria-label='Choose a city'
                required
              >
                <option value='' disabled selected>
                  Select a city
                </option>
                {saveCity?.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              <select
                name='chose'
                onChange={e => setLocationID(e.target.value)}
                aria-label='Choose a location'
                required
              >
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
              <input
               value={color}
                required
                onChange={e => setColor(e.target.value)}
                type='text'
                placeholder='Car color'
              />
              <input
                required
                onChange={e => setYear(e.target.value)}
                type='number'
                placeholder='Car year'
              />
              <input
                required
                onChange={e => setSecond(e.target.value)}
                type='number'
                placeholder='Car seconds'
              />
              <input
                required
                onChange={e => setMaxspeed(e.target.value)}
                type='number'
                placeholder='Max speed'
              />
              <input
                required
                onChange={e => setMaxpeople(e.target.value)}
                type='number'
                placeholder='Max people'
              />
              <input
                required
                onChange={e => setTransmission(e.target.value)}
                type='number'
                placeholder='Transmission'
              />
              <input
                required
                onChange={e => setMator(e.target.value)}
                type='number'
                placeholder='Motor'
              />
              <input
                required
                onChange={e => setDrives(e.target.value)}
                type='number'
                placeholder='Drive side'
              />
              <input
                required
                onChange={e => setPetrol(e.target.value)}
                type='number'
                placeholder='Petrol'
              />
              <input
                required
                onChange={e => setLimitp(e.target.value)}
                type='number'
                placeholder='Limit'
              />
              <input
                required
                onChange={e => setDeposit(e.target.value)}
                type='number'
                placeholder='Deposit'
              />
              <input
                required
                onChange={e => setPremiumP(e.target.value)}
                type='number'
                placeholder='Premium'
              />
              <input
                required
                onChange={e => setPremiumA(e.target.value)}
                type='number'
                placeholder='Premium AED'
              />
              <input
                required
                onChange={e => setPremiumU(e.target.value)}
                type='number'
                placeholder='Premium USD'
              />
              <input
                required
                onChange={e => setPremiumAS(e.target.value)}
                type='number'
                placeholder='AED sale'
              />
              <input
                required
                onChange={e => setPremiumUS(e.target.value)}
                type='number'
                placeholder='USD sale'
              />
              <input
                required
                onChange={e => setImg(e.target.files[0])}
                accept='image/*'
                multiple
                value={cover}
                type='file'
              />
              <input
                type='file'
                accept='image/*'
                multiple
                required
                onChange={e => setCover(e.target.files[0])}
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CModal

