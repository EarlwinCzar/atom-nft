import React from 'react'
import '../styles/section1.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

function Section1() {
  return (
    <section className="section1">
      <article className="section1-article">
        <div className="section1-card-1">
          <p className="section1-card-1-header">Welcome to World<br/> Without Form</p>
          <p className="section1-card-1-description">World Without Form is a community driven project looking to<br/> create a unique musical experience for our members. Our goal is<br/> to incorporate the under appreciated utility of sound into our<br/> many web3 expansions. Your blockchain companion on this<br/> adventure will be known as ATOM. The ATOM collection will consist<br/> of 5k randomly generated NFTs on the Ethereum blockchain.</p>
          <div className="section1-button-section">
          <button className="section1-button">MINT</button>
          </div>
        </div>
        <div className="section1-card-2">
          <div className="section1-card-img-group">
          <img className="section1-img-1" src={image1}/>
          <img className="section1-img-2" src={image2}/>
          <img className="section1-img-3" src={image3}/>
        </div>
        </div>
      </article>
    </section>
  )
}

export default Section1
