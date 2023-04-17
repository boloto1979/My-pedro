import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';
import {
  SiLinkedin,
  SiGithub
} from 'react-icons/si';

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
  }

  .github-icon {
    display: block;
    justify-content: center;
    font-size: 30px;
    left: 205px;
    color: #ffff;
    }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #4b40e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const handleScroll = () => {
  const section = document.getElementById("contact");
  section.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <Section>
      <Container>
          <List>
          <a href="https://github.com/boloto1979?tab=repositories" target="_blank" rel="noopener noreferrer"><span class="github-icon"><SiGithub/></span></a>
          <a href="https://www.linkedin.com/in/pedro-lima3233/" target="_blank" rel="noopener noreferrer"><span class="github-icon"><SiLinkedin/></span></a>
          </List>
        <Icons>
          <Button onClick={handleScroll}>
            <Link to="who" smooth={true} duration={500}>
              Hire Now
            </Link>
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;