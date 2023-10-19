import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import EnthuTabContentContainer from "../layouts/EnthuTabContentContainer";

const EnthuTabHorizontal = ({ tabData }) => {
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="mt-5 pr-5 tablet:mt-0">
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="hoxizontal tabs">
          {tabData?.map((curElem, index) => {
            const { id, tabTitle } = curElem;
            return <Tab label={tabTitle} value={id} key={index} />;
          })}
        </TabList>

        <EnthuTabContentContainer sx={{ width: "100%", marginTop: "28px" }}>
          {tabData?.map((curElem, index) => {
            const { id, tabContent } = curElem;
            return (
              <TabPanel value={id} key={index} sx={{ padding: 0 }}>
                {tabContent}
              </TabPanel>
            );
          })}
        </EnthuTabContentContainer>
      </TabContext>
    </Box>
  );
};

export default EnthuTabHorizontal;
