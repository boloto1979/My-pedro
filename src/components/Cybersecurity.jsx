import React from "react";
import styled from "styled-components";
import {
  SiPython,
  SiC,
  SiCsharp,
  SiGithub,
  SiOpencv
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
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
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
      top: 150px;
      right: center;
    }
`;

const Cybersecurity = () => {
  return (
    <>
      <Desc style={{ lineHeight: '1.7' }}>
        -VPN in C#:<SiCsharp/> <br/>
        -Socket Programming: <SiC/><br/>
        -Encryption Malware: <SiPython/><br/>
        -Excel Spreadsheet Creator: <SiPython/><br/>
        -Face Detector using Java and OpenCV: <SiOpencv/> <br/>
        <br/>
        If you want to see these projects or others, <br/>visit my Github.<br/>
        <a href="https://github.com/boloto1979?tab=repositories" target="_blank" rel="noopener noreferrer"><span class="github-icon"><SiGithub/></span></a>
      </Desc>
    </>
  );
};

export default Cybersecurity
