import React from 'react';

import styled from 'styled-components';
import {ReactComponent as MoonIcon} from '../../icons/moon.svg';
import {ReactComponent as SunIcon} from '../../icons/sun.svg';

const Toggle = ({isDark, toggleIsDark}) => {
    const isLight = !isDark;

    return (
        <ToggleContainer onClick={toggleIsDark} lightTheme={isLight}>
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
            
        
    )
}

const ToggleContainer = styled.button`
  background: ${props => props.theme.colors.gradient};
  border: 2px solid ${props => props.theme.colors.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  &:focus {
      outline: none;
  }

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

export default Toggle;