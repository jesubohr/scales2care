import { useState, useEffect } from "react";
import { ScaleScoreContext } from "../utils/context";
import { nameScales, scalesQuestions, scalesResults } from "../utils/scales";

import Title from "../components/Title";
import MainContent from "../components/MainContent";
import ScaleQuestion from "../components/ScaleQuestion";
import ScoreVerdict from "../components/ScoreVerdict";
import RegisterUser from "../components/RegisterUser";

export default function FraminghamScale () {
    const [option, setOption] = useState(undefined);
    const [dni, setDni] = useState(0);
    const [scores, setScores] = useState([]);

    const scaleIndex = 8;
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
    }, []);

    return (
        <MainContent className="relative px-10">
            <Title className="self-center">{ scaleName }</Title>
            <section className="flex flex-col items-center gap-y-10 w-full">
                { option === undefined &&
                    <article className="w-full max-w-3xl text-gray-800 dark:text-gray-200">
                        <p className="max-w-3xl text-xl font-medium">
                            Sexo
                        </p>
                        <ul className="flex gap-8 mt-3 w-fit">
                            <li className="mb-2 text-base sm:text-lg cursor-pointer">
                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sexo"
                                        value="0"
                                        onChange={ ({ target }) => setOption(Number(target.value)) }
                                        className="appearance-none w-4 h-4 mr-1
                                    rounded-full border-none
                                    ring-2 ring-gray-500
                                    ring-offset-2 ring-offset-white dark:ring-offset-[#001B2E]
                                    indeterminate:bg-gray-400/50
                                    checked:ring-med-blue checked:bg-med-blue cursor-pointer"
                                    />
                                    <span className="ml-2">Hombre</span>
                                </label>
                            </li>
                            <li className="mb-2 text-base sm:text-lg cursor-pointer">
                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="sexo"
                                        value="1"
                                        onChange={ ({ target }) => setOption(Number(target.value)) }
                                        className="appearance-none w-4 h-4 mr-1
                                    rounded-full border-none
                                    ring-2 ring-gray-500
                                    ring-offset-2 ring-offset-white dark:ring-offset-[#001B2E]
                                    indeterminate:bg-gray-400/50
                                    checked:ring-med-blue checked:bg-med-blue cursor-pointer"
                                    />
                                    <span className="ml-2">Mujer</span>
                                </label>
                            </li>
                        </ul>
                    </article>
                }
                <ScaleScoreContext.Provider value={ TotalScore }>
                    { /* @ts-ignore */ }
                    { option !== undefined && scaleQuestions[option].map(
                        (item, index) => (
                            <ScaleQuestion
                                key={ index }
                                index={ index }
                                question={ item.question }
                                answers={ item.answers }
                            />
                        ))
                    }
                </ScaleScoreContext.Provider>
            </section>
            { option !== undefined && dni
                ? <ScoreVerdict
                    dni={ dni }
                    scaleName={ scaleName }
                    scaleResults={ scaleResults[option] }
                    totalScore={ scores.reduce((acc, score) => acc + score.score, 0) }
                    scaleSphere={ "Biológica o Clínica" }
                />
                : <RegisterUser setDni={ setDni } />
            }
        </MainContent>
    );
}
