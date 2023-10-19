import EnthuTabContentContainer from "../layouts/EnthuTabContentContainer";
import EnthuTabContentCourse from "../layouts/EnthuTabContents/EnthuTabContentCourse"
import EnthuTabContentMaterials from "../layouts/EnthuTabContents/EnthuTabContentMaterials";
import EnthuTabContentMedia from "../layouts/EnthuTabContents/EnthuTabContentMedia";
import EnthuTabContentMetadata from "../layouts/EnthuTabContents/EnthuTabContentMetadata";
import EnthuTabContentPricing from "../layouts/EnthuTabContents/EnthuTabContentPricing";
import EnthuTabContentSales from "../layouts/EnthuTabContents/EnthuTabContentSales";
import EnthuTabContentTeachers from "../layouts/EnthuTabContents/EnthuTabContentTeachers";
import { EnthuTabCourseData } from "./EnthuTabCourseData";

export const EnthuTabMetaData = [
  {
    id: 1,
    tabTitle: "Course",
    tabTitleSeparator: "-",
    tabHighlightText: "Guitar Classes",
    tabContent: <EnthuTabContentCourse/>,
  },
  {
    id: 2,
    tabTitle: "Sales & Marketing",
    tabTitleSeparator: "-",
    tabHighlightText: "Guitar Classes",
    tabContent: <EnthuTabContentSales/>,
  },
  {
    id: 3,
    tabTitle: "Related Materials",
    tabTitleSeparator: "-",
    tabHighlightText: "Guitar Classes",
    tabContent: <EnthuTabContentMaterials/>,
  },
  {
    id: 4,
    tabTitle: "Pricing",
    tabTitleSeparator: "-",
    tabHighlightText: "Guitar Classes",
    tabContent: <EnthuTabContentPricing/>,
  },
  {
    id: 5,
    tabTitle: "Metadata",
    tabTitleSeparator: "-",
    tabHighlightText: "Guitar Classes",
    tabContent: <EnthuTabContentMetadata/>,
  },
  {
    id: 6,
    tabTitle: "Media",
    tabTitleSeparator: "-",
    tabHighlightText: "Guitar Classes",
    tabContent: <EnthuTabContentMedia />,
  },
  {
    id: 7,
    tabTitle: "Teachers",
    tabTitleSeparator: "-",
    tabHighlightText: "Guitar Classes",
    tabContent: <EnthuTabContentTeachers/>,
  },
];
