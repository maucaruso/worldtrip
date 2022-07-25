import { Box, Flex, Grid, Text, Tooltip } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { Header } from "../../components/Header";
import Image from "next/image";
import InfoNumber from "../../components/InfoNumber";
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
          align={["center", "end"]}
          justifyContent={["center", "unset"]}
          maxWidth={1160}
          mx="auto"
          minHeight={[250, 500]}
          pb={["0", "3.75rem"]}
        >
          <Text
            align="center"
            as="h1"
            color={theme.colors.gray[200]}
            fontSize={["1.75rem", "5xl"]}
            fontWeight={600}
          >
            Europa
          </Text>
        </Flex>
      </Box>

      <Flex
        justify="space-between"
        flexWrap={["wrap", "unset"]}
        align="center"
        maxWidth={1160}
        mx="auto"
        px={["1rem", 0]}
        pt={["1.5rem", 20]}
        pb={["1rem", 20]}
        rowGap={["1rem", 0]}
      >
        <Text
          fontSize={["0.875rem", "2xl"]}
          color={theme.colors.gray[500]}
          width="100%"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex
          width="100%"
          gap={[0, 10]}
          justifyContent={["space-between", "center"]}
        >
          <InfoNumber total_number="50" description="países" />

          <InfoNumber total_number="50" description="línguas" />

          <InfoNumber
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
        px={["1rem", 0]}
      >
        <Text as="h2" mb={["1.25rem", 10]} fontSize="1.5rem" >
          Cidades +100
        </Text>

        <Grid templateColumns={["1fr", "repeat(4, 1fr)"]} gap="1.8125rem">
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
