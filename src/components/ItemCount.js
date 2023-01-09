export const ItemCount = ({ count, handleCount }) => {
    return (
      <div className="d-flex ">
        <button
          onClick={() => handleCount("minus")}
          className="boton-cantidad"
        >
          -
        </button>
        <span
          id="counter"
          className="m- rounded-pill bg-white p-2"
        >
         {count}
        </span>
        <button
          onClick={() => handleCount("plus")}
          className="boton-cantidad"
        >
          +
        </button>
      </div>
    );
  };