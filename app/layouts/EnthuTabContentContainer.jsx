import { Box } from "@mui/material";
import React from "react";

const EnthuTabContentContainer = ({ children, sx }) => {
  return (
    <Box className="tab-panel bg-gray-200/[0.5] rounded-lg p-4 " sx={sx}>
      <Box className="rounded-lg border border-solid border-gray-700 bg-white h-full overflow-hidden">
        {children}
      </Box>
    </Box>
  );
};

export default EnthuTabContentContainer;
