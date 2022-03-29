const getLetterItem = (index) => String.fromCharCode(65 + index);

export default function ScaleQuestion ({ index: qtIndex, question, answers }) {
    return (
        <article className="text-gray-800 dark:text-gray-300">
            <p className="mb-2 text-xl font-medium">{ getLetterItem(qtIndex) }. { question }</p>
            <ul className="w-fit">
                { answers.map(({ answer, value }, index) => {
                    return (
                        <li key={ index } className="flex items-center gap-2 mb-2 text-lg cursor-pointer">
                            <input
                                type="radio"
                                className="
                                    appearance-none
                                    w-4 h-4
                                    rounded-full
                                    border-none
                                    ring-2 ring-gray-500
                                    ring-offset-2 ring-offset-white dark:ring-offset-[#001B2E]
                                    indeterminate:bg-gray-400/50
                                    checked:ring-med-blue checked:bg-med-blue
                                    cursor-pointer
                                "
                                tabIndex={ index + 1 }
                                name={ `answer-${qtIndex + 1}` }
                                id={ `answer-${index + 1}` }
                            />
                            <label className="cursor-pointer" htmlFor={ `answer-${index + 1}` }>{ value } = { answer }</label>
                        </li>
                    );
                }) }
            </ul>
        </article>
    );
}
