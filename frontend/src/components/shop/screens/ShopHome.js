import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import sh1 from '../../../assets/images/sh1.png'
import sh2 from '../../../assets/images/sh2.png'
import sh3 from '../../../assets/images/sh3.png'
import sh4 from '../../../assets/images/sh4.png'
import sh5 from '../../../assets/images/sh5.png'
import sh6 from '../../../assets/images/sh6.png'
import sh7 from '../../../assets/images/sh7.png'
import { Link } from 'react-router-dom'

function ShopHome() {
  return (
    <Page>
      <Container fluid>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col xs={12} sm={6} md={4} className='d-flex flex-column justify-content-center align-items-center'>
            <Link to={'chart'} style={{ width: '100%', maxWidth: "350px" }} className='m-0 p-0 d-flex flex-column justify-content-center align-items-center text-decoration-none'>
              <ImageDiv>
                <ImgTag src={sh1} />
              </ImageDiv>
              <Name>Chart</Name>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className='d-flex flex-column justify-content-center align-items-center'>
            <Link to={'billing'} style={{ width: '100%', maxWidth: "350px" }} className='m-0 p-0 d-flex flex-column justify-content-center align-items-center text-decoration-none'>
              <ImageDiv>
                <ImgTag src={sh2} />
              </ImageDiv>
              <Name>Billing</Name>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className='d-flex flex-column justify-content-center align-items-center'>
            <Link to={'order'} style={{ width: '100%', maxWidth: "350px" }} className='m-0 p-0 d-flex flex-column justify-content-center align-items-center text-decoration-none'>
              <ImageDiv>
                <ImgTag src={sh3} />
              </ImageDiv>
              <Name>Orders</Name>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className='d-flex flex-column justify-content-center align-items-center'>
            <Link to={'addprodect'} style={{ width: '100%', maxWidth: "350px" }} className='m-0 p-0 d-flex flex-column justify-content-center align-items-center text-decoration-none'>
              <ImageDiv>
                <ImgTag src={sh4} />
              </ImageDiv>
              <Name>Add Products</Name>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className='d-flex flex-column justify-content-center align-items-center'>
            <Link to={'editprodect'} style={{ width: '100%', maxWidth: "350px" }} className='m-0 p-0 d-flex flex-column justify-content-center align-items-center text-decoration-none'>
              <ImageDiv>
                <ImgTag src={sh5} />
              </ImageDiv>
              <Name>Edit Products</Name>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className='d-flex flex-column justify-content-center align-items-center'>
            <Link to={'offer'} style={{ width: '100%', maxWidth: "350px" }} className='m-0 p-0 d-flex flex-column justify-content-center align-items-center text-decoration-none'>
              <ImageDiv>
                <ImgTag src={sh6} />
              </ImageDiv>
              <Name>Product Offer</Name>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4} className='d-flex flex-column justify-content-center align-items-center'>
            <Link to={'catagory_offer'} style={{ width: '100%', maxWidth: "350px" }} className='m-0 p-0 d-flex flex-column justify-content-center align-items-center text-decoration-none'>
              <ImageDiv>
                <ImgTag src={sh7} />
              </ImageDiv>
              <Name>Category Offer</Name>
            </Link>
          </Col>
          <div style={{ height: "40px" }}></div>
        </Row>
      </Container>
    </Page>
  )
}

const Page = styled.div`
  max-width: 90vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 578px) {
    max-width: 98vw;
    align-items: self-start;
    justify-content: none;
    height: 100%;
    margin-bottom: 30px;
  }
`

const ImageDiv = styled.div`
  width: 90%;
  height: 200px;
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,255,255,0.36842683850884106) 49%, rgba(45,194,253,0.8754296396292892) 100%);
  @media screen {
   width:100% ;
  }
`
const Name = styled.span`
  font-size:25px;
  font-weight: 600;
  margin-top: 20px;
  color: black;
  padding-bottom: 10px;
  @media screen and (max-width: 578px) {
    font-size: medium;
  }
`
const ImgTag = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export default ShopHome