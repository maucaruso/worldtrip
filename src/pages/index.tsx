import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "../components/Header";
import ShelfItem from "../components/ShelfItem";
import SliderItem from "../components/SliderItem";

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
        <ShelfItem IconPath="cocktail.svg" TextItem="vida noturna" />

        <ShelfItem IconPath="surf.svg" TextItem="praia" />

        <ShelfItem IconPath="building.svg" TextItem="moderno" />

        <ShelfItem IconPath="museum.svg" TextItem="clássico" />

        <ShelfItem IconPath="earth.svg" TextItem="e mais..." />
      </Flex>

      <Box maxWidth={1240} mx="auto" mt="3.25rem" mb="2.5rem">
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
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide>
            <SliderItem
              backgroundImage="europa.jpg"
              title="América do Norte"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/region/america-do-norte"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem
              backgroundImage="europa.jpg"
              title="América do Sul"
              subtitle="Etiam fermentum est eget mi eleifend porttitor."
              href="/region/america-do-sul"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem
              backgroundImage="europa.jpg"
              title="Ásia"
              subtitle="Sed sodales, est id feugiat convallis, nunc mauris ornare augue, vulputate pulvinar elit mauris quis quam."
              href="/region/asia"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem
              backgroundImage="europa.jpg"
              title="Europa"
              subtitle="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
              href="/region/europa"
            />
          </SwiperSlide>

          <SwiperSlide>
            <SliderItem
              backgroundImage="europa.jpg"
              title="Oceania"
              subtitle="Phasellus non fringilla mauris, at luctus felis. Maecenas mattis finibus ante a ultricies."
              href="/region/oceania"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Home;
