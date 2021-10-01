import React from 'react';
import styled from 'styled-components';
import Menu from '../json/nav.json';

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLi = styled.li`
  width: 24.9%;
  text-align: center;
  background-color: #333;
  display: inline-block;
  margin: 0px 0.5px;
  height: 30px;
`;

const NavA = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  vertical-align: middle;
`;

const HeadTitle = styled.h1`
  text-align: center;
  margin-top: 0;
`;

export const Header: React.FC =  () => {
  return(
    <>
      <header>
        <nav>
          <HeadTitle>Kaito Sakao Profile</HeadTitle>
          <NavUl>
            {Menu.menu.map((topic) => (
              <NavLi><NavA href={topic.URL}>{topic.title}</NavA></NavLi>
            ))}
          </NavUl>
        </nav>
      </header>
    </>
  )
}