import React from 'react'
import '../styles/section2.css'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'

function Section2() {
  return (
    <section className='section2'>
      <article className='section2-article'>
          <div className='section2-card-1'>
          <div className="section2-card-img-group">
            <img className="atom-robot" src={image4} alt="atom-robot"/>
            <img className="atom-robot-heart" src={image5} alt="atom-robot-heart"/>
              <p className='section2-card-body-part-head'>Head</p>
              <p className='section2-card-body-part-back'>Back</p>
              <p className='section2-card-body-part-body'>Body</p>
              <p className='section2-card-body-part-booster'>Booster</p>
          </div>
          </div>
          <div className='section2-card-2'>
            <div className='section2-card-2-header'>
              <p>Meet ATOM</p>
            </div>
            <div className='section2-card-2-description'>
              <p>ATOM's were designed to be the perfect Blockchain companions.<br/> The collection consists of 5k randomly generated pfps made from<br/> over 160 traits. Each ATOM is powered by a Soul Core. This trait<br/> will determine your unique abilities throughout all of our web3<br/> adventures. This ensures that each ATOM will have unique utility<br/> decided by its traits. The core also doubles as your face trait<br/> giving your ATOM a unique personality. As an ATOM owner you will<br/> gain access to all of our giveaways, airdrops, next gen expansions<br/> and more. </p>
            </div>
          </div>
      </article>
    </section>
  )
}

export default Section2
