import React from 'react';
import styled from 'styled-components';
import { projectData } from './projectData.js'
import { device } from './breakpoints.js'

const pgMAX_WIDTH = 960


const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  top: 0;
  width: 90%;
  @media ${device.laptop} {
    width: 47%;
  }
  `

 const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px 0px rgba(120,118,120,1);
  border-radius: 4px;
 ` 


const Image = styled.img`
  width 100%;
  height:260px;
  border-radius: 4px;
  `

const ProjectGridContainer = styled.div`
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
  ${ProjectContainer}:nth-child(4) ${Image} {
    width: 80%;
  }
  ${ProjectContainer}:nth-child(3) ${Image} {
    width: 90%;
  }
  `

const Title = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;`

const DescLine = styled.div`
  display:flex;
  justify-content: space-between;
`
const Desc = styled.div`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 300`

const StackDesc = styled.div`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 600`

const DescSub = styled.div`
  font-size: 14px;
  font-weight: 200;
  margin-top: 6px`



class ProjectGrid extends React.Component {
    render() {
      return (
        <ProjectGridContainer >
          {projectData.map(
            project => ( 
            <ProjectContainer key={project.name}>
             <ImageDiv>
                <a className='imgLink' href={project.url} target="_blank" rel="noreferrer">
                  <Image src={project.img}></Image>
                </a>
             </ImageDiv>
              <Title dangerouslySetInnerHTML={{__html: project.title}}></Title>
                <DescLine>
                  <Desc>{project.desc}</Desc>
                  <StackDesc>{project.stack}</StackDesc>
                </DescLine>
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