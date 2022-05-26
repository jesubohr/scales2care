export const bradenQuestions = [
  {
    question: "Percepción sensorial",
    answers: [
      {
        answer: "Limitado completamente.",
        value: 1,
      },
      {
        answer: "Muy limitado.",
        value: 2,
      },
      {
        answer: "Limitado levemente.",
        value: 3,
      },
      {
        answer: "Sin impedimento.",
        value: 4,
      },
    ],
  },
  {
    question: "Humedad de la piel",
    answers: [
      {
        answer: "Constantemente húmeda.",
        value: 1,
      },
      {
        answer: "Muy húmeda.",
        value: 2,
      },
      {
        answer: "Ocasionalmente húmeda.",
        value: 3,
      },
      {
        answer: "Raramente húmeda.",
        value: 4,
      },
    ],
  },
  {
    question: "Grado de actividad física",
    answers: [
      {
        answer: "Confinado a la cama.",
        value: 1,
      },
      {
        answer: "Confinado a la silla.",
        value: 2,
      },
      {
        answer: "Ocasionalmente camina.",
        value: 3,
      },
      {
        answer: "Camina frecuentemente.",
        value: 4,
      },
    ],
  },
  {
    question: "Control de la posición corporal",
    answers: [
      {
        answer: "Completamente inmóvil.",
        value: 1,
      },
      {
        answer: "Muy limitada.",
        value: 2,
      },
      {
        answer: "Limitada levemente.",
        value: 3,
      },
      {
        answer: "Sin limitaciones.",
        value: 4,
      },
    ],
  },
  {
    question: "Nutrición",
    answers: [
      {
        answer: "Completamente inadecuada.",
        value: 1,
      },
      {
        answer: "Probablemente inadecuada.",
        value: 2,
      },
      {
        answer: "Adecuada.",
        value: 3,
      },
      {
        answer: "Excelente.",
        value: 4,
      },
    ],
  },
  {
    question: "Fricción y rose",
    answers: [
      {
        answer: "Presente.",
        value: 1,
      },
      {
        answer: "Potencialmente presente.",
        value: 2,
      },
      {
        answer: "Ausente.",
        value: 3,
      },
    ],
  },
];

export const bradenResults = {
  results: [
    {
      min: 0,
      max: 9,
      result: "Riesgo muy alto de desarrollar úlceras por presión.",
    },
    {
      min: 10,
      max: 12,
      result: "Riesgo alto de desarrollar úlceras por presión.",
    },
    {
      min: 13,
      max: 14,
      result: "Riesgo moderado de desarrollar úlceras por presión.",
    },
    {
      min: 15,
      max: 18,
      result: "Bajo riesgo de desarrollar úlceras por presión.",
    },
    {
      min: 19,
      max: 23,
      result: "Sin riesgo de desarrollar úlceras por presión.",
    },
  ],
  titles: ["Resultado", "Riesgo de desarrollar úlceras por presión."],
};
