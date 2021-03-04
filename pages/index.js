import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Head from "next/head";

const MotionBox = motion.custom(Flex);

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Happy Birthday Auntie Tripathi</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          overflow: hidden;
          user-select: none;
          cursor: pointer;
        }
      `}</style>
      <MotionBox
        width="100%"
        height="100%"
        bgGradient="linear(to-l, #7928CA10,#FF008010)"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        whileTap={{ scale: 1.2, rotate: 180 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Box mb={8}>
          <NextImage
            src="/big_fish.jpeg"
            width="300px"
            height="200px"
            objectFit="cover"
          />
        </Box>
        <Text>Try tapping the page</Text>
        <Text
          mt={8}
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Happy Birthday Auntie Tripathi
        </Text>
        <Text mt={8}>Love from Jono &amp; Sne</Text>
      </MotionBox>
    </>
  );
}
