import React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import styled from 'styled-components';

const Title = tw.h1`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black  bg-gradient-to-r from-[blueviolet] via-blue-600 to-[cyan] bg-clip-text text-transparent`;

const SmallTitle = tw.h2`text-3xl lg:text-4xl font-light text-white/90`;

const Hero = tw.div`container mx-auto grid grid-cols-1 items-center p-2`;

const Gradient = tw.span`bg-gradient-to-r from-[blueviolet] via-blue-600 to-[cyan] bg-clip-text text-transparent`;

const Container = tw.div` h-screen text-white/90
bg-[#242424]`;

const CenteredDiv = tw.div`grid grid-cols-1 items-center h-[100vh] w-[100vw]`;

const NavBrand = () => (
  <h1 tw="font-black text-xl text-white/90 ">
    <Gradient>My Cute Kittens</Gradient>My Cute Kittens
  </h1>
);
const NavLinks = () => (
  <div tw="hidden md:flex justify-end">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

const Navbar = () => (
  <nav tw="grid grid-cols-2 items-center px-[10%] py-3 w-[100vw]">
    <NavBrand />
    <NavLinks />
  </nav>
);
const App = () => (
  <>
    <Container>
      <Navbar />
      <CenteredDiv>
        <Hero>
          <Title>Come adopt my cute ass kittens.</Title>
          <SmallTitle>They deserve a good home with plenty of love.</SmallTitle>
        </Hero>
      </CenteredDiv>
    </Container>
  </>
);

export default App;
