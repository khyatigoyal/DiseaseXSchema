import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import './cars.css';
import { Button } from 'reactstrap';

function Home() {
  return (
    <div className='card-deck'>
      <div
        className='card'
        body='true'
        inverse='true'
        style={{
          marginLeft: '20%',
          marginTop: '4%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderColor: '#333',
        }}
      >
        <div
          className='card-header'
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}
        >
          <h3>DiseaseX</h3>
        </div>
        <div className='card-body text-center'>
          <p className='card-text ' style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div
        className='card'
        body='true'
        inverse='true'
        style={{
          marginLeft: '20%',
          marginRight: '20%',
          marginTop: '4%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderColor: '#333',
          height: '5%',
          width: '4%',
        }}
      >
        <div className='card-header' style={{ color: 'black' }}>
          <img
            width='40px'
            alt='Loading...'
            src='https://img.icons8.com/ios-filled/100/000000/login-rounded-right.png'
          />
          <strong>Login As</strong>{' '}
        </div>
        <div className='card-body'>
          <Button
            style={{ color: 'black', backgroundColor: '#5ca08a' }}
            href='/loginPage'
          >
            Health Center
          </Button>
          <div>
            <Button
              style={{
                marginTop: '20px',
                color: 'black',
                backgroundColor: '#5ca08a',
              }}
              href='/loginPageAdmin'
            >
              Admin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
