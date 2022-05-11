import { ScaleScoreContext } from "../utils/context";

const getLetterItem = (index) => String.fromCharCode(65 + index);

export default function ScaleQuestion ({ index: qtIndex, question, answers }) {
    return (
        <article className="text-gray-800 dark:text-gray-300">
            <p className="mb-2 text-xl font-medium">{ getLetterItem(qtIndex) }. { question }</p>
            <ul className="w-fit">
                { answers.map(({ answer, value }, index) => (
                    <ScaleScoreContext.Consumer key={ index }>
                        { ({ setScaleScore }) => (
                            <li className="mb-2 text-base sm:text-lg cursor-pointer">
                                <label className="cursor-pointer" htmlFor={ `answer-${qtIndex + 1}-${index + 1}` }>
                                <input
                                    type="radio"
                                    className="appearance-none w-4 h-4 mr-2
                                    rounded-full border-none
                                    ring-2 ring-gray-500
                                    ring-offset-2 ring-offset-white dark:ring-offset-[#001B2E]
                                    indeterminate:bg-gray-400/50
                                    checked:ring-med-blue checked:bg-med-blue cursor-pointer"
                                    name={ `answer-${qtIndex + 1}` }
                                    id={ `answer-${qtIndex + 1}-${index + 1}` }
                                    value={ value }
                                    onClick={ ({ target }) => {
                                        setScaleScore({
                                            id: qtIndex,
                                            score: Number(target['value']),
                                        });
                                    } }
                                /> { value } - { answer }</label>
                            </li>
                        ) }
                    </ScaleScoreContext.Consumer>
                )) }
            </ul>
        </article>
    );
}
