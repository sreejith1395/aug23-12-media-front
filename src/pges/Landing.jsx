import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {



  //  function defnition
  
  // redirect from one page to another page we can use useNavigate hook 

  const navigate=useNavigate()

  const handleNavigate=()=>{

    navigate('/home')

  }


  return (
    <div>

      <Row className='align-items-center'>

        <Col></Col>

        <Col lg={6}>

          <h1>WELCOME TO VIDEOOO.COM</h1>

          <p style={{textAlign:'justify'}}>where user can use their favourite videoos.user can upload any youtube videos by copy and paste        their     url in to Videoooo.com will allow to add and remove their uploaded videos
            and also arrange them in different categories by drag and drop it is free try it now!!!
          </p>

          <button onClick={handleNavigate} className='btn btn-success'>Click Here to Know More</button>


        </Col>


        <Col lg={5}>

          <img className='img-fluid' width={'350px'} height={'350px'} src="https://i.vimeocdn.com/custom_asset/ceeef140b73293bafc315324a09361a1" alt="no image" />
        </Col>

      </Row>

    </div>
  )
}

export default Landing