import { Box, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { theme } from "../../styles/theme";

interface InfoNumberProps {
  total_number: string;
  description: string;
  details?: string;
}

export default function InfoNumbers(props: InfoNumberProps) {
  return (
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
          {props.total_number}
        </Box>{" "}
        {props.description}
        
        {(props.details) &&
          <Tooltip label={props.details} aria-label="A tooltip">
            <Box as="span" ml="0.3125rem">
              <Image src="/info.svg" alt="Voltar" width="16px" height="16px" />
            </Box>
          </Tooltip>
        }
      </Text>
    </Box>
  );
}
