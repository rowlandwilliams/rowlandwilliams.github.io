import React from 'react';
import styled from 'styled-components'


const MAX_WIDTH = 960

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  
  max-width: ${MAX_WIDTH}px;
  padding: 1.45rem 1.0875rem;
  position: fixed;
  top: 0;
  width: 100%`

const Name = styled.div`
  font-size: 22px;
  font-weight: 700;`

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300`



const Header = () => (
  <div style={{
    marginBottom: 'calc(1.45rem + 40px',
    maxWidth: MAX_WIDTH + 'px',
    marginRight: 'auto',
    marginLeft: 'auto'
  }}
  >
    <HeaderContainer>
      <Name>Rowland Williams</Name>
      <Desc>Information Design</Desc>
    </HeaderContainer>
  
  </div>
)

export default Header