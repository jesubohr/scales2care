import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import ScaleQuestion from "../components/ScaleQuestion";
import ScoreVerdict from "../components/ScoreVerdict";
import { nameScales, scalesQuestions, scalesResults } from '../utils/scales';
import { ScaleScoreContext } from "../utils/context";

function Scale () {
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
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [scaleIndex]);

    return (
        <MainContent className="py-10 px-5 gx:items-start">
            <h2 className="self-center mb-7 text-center text-gray-800 dark:text-gray-300 text-4xl font-bold">
                { scaleName }
            </h2>
            <section className="flex flex-col gap-y-6 ml-20 max-w-[30rem] w-11/12">
                <ScaleScoreContext.Provider value={ TotalScore }>
                    { scaleQuestions.length !== 0 && scaleQuestions.map(({ question, answers }, index) => {
                        return (
                            <ScaleQuestion
                                key={ index }
                                index={ index }
                                question={ question }
                                answers={ answers }
                            />
                        );
                    }) }
                </ScaleScoreContext.Provider>
            </section>
            <ScoreVerdict
                scaleResults={ scaleResults }
                totalScore={ scores.reduce((acc, { score }) => acc + score, 0) }
            />
        </MainContent>
    );
}

export default Scale;
