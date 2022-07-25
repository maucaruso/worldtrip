import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { theme } from "../../styles/theme";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  flag: string;
}

export default function CardItem(props: CardItemProps) {
  return (
    <Box
      borderRadius="4px"
      backgroundColor="#FFF"
      width="100%"
      maxWidth="256px"
      overflow="hidden"
      mx="auto"
    >
      <Box height="max-content" display="flex">
        <Image
          src={props.image}
          alt={props.title}
          width={500}
          height={341}
          objectFit="cover"
        />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={6}
        pt={5}
        pb={6}
        border="1px solid"
        borderColor={theme.colors.orange[500]}
        borderTop="none"
        borderRadius="0 0 4px 4px"
      >
        <Box>
          <Text
            as="h3"
            fontSize={20}
            fontWeight={600}
            color={theme.colors.gray[500]}
            mb={3}
          >
            {props.title}
          </Text>
          <Text fontSize={16} fontWeight={500} color={theme.colors.gray[400]}>
            {props.description}
          </Text>
        </Box>

        <Box>
          <Image src={props.flag} alt={props.title} width="30" height="30" />
        </Box>
      </Box>
    </Box>
  );
}
