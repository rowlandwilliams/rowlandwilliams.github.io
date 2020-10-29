import React from 'react';
import styled from 'styled-components'
import { device } from './breakpoints.js'

const FooterContainer = styled.div`
    width: 20px;
    position: fixed;
    left: 95%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-right: 5px;
    @media ${device.laptop} {
        left: 99%;
    }
`
const SocialIcon = styled.a`
    fill: #a3a3a3;
    margin-bottom: 5px;
    width: 20px;
    display: flex;
    justify-content: center;
    text-decoration: none;
`

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20px;
  
  `


function gitIcon() {
    return (
        <SocialIcon
        href='https://github.com/rowlandwilliams'
        target='_blank'
        >
            <svg
            height="20"
            width="20"
            viewBox="0 0 16 16"
            aria-label="Github"
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        </SocialIcon>
    )
}

function linkedinIcon() {
    return (
    <SocialIcon
    href='https://www.linkedin.com/in/rowland-williams-51649318b/'
    target='_blank'
    >
        <svg
        height="20"
        width="20"
        viewBox="0 0 54 54"
        aria-label="LinkedIn"
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50.004,0 C52.207,0 53.998,1.744 53.998,3.894 L53.998,50.104 C53.998,52.254 52.207,54 50.004,54 L3.985,54 C1.787,54 0,52.254 0,50.104 L0,3.894 C0,1.744 1.787,0 3.985,0 L50.004,0 Z M46.016,46.014 L46.016,31.88 C46.016,24.941 44.519,19.605 36.408,19.605 C32.512,19.605 29.899,21.741 28.83,23.768 L28.72,23.768 L28.72,20.244 L21.038,20.244 L21.038,46.014 L29.044,46.014 L29.044,33.267 C29.044,29.906 29.68,26.648 33.848,26.648 C37.957,26.648 38.01,30.492 38.01,33.481 L38.01,46.014 L46.016,46.014 Z M12.009,16.723 C14.569,16.723 16.65,14.642 16.65,12.08 C16.65,9.515 14.569,7.434 12.009,7.434 C9.442,7.434 7.367,9.515 7.367,12.08 C7.367,14.642 9.442,16.723 12.009,16.723 Z M8.003,46.014 L16.015,46.014 L16.015,20.244 L8.003,20.244 L8.003,46.014 Z" />
      </svg>
      </SocialIcon>
    )
}



function cvIcon() {
    return (
        <a 
        style={{'margin-bottom': '5px',
             'background-color': '#a3a3a3',
             'color': 'white',
             'width': '20px',
             'display': 'flex',
             'justify-content': 'center',
             'text-decoration': 'none',
             'font-weight': '900'}}
        href='https://orioniconlibrary.com/icon/github-6092'
        target='_blank'
    >
       <div style={{'display':'inline-block'}}>CV</div>
    </a>
    )
}

const Footer = () => (
    <FooterContainer>
    <SocialIcons>
    {cvIcon()}
    {gitIcon()}
    {linkedinIcon()}
    </SocialIcons>
    </FooterContainer>
)



export default Footer

