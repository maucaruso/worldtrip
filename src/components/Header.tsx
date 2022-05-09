import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1160}
      h="20"
      my="2"
      mx="auto"
      align="center"
      justify="center"
    >
      <Link href="/">
        <a>
          <Image src="logo.svg" alt="Worldtrip" />
        </a>
      </Link>
    </Flex>
  );
}
