import React from 'react';
import styled from 'styled-components'


const MAX_WIDTH = 960;

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  padding: 1.45rem 1.0875rem;
  max-width: ${MAX_WIDTH}px;
  position: fixed;
  top: 0;
  width: 90%;`

const Name = styled.div`
  font-size: 22px;
  font-weight: 600;`

const Desc = styled.div`
  font-size: 22px;
  font-weight: 300`

const Header = () => (
  <HeaderContainer>
  <Name>Rowland Williams</Name>
  <Desc>Code | Design</Desc>
  </HeaderContainer>
 
)

export default Header

