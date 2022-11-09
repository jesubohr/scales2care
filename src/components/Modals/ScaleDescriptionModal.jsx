const ScaleDescriptionModal = (props) => {
  const { description, title, hideModal, alternateColor } = props;
  return (
    <>
      <div
        onClick={() => hideModal(false)}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div
            className={`rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark-blue outline-none focus:outline-none border-4 border-med-blue ${alternateColor}`}
          >
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white font-poppins">
                {title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => hideModal(false)}
              >
                <span className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-lg leading-relaxed text-gray-900 dark:text-white font-poppins">
                {description}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-med-green dark:bg-med-green rounded-lg shadow-lg text-white  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 font-poppins"
                type="button"
                onClick={() => hideModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ScaleDescriptionModal;
