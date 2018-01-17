import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${props => props.theme.primary};
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 3.2rem;
  line-height: 125%;
  @media (min-width: 768px) {
    font-size: 4rem;
    line-height: 112.5%;
  }
  @media (min-width: 992px) {
    font-size: 4.8rem;
    line-height: 105%;
  }
`;

export const H2 = styled.h2`
  color: ${props => props.theme.text};
  font-family: 'Palanquin', sans-serif;
  font-weight: bold;
  font-size: 2.6rem;
  line-height: 115%;
  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 125%;
  }
  @media (min-width: 992px) {
    font-size: 3.6rem;
  }
`;

export const H3 = styled.h3`
  color: ${props => props.theme.link};
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 112.5%;
  @media (min-width: 768px) {
    font-size: 2.4rem;
    line-height: 125%;
  }
  @media (min-width: 992px) {
    font-size: 2.8rem;
  };
`;

export const H4 = styled.h4`
  color: ${props => props.theme.text};
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 110%;
  @media (min-width: 768px) {
    line-height: 120%;
  }
`;

export const H5 = styled.h5`
  color: ${props => props.theme.link};
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 125%;
`;
