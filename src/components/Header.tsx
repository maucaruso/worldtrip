import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1160}
      mx="auto"
      align="center"
      justify="center"
      h={{ base: "3.125rem", sm: "6.25rem", md: "6.25rem" }}
    >
      <Link href="/">
        <a>
          <Image
            src="logo.svg"
            alt="Worldtrip"
            width={{ base: "5.125rem", sm: "11.5rem", md: "11.5rem" }}
          />
        </a>
      </Link>
    </Flex>
  );
}
