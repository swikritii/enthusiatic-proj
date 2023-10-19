import EnthuDropdownBar from "../EnthuDropdownBar";
import EnthuModalScrollableBody from "./EnthuDialogScrollaleBody";

const EnthuModalContent = () => {
  return (
    <div className="flex flex-col desktop:flex-row desktop:items-center gap-y-[30px] desktop:justify-between flex-wrap">
      <h3 className="heading-h3 font-semibold text-black-100 desktop:pl-4">
        Course
      </h3>
      {/* display dropdown bar in larger devices */}
      <div className="hidden tablet:flex tabletviewmode tablet:w-full desktop:w-modal-header-right desktop:pr-4">
        <EnthuDropdownBar />
      </div>
      <EnthuModalScrollableBody />
    </div>
  );
};

export default EnthuModalContent;
