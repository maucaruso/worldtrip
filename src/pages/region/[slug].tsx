import { Box, Flex, Grid, Text, Tooltip } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { Header } from "../../components/Header";
import Image from "next/image";
import InfoNumbers from "../../components/InfoNumber";
import CardItem from "../../components/CardItem";

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
          <InfoNumbers total_number="50" description="países" />

          <InfoNumbers total_number="50" description="línguas" />

          <InfoNumbers
            total_number="50"
            description="cidades +100"
            details="Hey, I'm here!"
          />
        </Flex>
      </Flex>

      <Box
        maxWidth={1160}
        mx="auto"
        fontSize="4xl"
        fontWeight={500}
        color={theme.colors.gray[500]}
        mb={9}
      >
        <Text as="h2" mb={10}>
          Cidades +100
        </Text>

        <Grid templateColumns='repeat(4, 1fr)' gap="1.8125rem">
          <CardItem
            image="/londres.png"
            title="Londres"
            description="Reino Unido"
            flag="/londres-flag.png"
          />

          <CardItem
            image="/londres.png"
            title="Londres"
            description="Reino Unido"
            flag="/londres-flag.png"
          />

          <CardItem
            image="/londres.png"
            title="Londres"
            description="Reino Unido"
            flag="/londres-flag.png"
          />

          <CardItem
            image="/londres.png"
            title="Londres"
            description="Reino Unido"
            flag="/londres-flag.png"
          />

          <CardItem
            image="/londres.png"
            title="Londres"
            description="Reino Unido"
            flag="/londres-flag.png"
          />
        </Grid>
      </Box>
    </>
  );
}
