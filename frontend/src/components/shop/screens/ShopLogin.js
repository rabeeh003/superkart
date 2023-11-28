import React, { useState } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import LogGif from '../../../assets/images/shoplogin.gif'
import styled from 'styled-components'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';

function ShopLogin() {

    // const [mail, setMail] = useState('');
    // const [pass, setPass] = useState('');
    const [checkErr, setCheckErr] = useState('');
    const [formData, setFormData] = useState({
        "mail": "",
        "password": "",
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const login = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://127.0.0.1:8000/api/owner_login/', formData);

            console.log(response.data);
            setCheckErr('');
            localStorage.setItem('adminKey', response.data);
            console.log(response.data);
            redirect(-1)
            return response.data;
        } catch (error) {
            console.log(error);
            setCheckErr('Your entered email or password is incorrect');
        }

    };

    return (
        <Page>
            <Container>
                <Form>
                    <Row style={{ height: "90vh" }} className='d-flex justify-content-center align-items-center'>
                        <Col xs={12} md={6} className='d-flex flex-column justify-content-center align-items-center' >
                            <GifImage src={LogGif} alt='image' />
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Gmail"
                                className="mb-3 w-100"
                            >
                                <Form.Control type="email" name='mail' onChange={handleInputChange} required />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Password"
                                className="mb-3 w-100"
                            >
                                <Form.Control type="password" name='password' onChange={handleInputChange} required />
                            </FloatingLabel>
                            {checkErr && <p style={{ color: "red", fontSize: '15px' }}>{checkErr}</p>}
                            <Button type='submit' variant='info' onClick={login} > Login </Button>
                            <p className='mt-4'>Don't have an account?<Link to={'/shop/signup'} className='ms-2'>Signup</Link></p>

                        </Col>
                    </Row>
                </Form>
            </Container>
        </Page>
    )
}

const Page = styled.div`
  max-width: 90vw;
  height: 60vh;
  margin: auto;
  @media screen and (max-width: 578px) {
    max-width: 98vw;
  }
`
const GifImage = styled.img`
  width: 100%;
`

export default ShopLogin