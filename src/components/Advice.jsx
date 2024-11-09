import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./Advice.css"

const Advice = props => {
  let [advice,setadvice] = useState("plesce click the button to get advice")
  let [count,setcount] = useState(0);

async  function getApi(){
   let res = await fetch("https://api.adviceslip.com/advice")
   let data = await res.json()
   setadvice(data.slip.advice)
   setcount((c)=>c + 1)
  }
  return (
    <>
    <h3>{advice}</h3>
    <br />
    <button type='button' onClick={getApi}>Get Advice</button>
    <br />
    <br />
    <p>You have read <b>{count}</b> Advice</p>
    </> 
  )
}

Advice.propTypes = {}

export default Advice;