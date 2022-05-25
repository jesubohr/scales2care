import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import ScaleQuestion from "../components/ScaleQuestion";
import ScoreVerdict from "../components/ScoreVerdict";
import { nameScales, scalesQuestions, scalesResults } from "../utils/scales";
import { ScaleScoreContext } from "../utils/context";

function Scale() {
  const [scores, setScores] = useState([]);
  const { scaleId } = useParams();

  const scaleIndex = Number(scaleId) - 1;
  const scaleName = nameScales[scaleIndex];

  const scaleQuestions = scalesQuestions[scaleIndex] ?? [];
  const scaleResults = scalesResults[scaleIndex] ?? {};
  console.log(scaleQuestions);
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
      <h2 className="self-center mb-7 text-center text-gray-800 dark:text-gray-200 text-4xl font-bold">
        {scaleName}
      </h2>
      <section className="flex flex-col items-center gap-y-10 w-full">
        <ScaleScoreContext.Provider value={TotalScore}>
          {scaleQuestions.length !== 0 &&
            scaleQuestions.map(
              ({ question, answers, instruction, example }, index) => {
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
            )}
        </ScaleScoreContext.Provider>
      </section>
      <ScoreVerdict
        scaleResults={scaleResults}
        totalScore={scores.reduce((acc, { score }) => acc + score, 0)}
      />
    </MainContent>
  );
}

export default Scale;
