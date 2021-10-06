import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😀": "Grinning",
  "😊": "Smiling",
  "😳": "Disbelief",
  "🤧": "Sneezing",
  "😔": "Sad",
  "🥶": "Cold",
  "🥡": "Takeout box",
  "😕": "Confused",
  "🤗": "Hugging",
  "😬": "Grimacing",
  "😏": "Smirking",
  "🤥": "Lying",
  "🤑": "Rich",
  "❤️": "Love",
  "😑": "Annoyance",
  "🤫": "Shushing",
  "🤔": "Thinking",
  "😲": "Astonished",
  "😌": "Relieved",
  "😫": "Tired",
  "😠": "Angry",
  "😗": "Kissing",
  "😵": "Dizzy",
  "😟": "Worried",
  "😨": "Fearful",
};

const emojis_array = Object.keys(emojiDictionary);
const emojis = [
  emojis_array.slice(0, 5),
  emojis_array.slice(5, 10),
  emojis_array.slice(10, 15),
  emojis_array.slice(15, 20),
  emojis_array.slice(20, 25),
];

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  const changeHandler = (event) => {
    const inputEmoji = event.target.value.trim();
    setEmoji(inputEmoji);
    if (inputEmoji !== "") {
      if (inputEmoji in emojiDictionary) {
        setMeaning(emojiDictionary[inputEmoji]);
      } else {
        setMeaning("This emoji is not present in our database");
      }
    }
  };

  const emojiClickHandler = (inputEmoji) => {
    setEmoji(inputEmoji);
    setMeaning(emojiDictionary[inputEmoji]);
  };

  return (
    <div className="App">
      <h1>Inside Out!!</h1>
      <input
        onChange={(e) => changeHandler(e)}
        value={emoji}
        placeholder={" Search your emoji..."}
      />
      <h3> {meaning} </h3>
      {emojis.map((arr, ind) => (
        <div key={ind}>
          {arr.map((emoji, i) => (
            <span
              key={i}
              onClick={() => emojiClickHandler(emoji)}
              className="emoji"
            >
              {emoji}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
