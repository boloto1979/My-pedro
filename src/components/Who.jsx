import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { Link } from 'react-scroll';
import {
    SiHtml5,
    SiCss3,
    SiJss,
    SiPython,
    SiCloudera,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiMysql,
    SiPhp,
    SiLaravel,
    SiTypescript
 } from 'react-icons/si';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #4b40e2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #4b40e2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const handleScroll = () => {
  const section = document.getElementById("works");
  section.scrollIntoView({ behavior: "smooth" });
};

const Who = () => {
  return (
    <Section id="who">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title >Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am I:</Subtitle>
          </WhatWeDo>
          <Desc>
            Student and full stack developer studying (ADS), passionate about technology,
            in particular the area of ​​Information Security
            with knowledge in <SiHtml5/> <SiCss3/> <SiJss/> <SiPython/> <SiCloudera/> <SiTailwindcss/> <SiReact/> <SiNextdotjs/> <SiMysql/> <SiPhp/> <SiLaravel/> <SiTypescript/>.
          </Desc>
          <Button onClick={handleScroll}>
          <Link to="works" smooth={true} duration={500}>
            Projects
          </Link>
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;