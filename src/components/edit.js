import Display from "./display"
import "./editstyle.css"
import newspic from '../newspic.jpg'

import React from 'react'

function Edit() {
    const [text, setText] = React.useState({
        headline: "TINUBU REIGNS",
        ticker: "THE NEW NIGERIAN PRESIDENT",
    })

    function handleChange(event){
        const {name, value} = event.target;
        setText(prevText => {
            return {
                ...prevText,
                [name]: value.toUpperCase()
            }
        })
    }

    let pic = document.getElementById("inputPic")
    let propic = document.getElementById("propic")

    const [image, setImage] = React.useState(newspic)

    function handleInputChange(){
      propic.src = URL.createObjectURL(pic.files[0]);
      setImage(propic.src)
    }

  return (
    <div className="edit-container">
        <div>
          <img src = {newspic} id = "propic" alt = "newspic" className="image"/> 
          <p>A good way to make your friends laugh.</p>
          <h2>Headline</h2>  
          <input className="text-input" type = "text" name = 'headline' placeholder="write your headline here..." onChange={handleChange} />

          <h2>Ticker</h2>
          <input className="text-input" type = "text" name = 'ticker' placeholder="write the latest updates..." onChange={handleChange} /> 

          <h2>Your Image</h2>
          <input type = "file" accept="image/jpeg, image/png, image/jpg" id = "inputPic" onChange={handleInputChange} />
        </div>
        <div className="dis-div">
          <Display className = "dis" text = {text} src = {image} />
        </div>  
    </div>
  )
}

export default Edit