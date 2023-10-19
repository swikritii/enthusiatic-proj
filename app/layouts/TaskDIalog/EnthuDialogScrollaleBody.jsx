import EnthuVerticalTabs from "@/app/components/EnthuTabVertical";
import EnthuDropdownBar from "../EnthuDropdownBar";
import EnthuTabHorizontal from "@/app/components/EnthuTabHorizontal";
import { EnthuTabMetaData } from "@/app/data/EnthuTabMetaData";

const EnthuModalScrollableBody = () => {
  const tabData = [
    {
      id: 0,
      title: "Data Infrastructure",
    },
    {
      id: 1,
      title: "Quality at Scale",
    },
    {
      id: 2,
      title: "Team Collaboration",
    },
    {
      id: 3,
      title: "Integration & Automation",
    },
  ];

  return (
    <div className="h-scrollable-modalbody-phablet tablet:h-scrollable-modalbody-tablet desktop-lg:h-scrollable-modalbody-desktop-lg desktop:h-full overflow-auto enthu-modal__contentscroll w-full">
      {/* display dropdown bar in small devices */}
      <div className="block pr-5 phablet:pr-7 tablet:hidden tablet:pr-0 dropdown-desktopviewmode">
        <EnthuDropdownBar />
      </div>
      <div className="hidden desktop-lg:block">
        <EnthuVerticalTabs />
      </div>
      <div className="block desktop-lg:hidden">
        <EnthuTabHorizontal tabData={EnthuTabMetaData} />
      </div>
    </div>
  );
};

export default EnthuModalScrollableBody;
