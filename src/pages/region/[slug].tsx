import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { Header } from "../../components/Header";
import Image from "next/image";

export default function Region() {
  return (
    <>
      <Header />

      <Box
        backgroundImage="/europa-lp.jpg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex
          align="end"
          maxWidth={1160}
          mx="auto"
          minHeight={500}
          pb="3.75rem"
        >
          <Text
            align="center"
            as="h1"
            color={theme.colors.gray[200]}
            fontSize="5xl"
            fontWeight={600}
          >
            Europa
          </Text>
        </Flex>
      </Box>

      <Flex
        justify="space-between"
        align="center"
        maxWidth={1160}
        mx="auto"
        py={20}
      >
        <Text fontSize="2xl" color={theme.colors.gray[500]} width="100%">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex justify="center" width="100%" gap={10}>
          <Box>
            <Text
              fontSize="2xl"
              color={theme.colors.gray[500]}
              fontWeight={600}
              textAlign="center"
            >
              <Box
                as="span"
                color={theme.colors.orange[500]}
                display="block"
                fontSize="5xl"
              >
                50
              </Box>{" "}
              países
            </Text>
          </Box>

          <Box>
            <Text
              fontSize="2xl"
              color={theme.colors.gray[500]}
              fontWeight={600}
              textAlign="center"
            >
              <Box
                as="span"
                color={theme.colors.orange[500]}
                display="block"
                fontSize="5xl"
              >
                50
              </Box>{" "}
              línguas
            </Text>
          </Box>

          <Box>
            <Text
              fontSize="2xl"
              color={theme.colors.gray[500]}
              fontWeight={600}
              textAlign="center"
            >
              <Box
                as="span"
                color={theme.colors.orange[500]}
                display="block"
                fontSize="5xl"
              >
                50
              </Box>{" "}
              cidades +100
              <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
                <Box as="span" ml="0.3125rem">
                  <Image
                    src="/info.svg"
                    alt="Voltar"
                    width="16px"
                    height="16px"
                  />
                </Box>
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
