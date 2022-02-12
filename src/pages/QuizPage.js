import React from 'react';
import { useSelector } from 'react-redux';

const QuizPage = () => {
  const possibleCards = useSelector((state) => state.colorsFilter);
  const questionSelector = Math.floor(Math.random() * 3);
  const questionType = (questionSelector) => {
    switch (questionSelector) {
      case 0:
        return { question: 'Who is the artist responsible for', possibleAnswer: 'artist_title' };
      case 1:
        return { question: 'What is the place of origin of', possibleAnswer: 'place_of_origin' };
      case 2:
        return { question: 'What is the date of', possibleAnswer: 'date_display' };
      default:
        return 'Something went wronggg';
    }
  };
  const currentCard = possibleCards.array[Math.floor(Math.random() * possibleCards.array.length)];
  const wrongOptionOne = possibleCards.array[
    Math.floor(Math.random() * possibleCards.array.length)];
  const wrongOptionTwo = possibleCards.array[
    Math.floor(Math.random() * possibleCards.array.length)];
  const selectTest = questionType(questionSelector).possibleAnswer;

  // TODO: const checkAnswer = () => {};
  return (
    <section className="text-4XL mx-auto mt-auto h-52 w-full p-20 pt-20 text-center text-white">
      <h1 className="font-Work text-3xl font-bold">Take a Quiz</h1>
      <p className="py-10 text-xl">
        {questionType(questionSelector).question}
        {' '}
        <span className=" text-gray-300 font-bold">{currentCard.title}</span>
        ?
      </p>
      <div className="flex-col">
        <button type="button" className="border rounded p-3 my-3 mx-6">
          A.-
          {' '}
          <span id="A">{wrongOptionOne[selectTest]}</span>
        </button>
        <button type="button" className="border rounded p-3 my-3 mx-6">
          B.-
          {' '}
          <span id="B">{wrongOptionTwo[selectTest]}</span>
        </button>
        <button type="button" className="border rounded p-3 my-3 mx-6">
          C.-
          {' '}
          <span id="C">{currentCard[selectTest]}</span>
        </button>
      </div>
    </section>
  );
};

export default QuizPage;
