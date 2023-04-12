import React, { FC, useState } from "react";
import { Modal } from "@/components/ui/Modal/Modal";
import { ModalHeader } from "@/components/ui/Modal/ModalHeader";

export const AuthModal: FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="p-2 rounded-2xl text-white bg-yellow-900"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <ModalHeader closeModal={() => setShowModal(false)}>Auth modal</ModalHeader>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad autem
          delectus dolor fugit inventore iure maiores mollitia natus nisi obcaecati omnis optio quas
          quis quo saepe, sed vel!
        </div>
      </Modal>
    </>
  );
};
