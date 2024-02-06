import { useState, useMemo } from 'react';
import './memo.css';

const Memo = () => {

  const [year, setYear] = useState(2021);
  const [number, setNumber] = useState(4);

  const secretNumber = useMemo(() => {
    const result =  year * number * 10;
    return result;
  }, [year]);

  return (
    <div>
      <h3>Memo</h3>
      <ol className="list-group">
        <li className="memo__year list-group-item">
          Поточний рік: <span>{year}</span>
        </li>
        <li className="memo__number list-group-item">
          Поточне число: <span>{number}</span>
        </li>
        <li className="memo__secret-number list-group-item">
          Поточне секретне число: <span>{secretNumber}</span>
        </li>
      </ol>
      <div className="memo__buttons">
        <button
          type="button"
          className="memo__button-year btn btn-primary"
          onClick={() => {setYear(prevValue => prevValue + 1)}}
        >
          Змінити рік
        </button>
        <button
          type="button"
          className="memo__button-number btn btn-secondary"
          onClick={() => {setNumber(prevValue => prevValue + 1)}}
        >
          Змінити число
        </button>
      </div>
    </div>
  );
};

export default Memo;
