import React from 'react'
import { useParams } from 'react-router-dom'
import SignUp from './SignUp'

const Dash = () => {
    let style1={
        height:250,
        width:350,
        marginLeft:50,
        }

        return (
        <>
            <h1 className='text-primary'>Welcome User</h1>
        {/* <div>Welcome {firstname}</div>
            <div style={{backgroundColor:'#FCFCF9'}}>
            <h1>ShopCart</h1>
          </div> */}
            <div style={{backgroundColor:'#F7ECE5',width:500,height:250, border:2, borderRadius:10, marginTop:50,marginLeft:10}}>
            <section>
              <div>
            <h2 style={{width:350,marginTop:8,marginLeft:50,color:'#074223',fontSize:35 }}>Grab Upto 50% off on Selected Headphone</h2>
            <button style={{marginTop:30, marginLeft:150,width:85,height:35,border:2, borderRadius:20, backgroundColor:'#074223',color:'white'}}>Buy Now</button>
            </div>
            <img style={style1} src="Jumia Images/Earphones-300_400.jpg" alt="Show text" />
            </section>
            </div>
        </>
        )
}

export default Dash