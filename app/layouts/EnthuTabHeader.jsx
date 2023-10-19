import { Box } from "@mui/material";

const EnthuTabHeader = ({ children }) => {
  return (
    <Box className="flex gap-5">
      <div className="hidden desktop:block desktop:w-[200px]"></div>
      <Box
        className="pb-5 flex gap-x-2 mb-4 desktop:mb-[10px] border-solid border-b border-800 border-opacity-[0.5] w-full desktop:w-modal-header-right-title-width"
      >
        {children}
      </Box>
    </Box>
  );
};

export default EnthuTabHeader;
