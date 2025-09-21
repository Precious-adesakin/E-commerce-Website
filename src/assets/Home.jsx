import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

const Home = () => {
  let {firstname}= useParams()

  let style1={
    height:250,
    width:200,
    marginLeft:50,
  }
  return (
    <>

            <div style={{backgroundColor:'#676279', width:1258,height:580, marginLeft:10,marginTop:12}}>
            <div style={{backgroundColor:'black', height:45}} className='text-center'>
            <Link style={{marginLeft:-10, fontSize:25, textDecoration:'none'}} to="/sign">SignUp</Link> 
            <Link style={{marginLeft:1000,fontSize:25, textDecoration:'none'}} to="/log">Log In</Link> 
            {/* <Link style={{marginLeft:15,fontSize:25, textDecoration:'none'}} to="/formik">SignUp</Link> */}
        </div>
        </div>
    </>
  )
}

export default Home