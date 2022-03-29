import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import ScaleQuestion from "../components/ScaleQuestion";
import { nameScales, scalesQuestions } from '../utils/scales';

function Scale () {
    const { scaleId } = useParams();
    const scaleIndex = Number(scaleId) - 1;
    const scaleName = nameScales[scaleIndex];
    const scaleQuestions = scalesQuestions[scaleIndex];
    return (
        <MainContent className="py-10 px-5">
            <h2 className="mb-7 text-center text-gray-800 dark:text-gray-300 text-4xl font-bold">
                { scaleName }
            </h2>
            <section className="flex flex-col gap-y-6 max-w-[34rem] w-11/12">
                { scaleQuestions.questions.map(({ question, answers }, index) => {
                    return (
                        <ScaleQuestion
                            key={ index }
                            index={ index }
                            question={ question }
                            answers={ answers }
                        />
                    );
                }) }
            </section>
        </MainContent>
    );
}

export default Scale;
