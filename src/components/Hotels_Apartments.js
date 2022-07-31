import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Hotels_Apartments = () => {
  return (
    <div className='h-a'>
      <h3>BEAUTIES</h3>
        <h1>Hotels and Apartments</h1>
        <div className='h-a-container'>
            <div className='places'>
              <img src={process.env.PUBLIC_URL + './images/Rectangle_9.png'} alt="" />
              <div className='place-name'>
                  <div>
                    <h3>Reine</h3>
                    <div className='rating'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                  </div>
                  <span>$720</span>
              </div>
            </div>
            <div className='places'>
              <img src={process.env.PUBLIC_URL + './images/Rectangle_10.png'} alt="" />
              <div className='place-name'>
                  <div>
                    <h3>Norway</h3>
                    <div className='rating'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                    </div>
                  </div>
                  <span>$350</span>
              </div>
            </div>
            <div className='places'>
              <img src={process.env.PUBLIC_URL + './images/Rectangle_11.png'} alt="" />
              <div className='place-name'>
                  <div>
                    <h3>Bergen</h3>
                    <div className='rating'>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStarHalf} />
                    </div>
                  </div>
                  <span>$670</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hotels_Apartments