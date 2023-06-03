import "./displaystyle.css"

import React from 'react'

function Display(props) {
  // const date = new Date();
  // console.log(date)
  // const hour = date.getHours();
  // const min = date.getMinutes(); 
  // const time = hour + ":" + min;


  return (
    <div>
        {/* <h2>Headline: {props.text.headline}</h2>
        <h2>Ticker: {props.text.ticker}</h2>  */}
      <div className="central-div">
        <img src = {props.src} alt = "newspic" className="central-div"/>
        <div className="pos-div">
          <h2 className="breaking-text">BREAKING NEWS</h2>
          <h3 className = "headline">{props.text.headline}</h3>
          <h3 className="ticker">{props.text.ticker}</h3>
        </div>
      </div>

    </div>
  )
}

export default Display