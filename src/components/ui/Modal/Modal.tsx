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
              {/*content*/}
              <div className="bg-gray-700 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => closeModal()}
                  >
                    <span className="text-white bg-transparent opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="p-3">{children}</div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
