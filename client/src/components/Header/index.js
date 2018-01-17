import styled from 'styled-components';

const listItemColor = (props) => {
  if (props.rightDrawerHeader) {
    return props.selectedItem ? props.theme.primary : props.theme.text;
  }
  return '#EAEAEA';
};

export const Container = styled.div`
  width: 100%;
  padding: 32px 16px;
  border-bottom: 1px solid ${props => props.theme.primary};
  background: ${props => props.rightDrawerHeader ? '#FFFFFF' : props.theme.primary}
`;

export const AppName = styled.div`
  font-size: 24px;
  font-family: 'Palanquin', sans-serif;
  font-weight: 600;
  line-height: 28px;
  display: inline-block;
  vertical-align: middle;
  color: ${props => props.rightDrawerHeader ? props.theme.primary : '#EAEAEA'};
`;

export const RightList = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  padding-right: 16px;
  vertical-align: middle;
`;

export const RightListItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  line-height: 28px;
  margin-left: 16px;
  font-weight: 400;
  color: ${props => listItemColor(props)};

  &:hover {
    color: ${props => props.rightDrawerHeader ? listItemColor(props) : '#FFFFFF'};
  }
`;

// export const Search = RightListItem.withComponent('svg').extend`
  
// `;
