import './App.css';
import { Home } from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Result } from './Components/result';
import { useState } from 'react';

function App() {
  let [word, setWord] = useState<string>();

  // the callback that Home component can call to update word globally
  const updateWord = (word: string) => setWord(word);

  return (
    <div className="App">
      <header>
        <img src="Capture.PNG" alt=" something"></img>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home checkWord={updateWord}></Home>}></Route>
          <Route path="/result" element={<Result word={word}></Result>}></Route>
        </Routes>
      </BrowserRouter>
      <footer> Made with </footer>
    </div>
  );
}

export default App;
