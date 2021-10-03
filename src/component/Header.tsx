import React from 'react';
import styled from 'styled-components';
import Menu from '../json/nav.json';

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NavLi = styled.li`
  width: 24.9%;
  text-align: center;
  background-color: #fff;
  display: inline-block;
  margin: 0px 0.5px;
  height: 30px;
`;

const NavA = styled.a`
  text-decoration: none;
  font-weight: bold;
  display: block;
  height: 100%;
  width: 100%;
  color: transparent;
  background: linear-gradient(0deg, #212121 0%, #424242 60%, #FAFAFA 70%, #424242 80%, #212121 90% 100%); 
	-webkit-background-clip: text;
`;

const HeadTitle = styled.h1`
  text-align: center;
  vertical-align: middle;
  margin: 0;
  padding: 15px;
  color: white;
`;

export const Header: React.FC =  () => {
  return(
    <>
      <header>
        <nav>
          <HeadTitle>Kaito Sakao Profile</HeadTitle>
          <NavUl>
            {Menu.menu.map((topic, index) => (
              <NavLi key={index}><NavA href={topic.URL}>{topic.title}</NavA></NavLi>
            ))}
          </NavUl>
        </nav>
      </header>
    </>
  )
}