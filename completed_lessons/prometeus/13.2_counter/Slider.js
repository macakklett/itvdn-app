import { useState } from "react";

export default function Slider(props) {

    const data = Math.min(Math.max(props.value, 0), 100);

    const [value, setValue] = useState(data);

    const decrement = () => {
        setValue(prev => prev - 1);
    }

    const increment = () => {
        setValue(prev => prev + 1);
    }

    return (
      <div className={props.className}>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${value}%` }}
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <button type="button" disabled={value === 0} onClick={decrement} className="btn btn-outline-danger">
            -
          </button>
          <span>{value}</span>
          <button type="button" disabled={value === 100} onClick={increment} className="btn btn-outline-success">
            +
          </button>
        </div>
      </div>
    );
  }
        