import React from 'react'

const Philosophy = () => {
  return (
    <div className='philosophy'>
        <h3>ABOUT US</h3>
        <h1>Our Philosophy</h1>
        <div className='about-us'>
            <div className='about-img'>
                <img src={process.env.PUBLIC_URL + './images/Rectangle_6.png'} alt="" />
            </div>
            <div className='about-desc'>
                <div>
                    <h2 className='num'>Sustainable</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, ac tristique dolor. Aliquam nulla risus,</p>
                </div>
                <div>
                    <h2 className='num'>Fair & Share</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, </p>
                </div>
                <div>
                    <h2 className='num'>Experience</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nisl hendrerit, aliquet mi sed, scelerisque tortor. Aliquam eu scelerisque quam, ac tristique </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Philosophy