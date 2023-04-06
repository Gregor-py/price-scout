import React, { FC } from "react";
import { Modal } from "@/components/ui/Modal/Modal";

export const AuthModal: FC = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <div className={"text-2xl"}>AuthModal</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad autem
          delectus dolor fugit inventore iure maiores mollitia natus nisi obcaecati omnis optio quas
          quis quo saepe, sed vel!
        </div>
      </Modal>
    </>
  );
};
