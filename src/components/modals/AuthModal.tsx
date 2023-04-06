import { FC, useState } from "react";
import { Modal } from "@/components/ui/Modal/Modal";

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
