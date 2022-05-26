import { useState } from "react";
import { addUser } from "../utils/api";
export default function RegisterUser({ setDni }) {
  const [input, setInput] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await addUser({ dni: input });
    if (response !== "" && response !== undefined) {
      setDni(response);
      setInput("");
    }
  }

  function onTypeDni(e) {
    setInput(e.target.value);
  }

  return (
    <section
      className={
        "flex flex-col items-center gap-9 " +
        "max-w-3xl w-full " +
        "mt-12 px-5 py-10 " +
        "text-gray-800 dark:text-gray-200  " +
        "bg-white/90 dark:bg-[#001B2E]/90 " +
        "rounded-lg border-4 border-[#001B2E] border-dashed " +
        "dark:border-white"
      }
    >
      <p className="text-3xl text-center font-bold">Datos del Paciente</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-800 dark:text-gray-200 text-sm font-bold mb-2">
            DNI
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="DNI"
            onChange={onTypeDni}
            value={input}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-med-blue hover:bg-med-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Añadir
          </button>
        </div>
      </form>
    </section>
  );
}
