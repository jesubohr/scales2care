export const cageQuestions = [
  {
    question: "¿Ha sentido alguna vez que debe beber menos?",
    answers: [
      {
        answer: "Sí",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Le ha molestado que la gente le critique por su forma de beber?",
    answers: [
      {
        answer: "Sí",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "¿Alguna vez se ha sentido mal o culpable por su forma de beber?",
    answers: [
      {
        answer: "Sí",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question:
      "¿Alguna vez ha necesitado beber alcohol por la mañana para calmar los nervios o elimar molestias causadas por haber bebido la noche anterior?",
    answers: [
      {
        answer: "Sí",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
];

export const cageResults = {
  results: [
    {
      min: 0,
      max: 1,
      result:
        "Se identifica baja sospecha de alcoholismo (bebedor social) de acuerdo a la escala CAGE.",
    },
    {
      min: 2,
      max: 3,
      result:
        "Se identifica alta sospecha de alcoholismo de acuerdo a la escala CAGE.",
    },
    {
      min: 4,
      max: 4,
      result:
        "Se identifica indicio de alcoholismo patológico de acuerdo a al puntuación de la escala CAGE.",
    },
  ],
  titles: [
    "Resultado",
    "Identificación de existencia de transtorno por consumo de alcohol",
  ],
};
