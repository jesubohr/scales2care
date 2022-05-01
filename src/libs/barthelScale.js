export const barthelQuestions = [
  {
    question: "Comer",
    answers: [
      {
        answer: "Puede comer de forma independiente",
        value: 10,
      },
      {
        answer: "Necesita ayuda para comer.",
        value: 5,
      },
      {
        answer: "Dependiente. Utiliza sonda.",
        value: 0,
      },
    ],
  },
  {
    question: "Lavarse",
    answers: [
      {
        answer: "Entra y sale solo del baño y ejecuta las acciones requeridas.",
        value: 5,
      },
      {
        answer: "Dependiente.",
        value: 0,
      },
    ],
  },
  {
    question: "Vestirse",
    answers: [
      {
        answer:
          "Capaz de ponerse y quitarse la ropa, abotonarse o atarse los zapatos.",
        value: 10,
      },
      {
        answer: "Necesita ayuda.",
        value: 5,
      },
      {
        answer: "Dependiente.",
        value: 0,
      },
    ],
  },
  {
    question: "Arreglarse",
    answers: [
      {
        answer:
          "Independiente para lavarse la cara, las manos, peinarse, afeitarse o maquillarse.",
        value: 5,
      },
      {
        answer: "Dependiente.",
        value: 0,
      },
    ],
  },
  {
    question: "Deposiciones",
    answers: [
      {
        answer: "Continencia normal.",
        value: 10,
      },
      {
        answer:
          "Ocasionalmente algún episodio de incontinencia o necesita ayuda para administrarse supositorios.",
        value: 5,
      },
      {
        answer: "Incontinencia",
        value: 0,
      },
    ],
  },
  {
    question: "Micción",
    answers: [
      {
        answer:
          "Continencia normal o es capaz de cuidarse la sonda si tiene una puesta.",
        value: 10,
      },
      {
        answer:
          "Un episodio diario como máximo de incontinencia, o necesita ayuda para cuidar de la sonda.",
        value: 5,
      },
      {
        answer: "Incontinencia",
        value: 0,
      },
    ],
  },
  {
    question: "Usar el wc",
    answers: [
      {
        answer:
          "Independiente para ir al cuarto de aseo, quitarse y ponerse la ropa, y limpiarse.",
        value: 10,
      },
      {
        answer: "Necesita ayuda para ir al retrete, pero se limpia solo.",
        value: 5,
      },
      {
        answer: "Dependiente.",
        value: 0,
      },
    ],
  },
  {
    question: "Transferencias",
    answers: [
      {
        answer: "Independiente para ir del sillón a la cama.",
        value: 15,
      },
      {
        answer: "Mínima ayuda física o supervisión para hacerlo.",
        value: 10,
      },
      {
        answer:
          "Necesita gran ayuda, pero es capaz de mantenerse sentado solo.",
        value: 5,
      },
      {
        answer: "Dependiente.",
        value: 0,
      },
    ],
  },
  {
    question: "Deambulación",
    answers: [
      {
        answer: "Independiente, camina solo (puede utilizar bastón) 50 metros.",
        value: 15,
      },
      {
        answer:
          "Necesita ayuda física (de un tercero o andador) o supervisión para caminar 50 metros.",
        value: 10,
      },
      {
        answer: "Independiente en silla de ruedas sin ayuda.",
        value: 5,
      },
      {
        answer: "Dependiente.",
        value: 0,
      },
    ],
  },
  {
    question: "Subir/bajar escaleras",
    answers: [
      {
        answer: "Independiente para bajar y subir escaleras.",
        value: 10,
      },
      {
        answer: "Necesita ayuda física o supervisión para hacerlo.",
        value: 5,
      },
      {
        answer: "Dependiente.",
        value: 0,
      },
    ],
  },
];

export const barthelResults = {
  results: [
    {
      min: 0,
      max: 15,
      result: "Total",
    },
    {
      min: 20,
      max: 35,
      result: "Grave o Severa",
    },
    {
      min: 40,
      max: 55,
      result: "Moderada",
    },
    {
      min: 60,
      max: 95,
      result: "Leve",
    },
    {
      min: 96,
      max: 100,
      result: "Independiente",
    },
  ],
  titles: ["Resultado", "Grado de Dependencia"],
};
