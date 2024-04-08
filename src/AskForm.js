import React, {useState} from "react";

const AscForm = () => {
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState(false);
  
    const handleChange = event => {
      setName(event.target.value);
    };
  
    const handleClick = () => {
      setName('');
      setIsActive(current => !current);
    };

    
  
    return (
        <div className="box">
        <input style={{width:"200px" ,height: "30px", textAlign: "center", borderRadius: "10px"}}
          value = {name}
          onChange={handleChange}
          placeholder={'Введите имя'}
        />
  
        <button className="btn" style={{
          marginLeft: "30px",
          backgroundColor: isActive ? 'black' : '',
          color: isActive ? 'white' : '',
        }} 
        onClick={handleClick}
        >Отправить
          </button>
      </div>
    );
  };

export default AscForm;