import React from 'react';
import styled from 'styled-components'
import Project from './project.js';
import { projectData } from './projectData.js'


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



  class ProjectGrid extends React.Component {
    constructor(props) {
      super(props);
      this.state = projectData;
    }
  
    render() {
      return (
        <div style={{
          marginBottom: 'calc(1.45rem + 83px',
          maxWidth: pMAX_WIDTH + 'px',
          marginRight: 'auto',
          marginLeft: 'auto'
        }}>
          <ProjectGridContainer>
            {projectData.map(
              project => (
                <Project projectData = {this.state.project}/>
              ))}
          </ProjectGridContainer>
        </div>
      );
    }
  }

export default ProjectGrid