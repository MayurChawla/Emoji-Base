import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
var emojisweKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, Setmeaning] = useState("");
  function getMeaning(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "not in our database";
    }
    if (userInput === "") {
      meaning = "Enter an Emoji";
    }
    Setmeaning(meaning);
    //console.log(meaning);
  }
  function emojiClickHandler(emoji) {
    console.log("clicked ", emoji);
    var usrclick = emoji;
    var meaning = emojiDictionary[usrclick];
    Setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <input onChange={getMeaning} />
      <div className="output-text">{meaning}</div>
      <h3>Emojis We Know</h3>
      {emojisweKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: ".5rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
