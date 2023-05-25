import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [activeKey, setActiveKey] = useState('');

  useEffect(()=>{
    document.addEventListener('keydown', (event => {
      playSound(event.key.toUpperCase());
    }));
  },[]);

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      nameSound: "Heater 1"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      nameSound: "Heater 2"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      nameSound: "Heater 4"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      nameSound: "Heater 4"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      nameSound: "Clap"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      nameSound: "Open-HH"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      nameSound: "Kick n' Hat"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      nameSound: "Kick"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      nameSound: "Closed-HH"
    }
  ];

  const playSound = (selected) => {
    const audio = document.getElementById(selected);
    audio.play();
    setActiveKey(selected);

  };

  return (
    <div className="App">
        <div id='drum-machine'>
           <div className='pad'>
             {drumPads.map(keypad => {
              return(
                <div key={keypad.keyCode} onClick={() => playSound(keypad.text)} className='drum-pad' id={keypad.keyCode}>
                  {keypad.text}
                  <audio className='clip' id={keypad.text} src={keypad.src}></audio>
                </div>

              );
             })
             }
           </div>
           <div id='display' className='controls'>
            <h2 className='text-header'>Drum Machine created by <p>Rafael Monteagudo</p></h2>
            <div className='active-key'>
              {activeKey}
            </div>
           </div>
        </div>
    </div>
  );
}

export default App;
