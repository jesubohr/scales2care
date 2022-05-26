export const miniMentalQuestions = [
  {
    question: "¿En qué año estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué estación estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué día estamos (Fecha)?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué mes estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué día de la semana estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué hospital (o lugar) estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué piso (Planta, sala o servicio) estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué pueblo/ciudad estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué provincia/departamento estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué país (Nación o autonomía) estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    question: "¿En qué estación estamos?",
    answers: [
      {
        answer: "Respondió correctamente",
        value: 1,
      },
      {
        answer: "Respondió de forma incorrecta",
        value: 0,
      },
    ],
  },
  {
    instruction:
      "A continuación, el evaluador menciona al px 3 objetos diferentes, luego se le pide al px que repita los nombres de los objetos mencionados.",
    example: "Por ejemplo: Balón, bandera y arbol.",
    question: "¿Repitió correctamente?",
    answers: [
      {
        answer: "No repitió correctamente",
        value: 0,
      },
      {
        answer: "Repitió correctamente un objeto",
        value: 1,
      },
      {
        answer: "Repitió correctamente dos objetos",
        value: 2,
      },
      {
        answer: "Repitió correctamente tres objetos",
        value: 3,
      },
    ],
  },

  {
    instruction:
      "El evaluador debe indicar al px que realice 5 sustraciones consecutivas. En caso de que el px no pueda realizar la operación, se le indica que deletree la palabra MUNDO al revés.",
    example: "Por ejemplo: Se tienen 30 manzanas y se debe restar de 3 en 3.",
    question: "Realizó correctamente:",
    answers: [
      {
        answer: "Ninguna acción",
        value: 0,
      },
      {
        answer: "Una acción (sustración o letra O)",
        value: 1,
      },
      {
        answer: "Dos acciones (sustracciones o letras OD)",
        value: 2,
      },
      {
        answer: "Tres acciones (sustracciones o letras ODN)",
        value: 3,
      },
      {
        answer: "Cuatro acciones (sustracciones o letras ODNU)",
        value: 4,
      },
      {
        answer: "Cinco acciones (sustracciones o letras ODNUM)",
        value: 5,
      },
    ],
  },
  {
    question: "¿Recuerda los 3 objetos mencionados?",
    answers: [
      {
        answer: "No recuerda nigún objeto",
        value: 0,
      },
      {
        answer: "Recuerda 1 objeto",
        value: 1,
      },
      {
        answer: "Recuerda 2 objetos",
        value: 2,
      },
      {
        answer: "Recuerda 3 objetos",
        value: 3,
      },
    ],
  },

  {
    instruction:
      "El evaluador debe mostrar 2 objetos con el fin de que el px los reconozca y nombre correctamente.",
    example: "Por ejemplo: Mostrar un reloj y un lapiz.",
    question: "¿Reconoció y nombró correctamente?",
    answers: [
      {
        answer: "No reconoció correctamente",
        value: 0,
      },
      {
        answer: "Reconoció y nombró correctamente un objeto",
        value: 1,
      },
      {
        answer: "Reconoció y nombró correctamente dos objetos",
        value: 2,
      },
    ],
  },

  {
    instruction:
      "El evaluador debe decir 1 frase con el fin de que el px la repita.",
    example: "Por ejemplo: En un trigal habían 5 perros.",
    question: "¿Repitió correctamente?",
    answers: [
      {
        answer: "No repitió correctamente",
        value: 0,
      },
      {
        answer: "Repitió correctamente la frase",
        value: 1,
      },
    ],
  },

  {
    instruction:
      "El evaluador debe dar una orden (con 3 acciones) al px y este debe seguirla.",
    example:
      "Por ejemplo: Tome un papel con la mano derecha, doblelo a la mitad y coloque el papel en el suelo (Tener en cuenta que estas son 3 instrucciónes).",

    question: "Realizó correctamente",
    answers: [
      {
        answer: "Ninguna acción",
        value: 0,
      },
      {
        answer: "Una acción (orden)",
        value: 1,
      },
      {
        answer: "Dos acciones (ordenes)",
        value: 2,
      },
      {
        answer: "Tres acciones (ordenes)",
        value: 3,
      },
    ],
  },

  {
    instruction:
      "El evaluador debe dar al px algo para escribir una frase con sujeto y predicado.",
    question: "¿Escribió correctamente la frase?",
    answers: [
      {
        answer: "Sí",
        value: 0,
      },
      {
        answer: "No",
        value: 1,
      },
    ],
  },
  {
    instruction:
      "El evaluador debe escribir una frase (la frase debe tener implícita una orden). Se le pide al paciente que lea y realice la acción que indica la frase.",
    example: "Cierre los ojos",
    question: "¿Realizó correctamente la acción?",
    answers: [
      {
        answer: "Sí",
        value: 0,
      },
      {
        answer: "No",
        value: 1,
      },
    ],
  },

  {
    instruction:
      "El evaluador debe dibujar 2 pentagonos interceptados y se le pide al px que copie el mísmo dibujo.",
    example: "*Inserte aquí la imágen de los pentagonos*",
    question: "¿Copió correctamente el dibujo?",
    answers: [
      {
        answer: "Sí",
        value: 0,
      },
      {
        answer: "No",
        value: 1,
      },
    ],
  },
];

export const miniMentalResults = {
  results: [
    {
      min: 0,
      max: 9,
      result: "Se identifíca deterioro cognitivo severo.",
    },
    {
      min: 10,
      max: 19,
      result: "Se identifica deterioro cognitivo moderado.",
    },
    {
      min: 20,
      max: 24,
      result: "Se identifica deterioro cognitivo leve.",
    },
    {
      min: 25,
      max: 30,
      result: "No se identifíca deterioro cognitivo.",
    },
  ],
  titles: ["Resultado", "Identificación de deterioro cognitivo"],
};
