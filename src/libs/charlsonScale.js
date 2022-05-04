export const charlsonQuestions = [
  {
    question: "Infarto del miocardio",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Insuficiencia cardiaca congestiva",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Enfermedad vascular periférica",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Enfermedad vascular cerebral (excepto hemiplejías)",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Demencia",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Enfermedad Pulmonar Crónica",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Enfermedad del tejido Conectivo",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Enfermedad ulcerosa",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Enfermedad hepática leve",
    answers: [
      {
        answer: "Si",
        value: 1,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Diabetes",
    answers: [
      {
        answer: "Diabetes (sin complicaciones)",
        value: 1,
      },
      {
        answer: "Diabetes con daño de organo blanco",
        value: 2,
      },
    ],
  },
  {
    question: "Hemiplejía",
    answers: [
      {
        answer: "Si",
        value: 2,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Enfermedad renal (moderada o grave)",
    answers: [
      {
        answer: "Si",
        value: 2,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Tumor solido secundario (no metastático)",
    answers: [
      {
        answer: "Si",
        value: 2,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Leucemia",
    answers: [
      {
        answer: "Si",
        value: 2,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Linfoma-Mieloma multiple",
    answers: [
      {
        answer: "Si",
        value: 2,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Enfermedad hepatica moderada o severa",
    answers: [
      {
        answer: "Si",
        value: 3,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Tumor sólido secundario metastático",
    answers: [
      {
        answer: "Si",
        value: 6,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "HIV",
    answers: [
      {
        answer: "Si",
        value: 6,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "Edad",
    answers: [
      {
        answer: "50-59 años",
        value: 1,
      },
      {
        answer: "60-69 años",
        value: 2,
      },
      {
        answer: "70-79 años",
        value: 3,
      },
      {
        answer: "80-89 años",
        value: 4,
      },
      {
        answer: "90-99 años",
        value: 5,
      },
    ],
  },
];
export const charlsonResults = {
  results: [
    {
      min: 0,
      max: 0,
      result: "Probabilidad de falleciemiento del paciente: 12%",
    },
    {
      min: 1,
      max: 2,
      result: "Probabilidad de falleciemiento del paciente: 26%",
    },

    {
      min: 3,
      max: 4,
      result: "Probabilidad de falleciemiento del paciente: 52%",
    },
    {
      min: 5,
      max: 100,
      result: "Probabilidad de falleciemiento del paciente: 52%",
    },
  ],
  titles: ["Resultado", "Probabilidad"],
};
