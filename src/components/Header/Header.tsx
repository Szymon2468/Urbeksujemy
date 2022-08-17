import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import logo from '../../../public/assets/urbexLogo.png';
import { ImSearch } from 'react-icons/im';
import styles from './Header.module.scss';
import urbexPhoto from '../../../public/assets/urbexPhotos/urbexPhoto1.webp';

// styled components for nav

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: var(--poke-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  z-index: 99999;

  h1:hover {
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
  z-index: 1000000000;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  gap: 20px;

  li {
    display: flex;
    align-items: center;
  }

  li:last-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Item = styled.li`
  &:hover {
    cursor: ${(props) =>
      !props.overlay || (props.overlay && props.open) ? 'pointer' : 'default'};
  }

  a:hover {
    cursor: ${(props) =>
      !props.overlay || (props.overlay && props.open) ? 'pointer' : 'default'};
  }

  p:hover {
    cursor: ${(props) =>
      !props.overlay || (props.overlay && props.open) ? 'pointer' : 'default'};
  }

  form:hover {
    cursor: ${(props) =>
      !props.overlay || (props.overlay && props.open) ? 'pointer' : 'default'};
  }

  button:hover {
    cursor: ${(props) =>
      !props.overlay || (props.overlay && props.open) ? 'pointer' : 'default'};
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 1000000000;

  @media (min-width: 1025px) {
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

  :last-child(2) {
    width: ${(props) => (props.open ? '40%' : '70%')};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? '120px' : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  z-index: 9999999999999;
  // border-bottom: ${(props) =>
    props.open ? 'solid 2px var(--poke-color)' : 'none'};

  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 800px) {
    height: ${(props) => (props.open ? '300px' : 0)};
    display: flex;
    align-items: center;
  }
`;

const OverlayMenu = styled.ul`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: space-around;
  align-items: center;
  width: 80%;
  max-width: 1100px;
  list-style: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 20px;
    letter-spacing: 0.8px;
    font-weight: 400;
    transition: opacity 0.1s ease-in-out;
    height: fit-content;

    @media (max-width: 800px) {
      margin: 10px 0;
    }
  }
`;

const Link = styled.a`
  color: var(--poke-color);
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

// styled components for search in nav

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: var(--poke-color);
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? '18rem' : '2rem')};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? 'auto' : 'pointer')};
  padding: 1.5rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 576px) {
    width: ${(props) => (props.barOpened ? '14rem' : '2rem')};
  }

  @media (min-width: 1025px) {
    background-color: var(--text-color);
  }
`;

const Input = styled.input`
  font-size: 18px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? '1rem' : '0rem')};
  border: none;
  color: var(--text-color);
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: var(--text-color);

    @media (min-width: 1025px) {
      color: var(--poke-color);
    }
  }

  @media (min-width: 1025px) {
    color: var(--poke-color);
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? 'auto' : 'none')};
  cursor: ${(props) => (props.barOpened ? 'pointer' : 'none')};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  z-index: 1000000000;

  svg {
    fill: var(--text-color);

    @media (min-width: 1025px) {
      fill: var(--poke-color);
    }
  }
`;

export const Header = () => {
  const [toggle, toggleNav] = useState(false);

  const [input, setInput] = useState('');
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput('');
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    <>
      <Nav>
        <Container>
          <Logo>
            <img
              src={logo.src}
              alt='logo'
              className={styles.logo}
              onClick={() => (document.location.href = '/')}
            />
          </Logo>
          <Menu>
            <Item>
              <Link href='/przydatne-informacje'>
                <p className='hover-underline-animation'>INFORMACJE</p>
              </Link>
            </Item>
            <Item>
              <Link href='/miejsca-na-urbex'>
                <p className='hover-underline-animation'>MIEJSCA</p>
              </Link>
            </Item>
            <Item>
              <Link href='/ranking-miejsc-na-urbex'>
                <p className='hover-underline-animation'>RANKING</p>
              </Link>
            </Item>
            <Item>
              <Link href='/o-nas'>
                <p className='hover-underline-animation'>O NAS</p>
              </Link>
            </Item>
            <Item>
              <Form
                barOpened={barOpened}
                onClick={() => {
                  // When form clicked, set state of baropened to true and focus the input
                  setBarOpened(true);
                  // @ts-ignore
                  inputFocus.current.focus();
                }}
                // on focus open search bar
                onFocus={() => {
                  setBarOpened(true);
                  // @ts-ignore
                  inputFocus.current.focus();
                }}
                // on blur close search bar
                onBlur={() => {
                  setBarOpened(false);
                }}
                // On submit, call the onFormSubmit function
                onSubmit={onFormSubmit}
                ref={formRef}
              >
                <Button type='submit' barOpened={barOpened}>
                  <ImSearch />
                </Button>
                <Input
                  onChange={(e) => setInput(e.target.value)}
                  ref={inputFocus}
                  value={input}
                  barOpened={barOpened}
                  placeholder='Znajdź artykuł...'
                />
              </Form>
            </Item>
          </Menu>
          <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
          </NavIcon>
        </Container>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item overlay={true} open={toggle}>
            {toggle ? (
              <Link href='/przydatne-informacje'>
                <p className='hover-underline-animation'>INFORMACJE</p>
              </Link>
            ) : (
              <p className='hover-underline-animation'>INFORMACJE</p>
            )}
          </Item>
          <Item overlay={true} open={toggle}>
            {toggle ? (
              <Link href='/miejsca-na-urbex'>
                <p className='hover-underline-animation'>MIEJSCA</p>
              </Link>
            ) : (
              <p className='hover-underline-animation'>MIEJSCA</p>
            )}
          </Item>
          <Item overlay={true} open={toggle}>
            {toggle ? (
              <Link href='/ranking-miejsc-na-urbex'>
                <p className='hover-underline-animation'>RANKING</p>
              </Link>
            ) : (
              <p className='hover-underline-animation'>RANKING</p>
            )}
          </Item>
          <Item overlay={true} open={toggle}>
            {toggle ? (
              <Link href='/o-nas'>
                <p className='hover-underline-animation'>O NAS</p>
              </Link>
            ) : (
              <p className='hover-underline-animation'>O NAS</p>
            )}
          </Item>
          <Item overlay={true} open={toggle}>
            <Form
              barOpened={barOpened}
              onClick={() => {
                // When form clicked, set state of baropened to true and focus the input
                setBarOpened(true);
                // @ts-ignore
                inputFocus.current.focus();
              }}
              // on focus open search bar
              onFocus={() => {
                setBarOpened(true);
                // @ts-ignore
                inputFocus.current.focus();
              }}
              // on blur close search bar
              onBlur={() => {
                setBarOpened(false);
              }}
              // On submit, call the onFormSubmit function
              onSubmit={onFormSubmit}
              ref={formRef}
            >
              <Button type='submit' barOpened={barOpened}>
                <ImSearch />
              </Button>
              {toggle && (
                <Input
                  onChange={(e) => setInput(e.target.value)}
                  ref={inputFocus}
                  value={input}
                  barOpened={barOpened}
                  placeholder='Znajdź artykuł...'
                />
              )}
            </Form>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
