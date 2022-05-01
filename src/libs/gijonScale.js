export const gijonQuestions = [
  {
    question: "SITUACIÓN FAMILIAR",
    answers: [
      {
        answer: "Vive con familia sin dependencia físico/psíquica.",
        value: 1,
      },
      {
        answer: "Vive con cónyuge de similar edad.",
        value: 2,
      },
      {
        answer:
          "Vive con familia y/o cónyuge y presenta algún grado de dependencia.",
        value: 3,
      },
      {
        answer: "Vive solo y tiene hijos próximos.",
        value: 4,
      },
      {
        answer: "Vive solo y carece de hijos o viven alejados",
        value: 5,
      },
    ],
  },
  {
    question: "SITUACION ECONOMICA",
    answers: [
      {
        answer: "Más de 1,5 veces el salario mínimo",
        value: 1,
      },
      {
        answer:
          "Desde 1,5 veces el salario mínimo hasta el salario mínimo exclusive.",
        value: 2,
      },
      {
        answer: "Desde el salario mínimo a pensión mínima contributiva.",
        value: 3,
      },
      {
        answer: " L.I.S.M.I. - F.A.S. - Pensión no contributiva.",
        value: 4,
      },
      {
        answer: "Sin ingresos o inferiores al apartado anterior",
        value: 5,
      },
    ],
  },
  {
    question: "VIVIENDA",
    answers: [
      {
        answer: "Adecuada a necesidades",
        value: 1,
      },
      {
        answer:
          "Barreras arquitectónicas en la vivienda o portal de la casa (peldaños, puertas, estrechas, baños..)",
        value: 2,
      },
      {
        answer:
          "Humedades, mala higiene, equipamiento inadecuado (baño incompleto, ausencia de agua scaliente, calefacción).",
        value: 3,
      },
      {
        answer: "Ausencia ascensor, teléfono.",
        value: 4,
      },
      {
        answer:
          "Vivienda inadecuada (chabolas, vivienda declarada en ruina, ausencia de equipamientos mínimos).",
        value: 5,
      },
    ],
  },
  {
    question: "RELACIONES SOCIALES",
    answers: [
      {
        answer: "Relaciones sociales",
        value: 1,
      },
      {
        answer: "Relación social sólo con familia y vecinos",
        value: 2,
      },
      {
        answer: "Relación social sólo con familia o vecinos",
        value: 3,
      },
      {
        answer: "No sale del domicilio, recibe visitas.",
        value: 4,
      },
      {
        answer: "No sale y no recibe visitas.",
        value: 5,
      },
    ],
  },
  {
    question: "APOYOS DE LA RED SOCIAL",
    answers: [
      {
        answer: "Con apoyo familiar o vecinal.",
        value: 1,
      },
      {
        answer: "Voluntariado social, ayuda domiciliaria.",
        value: 2,
      },
      {
        answer: "No tiene apoyo.",
        value: 3,
      },
      {
        answer: "Pendiente de ingreso en Residencia Geriátrica.",
        value: 4,
      },
      {
        answer: "Tiene cuidados permanentes.",
        value: 5,
      },
    ],
  },
];

export const gijonResults = {
  results: [
    {
      min: 5,
      max: 9,
      result: "Paciente con buena/aceptable situación social",
    },
    {
      min: 10,
      max: 14,
      result: "Paciente con riesgo social",
    },
    {
      min: 15,
      max: 30,
      result: "Paciente con riesgo social",
    },
  ],
  titles: ["Resultado", "Grado de Dependencia"],
};
