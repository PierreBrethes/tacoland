import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em 1em 2em;
  align-items: center;
  font-size: calc(10px + 1.5vmin);
  color: white;
`;

export const TacoLink = styled(Link)`
  text-decoration: none;
  padding-right: 30px;
  color: white;
  font-size: calc(10px + 1.5vmin);
  transition: font-size 0.5s,
    color 0.5s ease-out;

  &:hover {
    color: orange;
    font-size: calc(12px + 1.5vmin);
    transition: font-size 0.5s,
      color 0.5s ease-out;
  }
`