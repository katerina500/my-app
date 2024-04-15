import React, {useState} from "react";


  const AscForm = () => {
    const [name, setName] = useState("");
    const [isEvenClick, setIsEvenClick] = useState(false);
  
    const handleChange = (event) => {
      setName(event.target.value);
    };
  
    const handleClick = () => {
      setName("");
      setIsEvenClick((current) => !current);
    };
  
    return (
      <div
        className="box"
        style={{
          backgroundColor: isEvenClick ? "coral" : "initial",
        }}
      >
        <input
          style={{
            width: "200px",
            height: "30px",
            textAlign: "center",
            borderRadius: "10px",
          }}
          value={name}
          onChange={handleChange}
          placeholder={"Введите имя"}
        />
  
        <button
          className="btn"
          style={{
            backgroundColor: isEvenClick ? "green" : "red",
          }}
          onClick={handleClick}
        >
          Отправить
        </button>
      </div>
    );
  };
  

export default AscForm;