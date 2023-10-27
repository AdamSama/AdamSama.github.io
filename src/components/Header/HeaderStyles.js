import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  padding: 2rem 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
    justify-content: center;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 3;
    flex-direction: column;
    align-items: center;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 3 / 1 / 4 / 3;
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
`;

export const ContactDropDown = styled.button`
  // ... (keep as it is)
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  // ... (keep as it is)
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 5px;
  }
`;
