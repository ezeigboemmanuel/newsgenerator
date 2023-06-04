import Display from "./display"
import "./editstyle.css"
import newspic from '../newspic.jpg'
import React from 'react'


function Edit() {
    const [text, setText] = React.useState({
        headline: "CATCHY HEADLINE",
        ticker: "NICE TICKER",
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
        <div className="edit-div">
          <img src = {newspic} id = "propic" alt = "newspic" className="image"/> 
          <p>In a surprising turn of events, a cutting-edge News Generator has emerged, capturing the attention of netizens worldwide. This whimsical tool, developed by Ezeigbo Emmanuel, promises to bring endless entertainment to users by generating hilarious and outrageous breaking news headlines at the click of a button.</p>
          <h2>Headline</h2>  
          <input className="text-input" type = "text" name = 'headline' placeholder="write your headline here..." onChange={handleChange} />

          <h2>Ticker</h2>
          <input className="text-input" type = "text" name = 'ticker' placeholder="write the latest updates..." onChange={handleChange} /> 

          <h2>Your Image</h2>
          <input type = "file" accept="image/jpeg, image/png, image/jpg" id = "inputPic" onChange={handleInputChange} />
          <br />
          <br />
          <b>Note: The Breaking News Generator is for entertainment purposes only. The generated headlines are fictional and should not be considered real news.</b>
        </div>
        <br />
        <div className="dis-div">
          <Display className = "dis" text = {text} src = {image} />
        </div>  
    </div>
  )
}

export default Edit