import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';

// You need this to work auth0 properly, because if you are in loading or error state, it will not redirect to dashboard even though you had login successfully.

function AuthWrapper({children}) {
  const {isLoading, error} = useAuth0();
  if(isLoading){
    return(
      <Wrapper>
        <img src={loadingGif} alt="spinner" />
      </Wrapper>
    )
  }

  if(error){
    return(
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    )
  }

  return <>{children}</>;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
