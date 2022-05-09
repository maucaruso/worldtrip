import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Image, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Box
        backgroundImage="banner-01.jpg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex
          justify="space-between"
          align="center"
          maxWidth={1160}
          mx="auto"
          minHeight={335}
        >
          <Box>
            <Text
              as="h1"
              color={theme.colors.gray[200]}
              fontSize="4xl"
              fontWeight={500}
            >
              5 continentes, <br /> infinitas possibilidades
            </Text>

            <Text
              as="h2"
              color={theme.colors.gray[300]}
              mt="1.25rem"
              fontSize="1.25rem"
              maxWidth={524}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Image src="airplane.svg" alt="Avião amarelo" mt="20" mb="-20" />
        </Flex>
      </Box>

      <Flex
        justify="space-between"
        align="center"
        maxWidth={1160}
        mx="auto"
        mt="7.125rem"
        pb="3.75rem"
        position="relative"
        _after={{
          content: `""`,
          position: "absolute",
          bottom: "0",
          right: "0",
          left: "0",
          width: "5.625rem",
          height: ".125rem",
          bg: "gray.500",
          margin: "auto",
        }}
      >
        <Box textAlign="center" flex="1">
          <Image src="cocktail.svg" alt="Taça de drink" mx="auto" />
          <Text
            mt="1.5rem"
            fontSize="1.5rem"
            color={theme.colors.gray[500]}
            fontWeight={600}
          >
            vida noturna
          </Text>
        </Box>

        <Box textAlign="center" flex="1">
          <Image src="surf.svg" alt="Taça de drink" mx="auto" />
          <Text
            mt="1.5rem"
            fontSize="1.5rem"
            color={theme.colors.gray[500]}
            fontWeight={600}
          >
            praia
          </Text>
        </Box>

        <Box textAlign="center" flex="1">
          <Image src="building.svg" alt="Prédio" mx="auto" />
          <Text
            mt="1.5rem"
            fontSize="1.5rem"
            color={theme.colors.gray[500]}
            fontWeight={600}
          >
            moderno
          </Text>
        </Box>

        <Box textAlign="center" flex="1">
          <Image src="museum.svg" alt="Museu" mx="auto" />
          <Text
            mt="1.5rem"
            fontSize="1.5rem"
            color={theme.colors.gray[500]}
            fontWeight={600}
          >
            clássico
          </Text>
        </Box>

        <Box textAlign="center" flex="1">
          <Image src="earth.svg" alt="Planeta" mx="auto" />
          <Text
            mt="1.5rem"
            fontSize="1.5rem"
            color={theme.colors.gray[500]}
            fontWeight={600}
          >
            e mais...
          </Text>
        </Box>
      </Flex>

      <Box maxWidth={1240} mx="auto" mt="3.25rem">
        <Text
          color={theme.colors.gray[500]}
          textAlign="center"
          fontWeight={500}
          fontSize="2.25rem"
          lineHeight="3.375rem"
          mb="3.25rem"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex
              textAlign="center"
              backgroundImage="europa.jpg"
              minHeight="450"
              justify="center"
              align="center"
              flexDirection="column"
            >
              <Text
                color={theme.colors.gray[200]}
                fontSize="3rem"
                fontWeight="bold"
              >
                Europa
              </Text>
              <Text
                color={theme.colors.gray[300]}
                mt="1rem"
                fontSize="1.5rem"
                fontWeight="bold"
              >
                O continente mais antigo.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Home;
