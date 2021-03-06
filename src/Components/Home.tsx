import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Home.css';

interface HomeProps {
  checkWord: (word: string) => void;
}

// one component is basically a function that return a template
export function Home(props: HomeProps) {
  let [enteredWord, setEnteredWord] = useState<string>('pussy');

  let navigate = useNavigate();

  const navigateToResult = () => {
    props.checkWord(enteredWord);
    navigate('/result');
  };

  const updateEnteredWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredWord(event.target.value);
  };
  return (
    <>
      <section>
        <h1>What is good bad words?</h1>
        <p>
          Swearing is normal and can even be benefitial for your health. Many of us might have common swear words in our daily language but we should stop to ask ourselves - Is
          this still okay? Good bad words is meant to be able to tell you if your favorite swear words could be inappropriate, and even better, to suggest you a better one to
          express your feelings 😉.
        </p>

        <h1>Do I really need this?</h1>

        <p>Maybe not but hey, what's wrong with checking if your favorite swear word could be hurt- or disrespectful to any group of people?</p>
      </section>
      <section className="flex-column">
        <h1>Enter your swear word here:</h1>
        <TextField onChange={updateEnteredWord} value={enteredWord} id="outlined-basic" label="Is it still ok?" variant="outlined" defaultValue="fuck" />
        <Button onClick={navigateToResult}>Submit</Button>
      </section>
    </>
  );
}
