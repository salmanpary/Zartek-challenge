import React,{useState,useEffect} from "react";
const Button = (props) => {
    const [number, setnumber] = useState(0);
    function getOccurrence(array, value) {
      var count = 0;
      array.forEach((v) => v === value && count++);
      return count;
    }
  
    const increment = () => {
      setnumber(number + 1);
      props.damn(props.cart + 1);
      props.setarr([...props.arr, props.data]);
      props.weakmap.set(props.data, getOccurrence(props.arr, props.data) + 1);
  
      props.setweakmap(props.weakmap);
      console.log(getOccurrence(props.arr, props.data));
    };
    const decrement = () => {
      if (number === 0) {
        return;
      }
      setnumber(number - 1);
      props.damn(props.cart - 1);
      const index = props.arr.indexOf(props.data);
      props.arr.splice(index, 1);
      props.setarr([...props.arr]);
      props.weakmap.set(props.data, getOccurrence(props.arr, props.data));
    };
    useEffect(() => {}, []);
    return (
      <>
        <div className="button bg-green-500 flex justify-evenly w-24 rounded-2xl">
          <button className="text-white" onClick={decrement}>
            -
          </button>
          <div className="number text-white">{number}</div>
          <button className="text-white" onClick={increment}>
            +
          </button>
        </div>
      </>
    );
  };
  export default Button