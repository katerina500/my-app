import React, {useEffect, useState} from "react";

const AscForm = () => {
    const [name, setName] = useState('');
  
    const handleChange = event => {
      setName(event.target.value);
    };
  
    const handleClick = () => {
      setName('');
    };
  
    return (
      <div>
        <input style={{width:"250px" ,height: "30px",color:"#070386"}}
          value = {name}
          onChange={handleChange}
          placeholder={'Введите имя'}
        />
  
        <button style={{padding: "10px", color: "#fff", background: "#61dafb"}} 
        onClick={handleClick}>Отправить</button>
      </div>
    );
  };

export default AscForm;