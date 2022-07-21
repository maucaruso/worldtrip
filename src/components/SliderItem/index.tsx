import { Flex, Text, theme } from "@chakra-ui/react";

interface SliderItemProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

export default function SliderItem({
  backgroundImage,
  title,
  subtitle,
}: SliderItemProps) {
  return (
    <Flex
      textAlign="center"
      backgroundImage={backgroundImage}
      minHeight="450"
      justify="center"
      align="center"
      flexDirection="column"
    >
      <Text color={theme.colors.gray[200]} fontSize="3rem" fontWeight="bold">
        {title}
      </Text>
      <Text
        color={theme.colors.gray[300]}
        mt="1rem"
        fontSize="1.5rem"
        fontWeight="bold"
      >
        {subtitle}
      </Text>
    </Flex>
  );
}
