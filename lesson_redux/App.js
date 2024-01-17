import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  reload,
  addValue
} from "./store/counterSlice";

function App() {

  const count = useSelector((state) => state.counterValue.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  // console.log(count);
  const inc = () => {
    dispatch(increment());
  }
  const dec = () => {
    dispatch(decrement());
  }
  const add = () => {
    const val = Number(value);
    dispatch(addValue(isNaN(val) ? 0 : val));
  }

  return (
    <div className="container">
      <div>
        <h3>{ count }</h3>
        <button onClick={inc}>INC +</button>
        <button onClick={dec}>Dec -</button>
      </div>
      <div>
        <button onClick={() => dispatch(reload())}>RESET</button>
      </div>
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={add}>ADD</button>
      </div>
    </div>
  );
}

export default App;
