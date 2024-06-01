import React from 'react'
import '../styles/section5.css'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import axicon from '../assets/axicon.png'

function Section5() {
  return (
    <section className='section5'>
      <article className='section5-article'>
        <div className='section5-article-container'>
          <div className='section5-header'>
            <p>Meet The Team</p>
          </div>

          <div className='section5-article-cards'>

            <div className='section5-article-card'>
              <img src={image8}/>
              <p className='section5-card-header'>EarlwinCantillo.eth</p>
              <p className='section5-card-desc'>Cofounder</p>
              <img src={axicon}/>
            </div>

            <div className='section5-article-card'>
              <img src={image9}/>
              <p className='section5-card-header'>CzarInso.eth</p>
              <p className='section5-card-desc'>Cofounder Dev</p>
              <img src={axicon}/>
            </div>
          
          </div>


            


        </div>
      </article>
    </section>
  )
}

export default Section5
