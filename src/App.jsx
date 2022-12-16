import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Card } from "./Card";
function App() {
  const [data, setData] = useState ([]);

  useEffect(()=>{

    function buscaDados() {
            fetch("http://localhost:3000/items")
            .then((response) => {
              if (response.ok) {
                return response.json();
            }
          })
          .then((data) => setData(data));
        } 
        buscaDados();

  },[] );

console.log(data);
 

  return (
    <div className="space">
      <h1>Shoppfy LTDA</h1>
      <h2>Sua melhor opção!!</h2>
      <div id="menus">
       
       <div className="bor"><a>LOJA1</a></div>
       <div className="bor"><a>LOJA2</a></div>
       <div className="bor"><a>LOJA3</a></div>
       <div className="bor"><a>LOJA4</a></div>
       <div className="bor"><a>LOJA5</a></div>

      </div>

       <div id="buttonn"><input type="text" placeholder="Digite até 1000 caracter"></input><button type="submit">Enviar para suport!</button></div>
      <div className="items">

    

        {
        
        data.map((item) => (

          <Card 
        label = {item.item}
        image_url = {item.image}
        price = {item.price} 
        id = {item.id}
        />

        

        ))}
      </div>
    </div>
  )
}

export default App
