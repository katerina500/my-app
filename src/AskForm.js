import React, {useState} from "react";

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
        <input style={{width:"200px" ,height: "30px",color:"#070386", textAlign: "center", borderRadius: "10px"}}
          value = {name}
          onChange={handleChange}
          placeholder={'Введите имя'}
        />
  
        <button style={{padding: "10px", color: "#fff", background: "#61dafb", borderRadius: "10px", marginLeft: "30px"}} 
        onClick={handleClick}>Отправить</button>
      </div>
    );
  };

export default AscForm;