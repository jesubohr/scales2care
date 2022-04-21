export default function ScoreVerdict ({ scaleResults, totalScore }) {
    return (
        <section className="flex flex-col justify-center 
            gx:fixed gx:right-[10%]
            max-w-[24rem] w-11/12 mt-20
            px-5 py-4
            text-gray-800 dark:text-gray-300 
            bg-white/90 dark:bg-[#001B2E]/90
            gx:rounded-lg gx:shadow-lg gx:dark:shadow-white/10
            ">
            <p className="text-3xl text-center font-bold">Interpretación del puntaje</p>
            <p className="my-4 text-4xl text-center text-medium">{ totalScore }</p>
            <div>
                { scaleResults.map(({ result, description }, index) => {
                    return (
                        <p key={ index } className="text-lg">
                            { result }
                            <span className="text-3xl align-sub leading-none"> 🠖 </span>
                            { description }
                        </p>
                    );
                }) }
            </div>
        </section>
    );
}
