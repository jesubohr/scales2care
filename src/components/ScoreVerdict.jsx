export default function ScoreVerdict ({ scaleResults, totalScore }) {
    return (
        (Object.entries(scaleResults).length !== 0) && (
            <section className="flex flex-col justify-center
            gx:fixed gx:right-[5%]
            max-w-[28rem] w-11/12
            mt-12 px-5 py-2
            text-gray-800 dark:text-gray-300 
            bg-white/90 dark:bg-[#001B2E]/90
            rounded-lg border-4 border-[#001B2E] gx:border-dashed
            dark:border-white
            ">
                <p className="text-3xl text-center font-bold">Interpretación del puntaje</p>
                <p className="my-4 text-4xl text-center">{ totalScore }</p>
                <p className="text-2xl leading-none text-center font-medium">{ scaleResults.titles[1] }</p>
                <div className="flex flex-col gap-1">
                    { scaleResults.results.map(({ min, max, result }, index) => {
                        return (
                            <p
                                key={ index }
                                className={ "text-lg leading-none" + (min <= totalScore && totalScore <= max ? " text-med-blue font-medium" : "") }
                            >
                                { min } - { max }
                                <span className="text-3xl align-sub leading-none"> 🠖 </span>
                                { result }
                            </p>
                        );
                    }) }
                </div>
            </section>
        )
    );
}
