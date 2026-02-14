import { useState } from "react";
import "./App.css";
import Intro from "./components/intro";

function App() {
  const [buton, setButon] = useState(false);

  const handleClick = () => {
    setButon((dugme) => !dugme);
  };

  const selam = "Merhaba";
  const isim = "Ben Demir";

  return (
    <>
      <div>
        <h1>{buton ? isim : selam}</h1>
        <Intro />
        <button onClick={handleClick}>Kimim ben?</button>
      </div>
    </>
  );
}

export default App;
