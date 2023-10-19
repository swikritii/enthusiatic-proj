"use client";

const EnthuModal = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-[0.6s] ${
            isOpen
              ? "opacity-100 bg-white"
              : "opacity-0 bg-transparent pointer-events-none"
          }`}
          onClick={handleOverlayClick}
        >
          <div
            className={`bg-white p-6 pr-4 desktop:pr-6 rounded-[14px] enthu-modal max-w-[1240px] overflow-hidden shadow-modal transition-all duration-[0.6s] top-[50%] absolute left-[50%] ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } `}
          >
            {children}
            {/* <button className="close-button" onClick={onClose}>
              Close
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default EnthuModal;
