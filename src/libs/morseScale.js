export const morseQuestions = [
  {
    question: "CAÍDAS RECIENTES (Últimos 3 meses)",
    answers: [
      {
        answer: "Si",
        value: 25,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "DIAGNÓSTICO SECUNDARIO",
    answers: [
      {
        answer: "Si",
        value: 15,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "AYUDA PARA DEAMBULAR",
    answers: [
      {
        answer: "Reposo en cama. Asistencia de enfermería",
        value: 0,
      },
      {
        answer: "Bastón/Muletas/Andador",
        value: 15,
      },
      {
        answer: "Se apoya en los muebles",
        value: 30,
      },
    ],
  },
  {
    question: "VIA VENOSA",
    answers: [
      {
        answer: "Si",
        value: 20,
      },
      {
        answer: "No",
        value: 0,
      },
    ],
  },
  {
    question: "DEAMBULACION",
    answers: [
      {
        answer: "Normal/Inmovilizado/en reposo en cama",
        value: 0,
      },
      {
        answer: "Débil",
        value: 10,
      },
      {
        answer: "Alterada. Requiere asistencia",
        value: 20,
      },
    ],
  },
  {
    question: "CONCIENCIA/ESTADO MENTAL",
    answers: [
      {
        answer: "Consciente de sus limitaciones",
        value: 0,
      },
      {
        answer: "No consciente de sus limitaciones",
        value: 15,
      },
    ],
  },
];

export const morseResults = {
  results: [
    {
      min: 0,
      max: 25,
      result:
        "No se identificó Riesgo de caídas de acuerdo a la puntuación de la escala MORSE.",
    },
    {
      min: 25,
      max: 50,
      result:
        "Se identificó Bajo Riesgo de caídas de acuerdo a la puntuación de la escala MORSE.",
    },
    {
      min: 51,
      max: 100,
      result:
        "Se identificó Alto Riesgo de caídas de acuerdo a la puntuación de la escala MORSE.",
    },
  ],
  titles: ["Resultado", "Grado de Dependencia"],
};
