import { Box, Image, Text, theme } from "@chakra-ui/react";

interface ShelfItemProps {
  IconPath: string;
  TextItem: string;
}

export default function ShelfItem({ IconPath, TextItem }: ShelfItemProps) {
  return (
    <Box textAlign="center" flex="1">
      <Image src={IconPath} alt="Taça de drink" mx="auto" />
      <Text
        mt="1.5rem"
        fontSize="1.5rem"
        color={theme.colors.gray[500]}
        fontWeight={600}
      >
        {TextItem}
      </Text>
    </Box>
  );
}
