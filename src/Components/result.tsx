import { Link } from 'react-router-dom';
import { isPropertySignature } from 'typescript';

interface ResultProps {
  word: string | undefined;
}

type Word = {
  text: string;
  isOkay: boolean;
  suggestion?: string;
  explanation?: string;
};

export function Result(prop: ResultProps) {
  const storedWords: Word[] = [
    { text: 'retarded', isOkay: false, suggestion: 'bonehead', explanation: 'it is ableistic' },
    { text: 'pussy', isOkay: false, suggestion: 'weakling', explanation: 'it is sexist' },
    { text: 'bonehead', isOkay: true },
    { text: 'ridiculous', isOkay: true },
  ];

  const wordFound = storedWords.find((word) => word.text === prop.word);

  const renderResult = () => {
    if (!wordFound) {
      return <p>Sorry, this word is not yet known to use. </p>;
    } else if (wordFound.isOkay) {
      return <p>Using {prop.word} is totally fine.</p>;
    } else {
      return (
        <p>
          Using {prop.word} is not so appropiate as {wordFound.explanation}. We suggest you to use {wordFound.suggestion} instead
        </p>
      );
    }
  };
  return (
    <>
      <h1>Results for {prop.word}</h1>
      {renderResult()}
      <Link to="/"> Back to main Pack</Link>
    </>
  );
}
