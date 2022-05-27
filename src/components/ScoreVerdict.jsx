import Icon from "./Icon";
import { addResult } from "../utils/api";

export default function ScoreVerdict({
  scaleResults,
  totalScore,
  dni,
  scaleName,
  scaleSphere,
}) {
  async function handleSave(e) {
    e.preventDefault();
    console.log(scaleSphere);
    const response = addResult({
      user_id: dni,
      name: scaleName,
      sphere: scaleSphere,
      total: totalScore,
    });
    if (response) {
      console.log("Guardado");
    } else {
      console.log("Error");
    }
  }

  return (
    Object.entries(scaleResults).length !== 0 && (
      <section
        className={
          "flex flex-col items-center " +
          "max-w-xl w-full " +
          "mt-12 px-5 py-10 " +
          "text-gray-800 dark:text-gray-200  " +
          "bg-white/90 dark:bg-[#001B2E]/90 " +
          "rounded-lg border-4 border-[#001B2E] border-dashed " +
          "dark:border-white"
        }
      >
        <p className="text-3xl text-center font-bold">
          Interpretación del puntaje
        </p>
        <p className="my-4 text-4xl text-center">{totalScore}</p>
        <p className="mb-10 text-2xl leading-none text-center font-medium">
          {scaleResults.titles[1]}
        </p>
        <div className="max-w-sm flex flex-col gap-4">
          {scaleResults.results.map(({ min, max, result }, index) => {
            return (
              <p
                key={index}
                className={
                  "flex items-center gap-2 text-lg" +
                  (min <= totalScore && totalScore <= max
                    ? " text-med-blue font-medium"
                    : "")
                }
              >
                {min - max == 0 ? min : `${min} - ${max}`}
                <Icon icon="arrow-right" />
                {result}
              </p>
            );
          })}
        </div>
        <button
          className="bg-med-blue hover:bg-med-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSave}
        >
          Guardar
        </button>
      </section>
    )
  );
}
