import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="firstLayer">
        <div className="title">
          GET IN TOUCH
        </div>
        <div className="contacts">
          <div className="title">
            Makati Site Head
          </div>
          <div className="name">Rachel Erlyn Magsakay</div>
          <div className="number">
          rermagsakay@bpi.com.ph
          </div>
        </div>
        <div className="contacts">
          <div className="title">
            South Site Head
          </div>
          <div className="name">Cleiza Marie Ordonio</div>
          <div className="number">
          cmfordonio@bpi.com.ph
          </div>
        </div>
        <div className="contacts">
          <div className="title">
            North Site Head
          </div>
          <div className="name">Paul Mendoza</div>
          <div className="number">
          pdmendoza@bpi.com.ph
          </div>
        </div>
        <div className="goUp" onClick={() => { window.scrollTo(0, 0) }}>
          <div className="arrow">
            <ion-icon name="arrow-up-outline"></ion-icon>
          </div>
        </div>

      </div>
      <div className="secLayer">
        Copyright © UTS.com All rights reserved.
      </div>
    </div>

  )
}

export default Footer
