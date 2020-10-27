import React from 'react';
import styled from 'styled-components'
import carbon from './img/carbon.png'

const pMAX_WIDTH = 450
const pMAX_HEIGHT = 400

const ProjectContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
  max-height: ${pMAX_HEIGHT}px;
  max-width: ${pMAX_WIDTH}px;
  padding: 1.45rem 1.0875rem;
  top: 0;
  width: 100%`

const Image = styled.img`
  width: 450px;
  height:300px;
  border-radius:10px;
  box-shadow: 0px 0px 8px 0px rgba(120,118,120,1);
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;`

const Desc = styled.div`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 300`

const DescSub = styled.div`
  font-size: 14px;
  font-weight: 200;
  margin-top: 10px`



const Project = () => (
  <div style={{
    marginBottom: 'calc(1.45rem + 83px',
    maxWidth: pMAX_WIDTH + 'px',
    maxHeight: pMAX_HEIGHT + 'px',
    marginRight: 'auto',
    marginLeft: 'auto'
  }}
  >
    <ProjectContainer>
      <Image src={carbon}></Image>
      <Title>Carbon Explorer</Title>
      <Desc>Design, Development</Desc>
      <DescSub> A visual exploration of 500 years of atmospheric CO<sub>2</sub> data.</DescSub>
    </ProjectContainer>
  
  </div>
)

export default Project