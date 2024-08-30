import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import logoImage from './logo.png';
const Login = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3002/api/auths/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('vendorID', response.data.data._id);
      navigateTo('/dashboard');
    } catch (error) {
      setMessage('Login failed');
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center ">
      <CContainer >
        <CRow className="justify-content-center" >
          <CCol style={{maxWidth: '37%'}}>
            <CCardGroup>
              <CCard className="p-4 bg-dark-gray" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white'}}  >
                <CCardBody className="text-center">
                  <div className="mb-4">
                    <img src={logoImage} alt="Logo" style={{ maxWidth: '45%', height: 'auto' }} />
                  </div>
                  <CForm>
                    <h1>Welcome!</h1>
                    <p className="text-light" >Sign In</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CCol>
                      <CCol>
                      <CButton
                          color="primary"
                          className="px-4"
                          onClick={handleLogin}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol className="text-right">
                        <Link to="/forgot-password">
                          <CButton color="link" className="px-2" style={{color:"white"}}>
                            Forgot password?
                          </CButton>
                        </Link>
                        <Link to="/register">
                          <CButton color="link" className="px-0" style={{color:"white"}}>
                            Register
                          </CButton>
                        </Link>
                      </CCol>
                    </CCol>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
