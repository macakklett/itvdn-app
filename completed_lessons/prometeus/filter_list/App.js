import { useState } from "react";

const App = () => {

  const array = ["Java", "Go", "JavaScript", "Python", "PHP"];
  const [text, setText] = useState('');
  const [filteredArray, setFilteredArray] = useState(array);

  const handleChangeText = (event) => {
    let value = event.target.value;
    setText(value);
    const filtered = array.filter(el => el.startsWith(value));
    setFilteredArray(filtered);
    // console.log(array);
  }

  return (
    <>
      <input type="text" defaultValue={text} onChange={(event) => handleChangeText(event)}/>
      <ol>
        {filteredArray.map((el, index) => <li key={index}>{el}</li>)}
      </ol>
    </>
  );
 
};

export default App;

// const [isHidden, setIsHidden] = useState(false);

//    return (
//    <div>
//       <button onClick = { () => setIsHidden(!isHidden)}>{isHidden ? "Приховати текст"  : " Показати текст"}</button>
//       {isHidden ? <p>Прихований текст</p> : null}
//    </div>)