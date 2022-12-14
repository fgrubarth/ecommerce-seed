export const ItemCount = ({ count, handleCount }) => {
    return (
      <div className="flex mt-10 w-4/5 bg-gray-200 rounded">
        <button
          onClick={() => handleCount("minus")}
          className=" justify-center items-center p-1  bg-gray-800 text-black"
        >
          -
        </button>
        <span
          id="counter"
          className="flex justify-center items-center mx-2 font-bold text-black"
        >
          {count}
        </span>
        <button
          onClick={() => handleCount("plus")}
          className=" justify-center items-center p-1  bg-gray-800 text-black"
        >
          +
        </button>
      </div>
    );
  };