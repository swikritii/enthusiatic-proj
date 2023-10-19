import Image from "next/image";

const EnthuButton = ({ hasBtnIcon, btnText, isBtnLink, btnIconPath, btnLgPadding, onClick }) => {
  return (
    <>
      {isBtnLink ? (
        <a
          href="#"
          className={`enthu-btn-primary enthu-btn-primary${
            hasBtnIcon && "--Icon gap-4"
          }`}
        >
          <span className="enthu-btn-text">
            {btnText}
          </span>
          {hasBtnIcon && (
            <span className="inline-block relative top-[-1px]">
              <Image src={btnIconPath} alt="linear-btn-icon" width={15} />
            </span>
          )}
        </a>
      ) : (
        <button
          onClick={onClick && onClick}
          className={`enthu-btn-primary ${
            hasBtnIcon && "enthu-btn-primary--Icon gap-4"
          } ${
            btnLgPadding && "enthu-btn-primary--lgPadding"
          }
          `}
        >
          <span className="enthu-btn-text">
            {btnText}
          </span>
          {hasBtnIcon && (
            <span className="inline-block relative top-[-1px]">
              <Image src={btnIconPath} alt="linear-btn-icon" width={15} />
            </span>
          )}
        </button>
      )}
    </>
  );
};

export default EnthuButton;
