import React, { FC } from "react";

interface ModalHeader {
  closeModal: () => void;
  children: React.ReactNode;
}

export const ModalHeader: FC<ModalHeader> = ({ closeModal, children }) => {
  return (
    <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
      <h3 className="text-3xl font-semibold">{children}</h3>
      <button
        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={() => closeModal()}
      >
        <span className="text-white h-6 w-6 text-2xl block">×</span>
      </button>
    </div>
  );
};
