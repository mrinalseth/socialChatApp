import React from 'react'
import img from "../img/img.png"
import attach from "../img/attach.png"

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Type...' />
      <div className="send">
        <img src={attach} alt="" />
        <input id='file' type="file" style={{display: "none"}} />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input