import React, { FC } from "react";
import { Modal } from "@/components/ui/Modal/Modal";
import { ModalHeader } from "@/components/ui/Modal/ModalHeader";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setIsOpen } from "@/store/auth-modal/AuthModalSlice";

export const AuthModal: FC = () => {
  const dispatch = useDispatch();
  const { isOpen } = useTypedSelector((state) => state.authModal);
  const closeModal = () => dispatch(setIsOpen(false));
  const openModal = () => dispatch(setIsOpen(true));

  return (
    <>
      <button
        className="p-2 rounded-2xl text-white bg-yellow-900"
        type="button"
        onClick={openModal}
      >
        Open regular modal
      </button>
      <Modal showModal={isOpen} closeModal={closeModal}>
        <ModalHeader closeModal={closeModal}>Auth modal</ModalHeader>
        <div>
          auth modal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda
          beatae debitis doloribus eos facilis nam natus, nostrum perferendis temporibus? Aliquam
          commodi consequuntur dolore error esse hic sint, tempore totam.
        </div>
      </Modal>
    </>
  );
};
