import "./displaystyle.css"
import React from 'react'
import {toPng} from "html-to-image"
import download from "downloadjs"

function Display(props) {
  const date = new Date();
  console.log(date)
  const hour = date.getHours();
  const min = date.getMinutes(); 
  const time = hour + ":" + min;

    // FOR DOWNLOAD FEATURE

    const node = document.getElementById("image-download")
    function handleClick(){
      toPng(node)
        .then(dataURL => {
          download(dataURL, "Your news.png")
        })
        .catch(() => alert("Please try again!"))
    }
  return (
    <div>
        {/* <h2>Headline: {props.text.headline}</h2>
        <h2>Ticker: {props.text.ticker}</h2>  */}
      <div className="central-div" id = "image-download">
        <img src = {props.src} width = "1280" height = "700" alt = "newspic" className="central-div"/>
        <p className="live">LIVE</p>
        <div className="pos-div">
          <h2 className="breaking-text">BREAKING NEWS</h2>
          <h3 className = "headline">{props.text.headline}</h3>
          <div className="ticker-div">
            <h4>{time + " "}</h4>
            <h3 className="ticker">{props.text.ticker}</h3>
          </div>
        </div>
      </div>
      <div className="btn-div">
        <button className="download-btn" onClick={handleClick}>Download your image</button>
      </div>
    </div>
  )
}

export default Display