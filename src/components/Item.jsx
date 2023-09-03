const Item = ({ title, num, curOpen, onOpen, children }) => {
  const isOpen = num === curOpen;
  return (
    <li
      className={`shadow-lg p-6 ${
        isOpen ? "border-t-2 border-[#087f5b]" : " "
      } `}
      onClick={() => onOpen(num)}
    >
      <div className="flex flex-row items-center">
        <p
          className={`mr-4 font-semibold text-xl text-[#ced4da] ${
            isOpen ? "text-[#087f5b] font-semibold " : " "
          }`}
        >
          {num <= 9 ? `0${num + 1}` : num + 1}
        </p>
        <div className="flex justify-between  items-center w-full ">
          <h3
            className={`text-sm ${
              isOpen ? "text-[#087f5b] font-semibold text-lg" : " "
            }`}
          >
            {title}
          </h3>
          <button className="text-[#868e96] font-extrabold text-base">
            {isOpen ? "-" : "+"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-6 ml-6 text-sm">
          <p>{children}</p>
        </div>
      )}
    </li>
  );
};

export default Item;
