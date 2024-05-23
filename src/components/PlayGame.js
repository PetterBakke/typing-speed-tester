import { useEffect, useState } from "react";

const PlayGame = ({ onChangeScore }) => {
  const [defaultData] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum malesuada euismod. Maecenas eu elit ac elit rhoncus pretium nec non velit. Nulla et est libero. Nulla placerat turpis et augue ullamcorper, et malesuada ipsum egestas. ');
  const [dataTyping, setDataTyping] = useState([]);
  const [textTyping, setTextTyping] = useState({
    value: '',
    position: 0
  })

  useEffect(() => {
    const addWord = (quantity = 20) => {
      const arrayDefaultDB = defaultData.split(' ');
      const dataTypingTest = [];
      for (let index = 0; index < quantity; index++) {
        const position = Math.floor(Math.random() * arrayDefaultDB.length);
        dataTypingTest.push({
          value: arrayDefaultDB[position],
          status: null
        })
      }
      setDataTyping(dataTypingTest);
    }
    if (dataTyping.length === 0) {
      addWord();
    }
  }, [])
  const handleChangeTyping = e => {
    const valueInput = e.target.value;
    if(!valueInput.includes(' ')) {
      setTextTyping({
        ...textTyping,
        value: valueInput
      });
    }else if(textTyping !== '') {
      checkResult();
    }
  }

  const checkResult = () => {
    const dataCheck = dataTyping;
    const wordCheck = dataCheck[textTyping.position].value;
    if(textTyping.value === wordCheck) {
      dataCheck[textTyping.position].status = true;
    }else {
      dataCheck[textTyping.position].status = false;
    }
    setDataTyping(dataCheck);
  }

  return (
    <div className="playing">
      <ul className="list">
        {
          dataTyping.map((word, index) =>
          <li key={index}>
            {
              word.value
            }
          </li>)
        }
      </ul>
      <div className="inputForm">
        <input type="text" value={textTyping.value} onChange={handleChangeTyping} />
      </div>
    </div>
  )
}

export default PlayGame;