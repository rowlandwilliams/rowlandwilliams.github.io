import React from 'react';
import styled from 'styled-components';
import { projectData } from './projectData.js'


const pgMAX_WIDTH = 960

const pMAX_WIDTH = 400
const pMAX_HEIGHT = 400


const ProjectGridContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: ${pgMAX_WIDTH}px;
  padding: 1.45rem 1.0875rem;
  top: 0;
  width: 100%`


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
  width: 400px;
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



  class ProjectGrid extends React.Component {
    
    render() {
      
      return (
        <div
          style={{
          margin: '0 auto',
          maxWidth: pgMAX_WIDTH + 'px',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0 
        }}>
        <ProjectGridContainer>
          {projectData.map(
            project => (
            <ProjectContainer key={project.name}>
              <Image src={project.img}></Image>
              <Title>{project.name}</Title>
              <Desc>Design, Development</Desc>
              <DescSub> A visual exploration of 500 years of atmospheric CO<sub>2</sub> data.</DescSub>
            </ProjectContainer>
            )
          )
          }
        </ProjectGridContainer> 
        </div>
      )
    }
  
  }
export default ProjectGrid