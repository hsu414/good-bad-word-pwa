import './App.css';
import { Home } from './Components/Home';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Result } from './Components/result';
import { useState } from 'react';

function App() {
  let [word, setWord] = useState<string>();

  // the callback that Home component can call to update word globally
  const updateWord = (word: string) => setWord(word);

  return (
    <div className="App">
      <header>
        <img src="logo.png" alt=""></img>
      </header>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home checkWord={updateWord}></Home>}></Route>
          <Route path="/result" element={<Result word={word}></Result>}></Route>
        </Routes>
      </HashRouter>
      <footer> Made with </footer>
    </div>
  );
}

export default App;
