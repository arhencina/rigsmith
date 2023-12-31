"use client";

import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Box bg={"teal"} color={"white"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>Rigsmith</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link href={"/"}>Home</Link>
              {/* <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>About Us</Link> */}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
