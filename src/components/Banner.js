import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
  return (
    <div className='banner'>
        <h2>EXPLORE</h2>
        <h1>NORWAY</h1>
        <div className='socials'>
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
            <div>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div>
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </div>
        <div className='location'>
            <div>
              <p>Trondheim</p>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <p>Geirangerfjord</p>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <p>Lofoten</p>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
        </div>
    </div>
  )
}

export default Banner