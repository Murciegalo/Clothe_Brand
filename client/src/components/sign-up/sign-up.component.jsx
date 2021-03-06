import React , { useState } from 'react';
// Layout
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';
// Redux 
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'


const SignUp = ({ signUpStart , handle }) => {
  const [ data , setData ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { 
    displayName ,
    email ,
    password ,
    confirmPassword
  } = data

  const handleSubmit = async e => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ email , password , displayName});
  };

  const handleChange = e => setData({
    ...data , 
    [e.target.name]: e.target.value 
  });
  

  return (
    <SignUpContainer>
    <SignUpTitle>Sign up</SignUpTitle>
    <p>
      Already have an account? <span onClick={() => handle(false)}>Login</span>
    </p>
    <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='displayName'
        value={displayName}
        onChange={handleChange}
        label='Display Name'
        required
      />
      <FormInput
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        label='Email'
        required
      />
      <FormInput
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        label='Password'
        required
      />
      <FormInput
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleChange}
        label='Confirm Password'
        required
      />
      <CustomButton type='submit'>SIGN UP</CustomButton>
    </form>
  </SignUpContainer>
  )
}


export default connect(
  null ,
  { signUpStart }
)(SignUp);
