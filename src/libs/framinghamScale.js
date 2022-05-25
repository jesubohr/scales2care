export const framinghamQuestions = [
  {
    question: "Sexo",
    answers: [
      {
        answer: "Hombre.",
        value: "H",
      },
      {
        answer: "Mujer.",
        value: "M",
      },
    ],
  },
  {
    question: "Hipertrofia ventricular izquierda.",
    answers: [
      {
        answer: "Sí.",
        value: 2,
      },
      {
        answer: "No.",
        value: 0,
      },
    ],
  },
  {
    question: "Edad hombre.",
    answers: [
      {
        answer: "30 - 34.",
        value: -1,
      },
      {
        answer: "35 -39.",
        value: 0,
      },
      {
        answer: "40 - 44.",
        value: 1,
      },
      {
        answer: "45 - 49.",
        value: 2,
      },
      {
        answer: "50 - 54.",
        value: 3,
      },
      {
        answer: "55 - 59.",
        value: 4,
      },
      {
        answer: "60 - 64.",
        value: 5,
      },
      {
        answer: "65 - 69.",
        value: 6,
      },
      {
        answer: "70 - 74.",
        value: 7,
      },
    ],
  },
  {
    question: "Edad mujer.",
    answers: [
      {
        answer: "30 - 34.",
        value: -9,
      },
      {
        answer: "35 -39.",
        value: -4,
      },
      {
        answer: "40 - 44.",
        value: 0,
      },
      {
        answer: "45 - 49.",
        value: 3,
      },
      {
        answer: "50 - 54.",
        value: 6,
      },
      {
        answer: "55 - 59.",
        value: 7,
      },
      {
        answer: "60 - 64.",
        value: 8,
      },
      {
        answer: "65 - 69.",
        value: 8,
      },
      {
        answer: "70 - 74.",
        value: 8,
      },
    ],
  },
  {
    question: "Diabetes hombre.",
    answers: [
      {
        answer: "Sí.",
        value: 2,
      },
      {
        answer: "No.",
        value: 0,
      },
    ],
  },
  {
    question: "Diabetes mujeres.",
    answers: [
      {
        answer: "Sí.",
        value: 4,
      },
      {
        answer: "No.",
        value: 0,
      },
    ],
  },
  {
    question: "Fumador(a).",
    answers: [
      {
        answer: "Sí.",
        value: 2,
      },
      {
        answer: "No.",
        value: 0,
      },
    ],
  },
  {
    question: "Colesterol total hombre.",
    answers: [
      {
        answer: "< 160.",
        value: -3,
      },
      {
        answer: "160 - 190.",
        value: 0,
      },
      {
        answer: "200 - 239.",
        value: 1,
      },
      {
        answer: "240 - 279.",
        value: 2,
      },
      {
        answer: "> 280.",
        value: 3,
      },
    ],
  },
  {
    question: "Colesterol total mujer.",
    answers: [
      {
        answer: "< 160.",
        value: -2,
      },
      {
        answer: "160 - 190.",
        value: 0,
      },
      {
        answer: "200 - 239.",
        value: 1,
      },
      {
        answer: "240 - 279.",
        value: 1,
      },
      {
        answer: "> 280.",
        value: 3,
      },
    ],
  },
  {
    question: "HDL Colesterol hombre.",
    answers: [
      {
        answer: "< 35.",
        value: 2,
      },
      {
        answer: "35 - 44.",
        value: 1,
      },
      {
        answer: "45 - 49.",
        value: 0,
      },
      {
        answer: "50 - 59.",
        value: 0,
      },
      {
        answer: "> 60.",
        value: -2,
      },
    ],
  },
  {
    question: "HDL Colesterol mujer.",
    answers: [
      {
        answer: "< 35.",
        value: 5,
      },
      {
        answer: "35 - 44.",
        value: 2,
      },
      {
        answer: "45 - 49.",
        value: 1,
      },
      {
        answer: "50 - 59.",
        value: 0,
      },
      {
        answer: "> 60.",
        value: -3,
      },
    ],
  },
  {
    question: "Presión arterial hombre.",
    answers: [
      {
        answer: "< = 120/80 mmHg.",
        value: 0,
      },
      {
        answer: "120-129/80-84 mmHg.",
        value: 0,
      },
      {
        answer: "130-139/85-89 mmHg.",
        value: 1,
      },
      {
        answer: "140-159/90-99 mmHg.",
        value: 2,
      },
      {
        answer: ">= 160/100 mmHg.",
        value: 3,
      },
    ],
  },
  {
    question: "Presión arterial mujer.",
    answers: [
      {
        answer: "< = 120/80 mmHg.",
        value: -3,
      },
      {
        answer: "120-129/80-84 mmHg.",
        value: 0,
      },
      {
        answer: "130-139/85-89 mmHg.",
        value: 0,
      },
      {
        answer: "140-159/90-99 mmHg.",
        value: 2,
      },
      {
        answer: ">= 160/100 mmHg.",
        value: 3,
      },
    ],
  },
];

export const framinghamResults = {
  results: [
    {
      min: -2,
      max: 2,
      result: "Bajo riesgo.",
    },
    {
      min: 3,
      max: 5,
      result: "Riesgo ligero.",
    },
    {
      min: 6,
      max: 8,
      result: "Riesgo moderado.",
    },
    {
      min: 9,
      max: 12,
      result: "Riesgo alto.",
    },
    {
      min: 13,
      max: 19,
      result: "Riesgo muy alto.",
    },
  ],
  titles: ["Resultado", "Riesgo coronario a 10 años en paciente masculino."],
  "interpretations mujer": {
    results: [
      {
        min: -2,
        max: 5,
        result: "Riesgo bajo.",
      },
      {
        min: 6,
        max: 9,
        result: "Riesgo ligero.",
      },
      {
        min: 10,
        max: 14,
        result: "Riesgo moderado.",
      },
      {
        min: 15,
        max: 24,
        result: "Riesgo alto.",
      },
      {
        min: 19,
        max: 23,
        result: "Sin riesgo de desarrollar úlceras por presión.",
      },
    ],
    titles: ["Resultado", "Riesgo coronario a 10 años."],
  },
};
