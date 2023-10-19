import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import EnthuTabHeader from "../layouts/EnthuTabHeader";
import EnthuTabContentContainer from "../layouts/EnthuTabContentContainer";
import { EnthuTabMetaData } from "../data/EnthuTabMetaData";

export default function EnthuVerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabs = () => {
    return EnthuTabMetaData.map((curElem) => (
      <Tab
        key={curElem?.id}
        label={curElem?.tabTitle}
        {...a11yProps(curElem?.id)}
      />
    ));
  };

  const renderTabPanels = () => {
    return EnthuTabMetaData.map((curElem, index) => (
      <TabPanel
        className="overflow-auto h-full enthu-scrollable-tab-content"
        key={curElem?.id}
        value={value}
        index={index}
      >
        {curElem?.tabContent}
      </TabPanel>
    ));
  };

  const renderTabPanelTitle = () => {
    return EnthuTabMetaData.map((curElem, index) => (
      <TabPanel key={curElem?.id} value={value} index={index} className="">
        <span className="inlie-block text-md font-medium text-black">
          {" "}
          {curElem?.tabTitle} {curElem?.tabTitleSeparator}{" "}
        </span>
        <span className="inline-block text-md font-semibold text-black">
          {curElem?.tabHighlightText}
        </span>
      </TabPanel>
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="pr-5 phablet:pr-7 desktop:pr-0 pt-8 tablet:pt-0">
        <EnthuTabHeader>{renderTabPanelTitle()}</EnthuTabHeader>
        <Box
          className="tab-box w-full flex align-start flex-grow-1 gap-5"
          sx={{
            height: "calc(100vh - 340px)",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >
            {renderTabs()}
          </Tabs>
          <EnthuTabContentContainer sx={{ width: 'calc(100% - 13rem) '}}>{renderTabPanels()}</EnthuTabContentContainer>
        </Box>
      </div>
    </ThemeProvider>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}
