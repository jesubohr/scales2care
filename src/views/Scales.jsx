import MainContent from "../components/MainContent";
import { ScaleButton } from "../components/Buttons";
import Title from "../components/Title";
import { nameScales, scalesDescriptions } from "../utils/scales";

export default function Scales() {
  function alternateColor(index) {
    return index % 2 === 0 ? "border-med-sky" : "border-med-blue";
  }

  return (
    <MainContent>
      <Title>Lista de Escalas</Title>
      <section className="grid md:flex flex-wrap justify-center gap-5">
        {nameScales.map((name, index) => {
          return (
            <ScaleButton
              key={index}
              id={index}
              name={name}
              description={scalesDescriptions[index]}
              className={alternateColor(index)}
              alternateColor={alternateColor(index)}
            />
          );
        })}
      </section>
    </MainContent>
  );
}
