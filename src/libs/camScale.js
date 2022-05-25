export const camQuestions = [
  {
    "Comienzo agudo (A)": [
      {
        question:
          "¿Existe evidencia de un cambio agudo en el estado mental en relación con el estado basal?",
        answers: [
          {
            answer: "Sí",
            value: 3,
          },
          {
            answer: "No",
            value: 0,
          },
        ],
      },
      {
        question:
          "¿Ha fluctuado el comportamiento (anormal) en las últimas 24 horas?",
        answers: [
          {
            answer: "Sí",
            value: 3,
          },
          {
            answer: "No",
            value: 0,
          },
        ],
      },
    ],
    "Inatención (B)": [
      {
        question:
          "¿Tiene el paciente la capacidad de focalizar su atención a un estimulo visual externo?",
        answers: [
          {
            answer: "Sí",
            value: 0,
          },
          {
            answer: "No",
            value: 7,
          },
        ],
      },
      {
        question:
          "¿Tiene el paciente la capacidad de focalizar su atención a un estimulo auditivo externo?",
        answers: [
          {
            answer: "Sí",
            value: 0,
          },
          {
            answer: "No",
            value: 7,
          },
        ],
      },
    ],
    "Pensamiento desorganizado (C)": [
      {
        question: "¿Podría flotar una piedra en el agua?",
        answers: [
          {
            answer: "Sí",
            value: 9,
          },
          {
            answer: "No",
            value: 0,
          },
        ],
      },
      {
        question: "¿Existen peces en el mar?",
        answers: [
          {
            answer: "Si",
            value: 0,
          },
          {
            answer: "No",
            value: 9,
          },
        ],
      },
      {
        question: "¿Pesa más 1 libra que 2 libras?",
        answers: [
          {
            answer: "Si",
            value: 9,
          },
          {
            answer: "No",
            value: 0,
          },
        ],
      },
      {
        question: "¿Se puede usar un martillo para pegarle a un clavo?",
        answers: [
          {
            answer: "Si",
            value: 0,
          },
          {
            answer: "No",
            value: 9,
          },
        ],
      },
    ],
    "Alteración del nivel de conciencia (D)": [
      {
        question: "¿Está alterado el nivel de conciencia del paciente?",
        answers: [
          {
            answer: "Si",
            value: 100,
          },
          {
            answer: "No",
            value: 0,
          },
        ],
      },
    ],
  },
];

export const camResults = {
  results: [
    {
      min: 28,
      max: 56,
      result: "Se identificó riesgo alto de Delirium",
    },
    {
      min: 0,
      max: 9,
      result: "No se identificó riesgo de Delirium",
    },
    {
      min: 110,
      max: 120,
      result: "Se identificó riesgo alto de Delirium",
    },
    {
      min: 128,
      max: 156,
      result: "Se identificó riesgo alto de Delirium",
    },
  ],
  titles: ["Resultado", "Riesgo de Delirium"],
};
