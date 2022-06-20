import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.scss';
import logo from '../../../public/assets/urbexLogo.png';
import useWindowSize, { windowSize } from '../../hooks/useWindowSize';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: var(--poke-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }

  span {
    background-color: var(--text-color);
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? '40%' : '70%')};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? '200px' : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  z-index: 999999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.1s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

export const Header = () => {
  const windowSize = useWindowSize();
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo>
          <img src={logo.src} alt='logo' />
        </Logo>
        <Menu>
          <Item>
            <Link target='#' href='https://www.instagram.com/igor_dumencic/'>
              Instagram
            </Link>
          </Item>
          <Item>
            <Link target='#' href='https://www.behance.net/igordumencic'>
              Behance
            </Link>
          </Item>
          <Item>
            <Link target='#' href='https://github.com/Igor178'>
              Github
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target='#' href='https://www.instagram.com/igor_dumencic/'>
              Instagram
            </Link>
          </Item>
          <Item>
            <Link target='#' href='https://www.behance.net/igordumencic'>
              Behance
            </Link>
          </Item>
          <Item>
            <Link target='#' href='https://github.com/Igor178'>
              Github
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
