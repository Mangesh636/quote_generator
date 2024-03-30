import "./RandomQuote.css";
import X_twitter from "../assets/x.svg";
import Reload from "../assets/reload.svg";
import { useState } from "react";

const RandomQuote = () => {

  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random()*quotes.length)];
    setQuote(select);
  }

  const [quote, setQuote] = useState({
    text: "Difficulties increases the nearer we get to the goal.",
    author: "Johann Wolfgang van Goethe",
  });

  const X = ()=>{
    window.open('https://twitter.com/intent/tweet?text=${quote.text) - $(quote.author.split(',')[0])');
  };

  loadQuotes();

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img src={Reload} alt="Reload" onClick={()=>{random()}} />
            <img src={X_twitter} alt="X-twitter" onClick={()=>{X()}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
