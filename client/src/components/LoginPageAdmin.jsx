import React from 'react';
import LoginAdmin from '../api/loginAdmin.jsx';
import { useHistory } from 'react-router-dom';
import getAdminLoggedInDetails from '../api/getAdminLoggedInData.jsx';

function LoginPageAdmin() {
  let history = useHistory();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState({
    emailError: '',
    passwordError: '',
    overAllError: '',
  });
  function handleFormSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      setError((error) => ({
        ...error,
        overAllError: 'Please enter the required Values!',
      }));
      return;
    }
    try {
      setLoading(true);
      let token = '';
      LoginAdmin({
        email: email,
        password: password,
      })
        .then((response) => {
          setError((error) => ({
            ...error,
            nameError: '',
            emailError: '',
            overAllError: '',
          }));
          token = response.data.token;
          getAdminLoggedInDetails({
            token: token,
          })
            .then((response) => {
              setLoading(false);
              localStorage.setItem('user', JSON.stringify(response.data));
              history.push('/animal_case');
            })
            .catch((err) => {
              setLoading(false);
              setError((error) => ({
                ...error,
                overAllError: err.errors[0].msg,
              }));
            });
        })
        .catch((err) => {
          setLoading(false);
          setError((error) => ({
            ...error,
            overAllError: err.errors[0].msg,
          }));
        });
    } catch (err) {
      setError((error) => ({
        ...error,
        overAllError: err,
      }));
    }
  }
  return (
    <div
      class='card'
      body
      inverse
      style={{
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '5%',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.45)',
        borderColor: '#333',
      }}
    >
      <div class='card-header'>
        <h3>Sign In</h3>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div class='card-body'>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              required
              id='email'
              autoComplete='on'
              className='form-control'
              placeholder='Enter email'
              onChange={(event) => {
                setEmail(event.target.value);
                setError((error) => ({ ...error, emailError: '' }));
              }}
              onBlur={() =>
                email.length === 0
                  ? setError((error) => ({
                      ...error,
                      emailError: 'Enter a valid Email',
                    }))
                  : null
              }
            />
            <div className='errorLabel'>
              <p className='p-0'>{error.emailError}</p>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              autoComplete='off'
              required
              className='form-control'
              placeholder='Enter password'
              onChange={(event) => {
                setPassword(event.target.value);
                setError((error) => ({ ...error, passwordError: '' }));
              }}
              onBlur={() =>
                password.length < 6
                  ? setError((error) => ({
                      ...error,
                      passwordError:
                        'Password should be atleast 6 characters long!',
                    }))
                  : null
              }
            />
            <div className='errorLabel'>
              <p className='p-0'>{error.passwordError}</p>
            </div>
          </div>
          <div class='d-flex align-items-center flex-column'>
            {error.overAllError ? (
              <div className='d-flex align-items-center justify-content-start errorLabel'>
                <p className='p-0'>{error.overAllError}</p>
              </div>
            ) : null}
            <div className='ml-auto'>
              <button
                type='submit'
                style={{ width: '150px' }}
                className='btn btn-primary btn-block'
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPageAdmin;
