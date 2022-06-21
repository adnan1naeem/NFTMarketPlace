import { images } from "./../../assets/Images";

const Modal = (props) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-opacity-75 ">
        <div className="relative w-full md:w-3/5 lg:w-2/6 2xl:w-96 my-6 ">
          {/*content*/}
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
            style={{ background: "white" }}
          >
            {/*header*/}
            <div className="w-full flex items-start justify-end p-5 rounded-t">
              <div className="-mt-5 flex items-center justify-end cursor-pointer" onClick={props.handleClose}>
              <h1 className="text-4xl"> x</h1>
              </div>
            </div>
            {/*body*/}
            <div className="relative flex-auto">{props.children}</div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-75 cursor-none fixed inset-0 z-40 bg-black"></div>
      </>
  );
};
export default Modal;