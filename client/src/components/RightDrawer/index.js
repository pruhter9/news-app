import styled from 'styled-components';

export const RightDrawerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: ${props => props.open ? 0 : 100}vw;
  transition: left 0.35s ease-in-out;
  background: #FFFFFF;
  overflow-x: hidden;
  z-index: 1000;
`;
