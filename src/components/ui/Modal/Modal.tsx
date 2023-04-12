import React, { FC, MouseEvent, useRef } from "react";
import classNames from "classnames";

interface Modal {
  closeModal: () => void;
  showModal: boolean;
  children: React.ReactNode;
  closeWhenClickOutside?: boolean;
}

export const Modal: FC<Modal> = ({
  closeModal,
  children,
  showModal,
  closeWhenClickOutside = true
}) => {
  const overlayRef = useRef(null);

  const onClickOverlay = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current && closeWhenClickOutside) {
      closeModal();
    }
    event.preventDefault();
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            onClick={onClickOverlay}
            ref={overlayRef}
            className={classNames(
              { "animate-scaleIn": showModal, "animate-scaleOut": !showModal },
              "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            )}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="bg-gray-700 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
