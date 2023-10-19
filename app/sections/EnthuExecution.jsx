"use client";
import { useState } from "react";
import EnthuButton from "../components/EnthuButton";
import EnthuModal from "../components/EnthuModal";
import EnthuModalContent from "../layouts/TaskDIalog/EnthuModalContent";

const EnthuExecution = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    console.log("open is clicked", isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
    console.log("close is clicked", isModalOpen);
  };

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <EnthuButton btnText="Modal Popup" onClick={openModal}>
        Open Modal
      </EnthuButton>
      <EnthuModal isOpen={isModalOpen} onClose={closeModal}>
        <EnthuModalContent />
      </EnthuModal>
    </main>
  );
};

export default EnthuExecution;
