import React from 'react';
import styled from 'styled-components'
import carbon from './img/carbon.png'

const pMAX_WIDTH = 960
// const pMAX_HEIGHT = 400

const ProjectGridContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center
  max-width: ${pMAX_WIDTH}px;
  padding: 1.45rem 1.0875rem;
  top: 0;
  width: 100%`


const ProjectGrid = () => (
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