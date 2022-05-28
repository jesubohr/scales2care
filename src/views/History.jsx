import { useState } from "react";
import toast from "react-hot-toast";
import { Chart } from "react-google-charts";

import MainContent from "../components/MainContent";
import Title from "../components/Title";
import ResultTable from "../components/ResultTable";

import { getResults } from "../utils/api";

function History() {
  const [data, setData] = useState({
    data: [],
    names: [],
    spheres: [],
  });
  const [input, setInput] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await getResults({ dni: input });
    if (response === false) {
      toast.error("No se ha podido obtener los resultados del paciente");
    } else if (response.length === 0) {
      toast.error("El paciente no tiene resultados registrados");
    } else {
      setData(response);
    }
  }

  return (
    <MainContent>
      <Title>Histórico</Title>
      <div className="w-full max-w-xs">
        <form
          className="bg-white dark:bg-med-blue/40 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
              htmlFor="dni"
            >
              Cédula
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dni"
              type="text"
              placeholder="Cédula"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Mostrar
            </button>
          </div>
        </form>
      </div>

      {data.data.length > 0 ? (
        <div className="overflow-x-scroll w-full md:overflow-hidden">
          <ResultTable rows={data.data} />
        </div>
      ) : null}

      <div className="flex flex-wrap gap-20">
        {data.names.length > 0 ? (
          <div className="mt-5 border-2">
            <Chart
              chartType="PieChart"
              data={data.names}
              options={{ title: "Frecuencia de uso por escala", is3D: true }}
              width={"400px"}
              height={"400px"}
            />
          </div>
        ) : null}

        {data.spheres.length > 0 ? (
          <div className="mt-5 border-2">
            <Chart
              chartType="ComboChart"
              data={data.spheres}
              options={{
                title: "Frecuencia de uso por categoría",
                vAxis: { title: "Frecuencia" },
                hAxis: { title: "Categoría" },
                seriesType: "bars",
                series: { 5: { type: "line" } },
              }}
              width={"400px"}
              height={"400px"}
            />
          </div>
        ) : null}
      </div>
    </MainContent>
  );
}

export default History;
