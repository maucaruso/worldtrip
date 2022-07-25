import { Box, Hide, Image, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

interface ShelfItemProps {
  IconPath: string;
  TextItem: string;
}

export default function ShelfItem({ IconPath, TextItem }: ShelfItemProps) {
  return (
    <Box textAlign="center" flex={["unset","1"]} width="50%">
      <Hide below="md">
        <Image src={IconPath} alt={TextItem} mx="auto" />
      </Hide>

      <Text
        mt={["0", "1.5rem"]}
        fontSize={[18, "1.5rem"]}
        color={theme.colors.gray[500]}
        fontWeight={600}
        _before={{ content: '""', display: ['inline-block', 'none'], mr: '8px', width: "8px", height: "8px", backgroundColor: theme.colors.orange[500], borderRadius: "50%" }}
      >
        {TextItem}
      </Text>
    </Box>
  );
}
