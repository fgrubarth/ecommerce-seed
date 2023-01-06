export const ItemCount = ({ count, handleCount }) => {
    return (
      <div className="">
        <button
          onClick={() => handleCount("minus")}
          className=""
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
          className="b "
        >
          +
        </button>
      </div>
    );
  };