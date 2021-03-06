import styled from 'styled-components';

export const SignUpContainer = styled.div`
  font-family: monospace;
  color: darkgray;
  display: flex;
  flex-direction: column;
  width: 850px;
  align-items: center;
  p{
    font-size: 20px;
  }
  span{
    text-decoration:none;
    cursor:pointer;
    color: blue;
  }
  input{
    width: 850px;
    font-size: 20px;
  }
  button{
    margin: 0 auto;
  }

  @media screen and (max-width: 400px){    
    display: flex;
    flex-direction: column;
    width: 210px;
    align-items: center;
    margin: 0 auto;
    p{
      font-size:14px;
    }
    form > div {
      margin: 0;
    }
    input{
      width: 240px;
      width: 195px;
      margin: 18px 0;
    }
    label{
      font-size: 14px;
    }
    
    button{
      min-width: 100px;
      height: 45px;
    }
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  font-size: 40px;
  
  @media screen and (max-width: 400px){    
    font-size:30px;
    p{
      font-size:14px;
    }
  }
`;
