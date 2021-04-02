import { useState } from "react";

const useModal = (startsOpen = false) => {
  const [isOpen, setIsOpen] = useState(startsOpen);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  return {
    isOpen,
    toggleModal,
  };
};

export {
  useModal
}