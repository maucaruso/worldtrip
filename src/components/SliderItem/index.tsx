import { Flex, Text, theme } from "@chakra-ui/react";
import Link from "next/link";

interface SliderItemProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  href: string;
}

export default function SliderItem({
  backgroundImage,
  title,
  subtitle,
  href,
}: SliderItemProps) {
  return (
    <Flex
      textAlign="center"
      backgroundImage={backgroundImage}
      minHeight={["250", "450"]}
      justify="center"
      align="center"
      flexDirection="column"
    >
      <Link href={href}>
        <a>
          <Text
            color={theme.colors.gray[200]}
            fontSize={["1.5rem", "3rem"]}
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text
            color={theme.colors.gray[300]}
            mt="1rem"
            fontSize={["0.875rem", "1.5rem"]}
            maxWidth={["80%", "unset"]}
            fontWeight="bold"
            mx="auto"
          >
            {subtitle}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
