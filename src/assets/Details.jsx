import React from 'react'
import { useParams } from 'react-router-dom'
import SignUp from './SignUp'

const Details = () => {

  let {firstname}= useParams()

  return (
    <div>
    <div>Welcome {firstname}</div>
    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, provident?</h3>
    </div>
  )
}


export default Details