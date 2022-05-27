import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import ScaleQuestion from "../components/ScaleQuestion";
import ScoreVerdict from "../components/ScoreVerdict";

import Title from "../components/Title";

import RegisterUser from "../components/RegisterUser";
import {
  nameScales,
  scalesQuestions,
  scalesResults,
  categoryPerScale,
} from "../utils/scales";

import { ScaleScoreContext } from "../utils/context";

function GroupedScale({ index, scaleQuestions, group, questions }) {
  let base = index;
  const before = scaleQuestions[index - 1];
  if (index === 1) {
    base = index - 1 + before.questions.length;
  } else if (index === scaleQuestions.length - 1) {
    base = index + before.questions.length + 1;
  } else if (index > 0) {
    base = index + before.questions.length;
  }
  return (
    <div className="w-full max-w-3xl text-gray-800 dark:text-gray-200">
      <h3 className="max-w-3xl text-xl font-bold mb-3 w-full text-center">
        {group}
      </h3>
      {questions.map(({ question, answers, instruction, example }, index2) => {
        console.log(base + index2);
        return (
          <div className="w-full max-w-3xl text-gray-800 dark:text-gray-200">
            {instruction ? <p className="mb-2">{instruction}</p> : null}
            {example ? <p className="mb-5">{example}</p> : null}
            <ScaleQuestion
              key={base + index2}
              index={base + index2}
              question={question}
              answers={answers}
            />
          </div>
        );
      })}
    </div>
  );
}

function UngroupedScale({ index, question, answers, instruction, example }) {
  return (
    <div className="w-full max-w-3xl text-gray-800 dark:text-gray-200">
      {instruction ? <p className="mb-2">{instruction}</p> : null}
      {example ? <p className="mb-5">{example}</p> : null}
      <ScaleQuestion
        key={index}
        index={index}
        question={question}
        answers={answers}
      />
    </div>
  );
}

function Scale() {
  const [dni, setDni] = useState(undefined);
  const [scores, setScores] = useState([]);

  const { scaleId } = useParams();

  const scaleIndex = Number(scaleId) - 1;
  const scaleName = nameScales[scaleIndex];

  const scaleQuestions = scalesQuestions[scaleIndex] ?? [];
  const scaleResults = scalesResults[scaleIndex] ?? {};

  const TotalScore = {
    setScaleScore: (qScore) => {
      const filterScores = scores.filter(({ id }) => id !== qScore.id);
      setScores([...filterScores, qScore]);
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scaleIndex]);

  return (
    <MainContent className="relative px-10">
      <Title className="self-center">{scaleName}</Title>
      <section className="flex flex-col items-center gap-y-10 w-full">
        <ScaleScoreContext.Provider value={TotalScore}>
          {scaleQuestions.length !== 0 &&
            scaleQuestions.map(
              (
                { question, answers, instruction, example, group, questions },
                index
              ) => {
                console.log(TotalScore);
                if (!group) {
                  return (
                    <UngroupedScale
                      index={index}
                      question={question}
                      answers={answers}
                      instruction={instruction}
                      example={example}
                    />
                  );
                } else {
                  return (
                    <GroupedScale
                      index={index}
                      scaleQuestions={scaleQuestions}
                      group={group}
                      questions={questions}
                    />
                  );
                }
              }
            )}
        </ScaleScoreContext.Provider>
      </section>
      {dni ? (
        <ScoreVerdict
          scaleResults={scaleResults}
          totalScore={scores.reduce((acc, { score }) => acc + score, 0)}
          dni={dni}
          scaleName={scaleName}
          scaleSphere={
            categoryPerScale.find((item) => item.scaleId === scaleIndex)
              ?.category ?? "No definido"
          }
        />
      ) : (
        <RegisterUser setDni={setDni} />
      )}
    </MainContent>
  );
}

export default Scale;
