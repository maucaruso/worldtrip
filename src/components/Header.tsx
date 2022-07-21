import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, Image } from "@chakra-ui/react";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1160}
      mx="auto"
      align="center"
      justify="space-between"
      h={{ base: "3.125rem", sm: "6.25rem", md: "6.25rem" }}
    >
      <Box minWidth={32}>
        {asPath !== "/" && (
          <Link href="/">
            <a>
              <Image src="/back.svg" alt="Voltar" />
            </a>
          </Link>
        )}
      </Box>

      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            alt="Worldtrip"
            width={{ base: "5.125rem", sm: "11.5rem", md: "11.5rem" }}
          />
        </a>
      </Link>

      <Box minWidth={32}></Box>
    </Flex>
  );
}
