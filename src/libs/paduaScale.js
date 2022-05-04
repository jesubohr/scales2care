export const paduaQuestions = [
  {
    question:
      "Cáncer activo (metástasis local o distante en quienes se ha realizado quimioterapia los últimos 6 meses)",
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
    question: "Tromboembolismo venoso (excepto superficial)",
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
    question: "Movilidad disminuida por al menos 3 días",
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
    question: "Condición trombofilica conocida",
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
    question: "Trauma o cirugía reciente (<1 mes) ",
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
    question: "Edad >70 años",
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
    question: "Falla respiratoria o cardiaca",
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
    question: "Infarto agudo de miocardio o ACV",
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
    question: "Infección aguda y/o enfermedad reumatológica",
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
    question: "Obesidad (IMC >30kg/m2)",
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
    question: "Tratamiento hormonal",
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
];

export const paduaResults = {
  results: [
    {
      min: 0,
      max: 3,
      result:
        "Se identificó bajo riesgo de tromboembolismo venoso según puntuación de la escala Padua",
    },
    {
      min: 4,
      max: 20,
      result:
        "Se identificó riesgo alto de tromboembolismo venoso según puntuación de la escala Padua",
    },
  ],
  titles: ["Resultado", "Riesgo"],
};
