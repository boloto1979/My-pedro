import React from "react";
import styled from "styled-components";
import {
  SiPython,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiTypescript,
  SiGithub
} from 'react-icons/si';

const Desc = styled.div`
  width: 600px;
  height: 500px;
  padding: 50px;
  background-color: #ffffff18;
  border-radius: 50px;
  text-align: left;
  font-size: 24px;
  color: white;
  position: absolute;
  top: 120px;
  right: 100px;
  
  .github-icon {
    display: flex;
    justify-content: center;
    font-size: 70px;
    margin-top: 60px;
    color: #ffff;
    }

    @media only screen and (max-width: 795px) {
      .github-icon {
        display: flex;
        justify-content: center;
        font-size: 50px;
        margin-top: 40px;
        color: #ffff;

      }
      width: 200px;
      height: 350px;
      padding: 25px;
      background-color: #ffffff18;
      border-radius: 50px;
      text-align: left;
      font-size: 15px;
      color: white;
      position: absolute;
      top: 270px;
      right: center;
  }
`;

const Development = () => {
  return (
    <>
      <Desc style={{ lineHeight: '1.7' }}>
        -Chat Messaging: <SiNextdotjs/> <SiTailwindcss/> <SiReact/> <SiTypescript/><br/>
        -Portfolio: <SiReact/><br/>
        -Functions with Python: <SiPython/><br/>
        -Excel Spreadsheet Creator: <SiPython/><br/>
        -Crud Laravel: <SiPhp/> <SiMysql/> <SiLaravel/><br/>
        <br/>
        If you want to see these projects or others, <br/>visit my Github.<br/>
        <a href="https://github.com/boloto1979?tab=repositories" target="_blank" rel="noopener noreferrer"><span class="github-icon"><SiGithub/></span></a>
      </Desc>
    </>
  );
};

export default Development;
