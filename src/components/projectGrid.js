import React from 'react';
import styled from 'styled-components';
import { projectData } from './projectData.js'
import { device } from './breakpoints.js'

const pgMAX_WIDTH = 960

const pMAX_WIDTH = 350
const pMAX_HEIGHT = 400


const ProjectGridContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  max-width: ${pgMAX_WIDTH}px;
  top: 0;
  width: 90%;
  padding-top: 100px;
  @media ${device.laptop} {
    flex-direction:row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start
  }
  `

const ProjectContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  top: 0;
  width: 90%;
  @media ${device.laptop} {
    width: 47%;
  }
  `

const Image = styled.img`
  width 100%;
  height:260px;
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
        
        <ProjectGridContainer>
          {projectData.map(
            project => (
            <ProjectContainer key={project.name}>
              <Image src={project.img}></Image>
              <Title>{project.title}</Title>
              <Desc>{project.desc}</Desc>
              <DescSub>{project.descSub}</DescSub>
            </ProjectContainer>
            )
          )
          }
        </ProjectGridContainer> 
        
      )
    }
  
  }
export default ProjectGrid