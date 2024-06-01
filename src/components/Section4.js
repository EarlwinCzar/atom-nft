import React from 'react'
import '../styles/section4.css'

function Section4() {
  return (
    <section className='section4'>
      <article className='section4-article'>
        <div className='section4-article-container'>
        <div className='section4-header'>
          <p>Roadmap</p>
        </div>

        <div className='section4-article-cards'>

          <div className='section4-article-card'>
            <p className='section4-article-card-header'>Launch Day!!!</p>
            <p className='section4-article-card-description'>5k ATOMs will find their new home on the blockchain.<br/>
            We will be holding raffles and giveaways for all new members<br/> in our ATOM family.</p>
          </div>
 
          <div className='section4-article-card'>
            <p className='section4-article-card-header'>Game Development</p>
            <p className='section4-article-card-description'>Game development will begin IMMEDIATELY after launch.<br/> The game will include sound utility directly connected to<br/> your ATOMs traits. More details coming soon.</p>
          </div>

          <div className='section4-article-card'>
            <p className='section4-article-card-header'>Airdrop</p>
            <p className='section4-article-card-description'>Airdrop Snapshot for our first airdrop will be taken 2-4<br/> weeks after mint date.</p>
          </div>

          <div className='section4-article-card special'>
            <p className='section4-article-card-header'>Metaverse Land and 3D Expansion</p>
            <p className='section4-article-card-description'> Metaverse Land and 3D Expansion. To kick off our metaverse<br/> plans we will begin building on NFT Worlds platform. The<br/> world will include a headquarters, community games<br/> stadium, and many other missions. All quests will give<br/> players the opportunity to earn more ATOMs for use in our<br/> primary game.</p>
          </div>

        </div>
      </div>
      </article>
    </section>
  )
}

export default Section4
