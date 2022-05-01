export const lawtonAndBrodyQuestions = [
  {
    question: "CAPACIDAD PARA USAR EL TELÉFONO:",
    answers: [
      {
        answer: "Utiliza el teléfono por iniciativa propia",
        value: 1,
      },
      {
        answer: "Es capaz de marcar bien algunos números familiares",
        value: 1,
      },
      {
        answer: "Es capaz de contestar al teléfono, pero no de marcar",
        value: 1,
      },
      {
        answer: "No es capaz de usar el teléfono",
        value: 0,
      },
    ],
  },
  {
    question: "HACER COMPRAS:",
    answers: [
      {
        answer: "Realiza todas las compras necesarias independientemente",
        value: 1,
      },
      {
        answer: "Realiza independientemente pequeñas compras",
        value: 0,
      },
      {
        answer: "Necesita ir acompañado para hacer cualquier compra",
        value: 0,
      },
      {
        answer: "Totalmente incapaz de comprar",
        value: 0,
      },
    ],
  },
  {
    question: "PREPARACIÓN DE LA COMIDA:",
    answers: [
      {
        answer:
          "Organiza, prepara y sirve las comidas por sí solo adecuadamente",
        value: 1,
      },
      {
        answer:
          "Prepara adecuadamente las comidas si se le proporcionan los ingredientes",
        value: 0,
      },
      {
        answer:
          "Prepara, calienta y sirve las comidas, pero no sigue una dieta adecuada",
        value: 0,
      },
      {
        answer: "Necesita que le preparen y sirvan las comidas",
        value: 0,
      },
    ],
  },
  {
    question: "CUIDADO DE LA CASA:",
    answers: [
      {
        answer:
          "Mantiene la casa solo o con ayuda ocasional (para trabajos pesados)",
        value: 1,
      },
      {
        answer:
          "Realiza tareas ligeras, como lavar los platos o hacer las camas",
        value: 1,
      },
      {
        answer:
          "Realiza tareas ligeras, pero no puede mantener un adecuado nivel de limpieza",
        value: 1,
      },
      {
        answer: "Necesita ayuda en todas las labores de la casa",
        value: 1,
      },
      {
        answer: "No participa en ninguna labor de la casa",
        value: 0,
      },
    ],
  },
  {
    question: "LAVADO DE LA ROPA:",
    answers: [
      {
        answer: "Lava por sí solo toda su ropa",
        value: 1,
      },
      {
        answer: "Lava por sí solo pequeñas prendas",
        value: 1,
      },
      {
        answer: "Todo el lavado de ropa debe ser realizado por otro",
        value: 0,
      },
    ],
  },
  {
    question: "USO DE MEDIOS DE TRANSPORTE:",
    answers: [
      {
        answer: "Viaja solo en transporte público o conduce su propio coche",
        value: 1,
      },
      {
        answer:
          "Es capaz de coger un taxi, pero no usa otro medio de transporte",
        value: 1,
      },
      {
        answer:
          "Viaja en transporte público cuando va acompañado por otra persona",
        value: 1,
      },
      {
        answer: "Solo utiliza el taxi o el automóvil con ayuda de otros",
        value: 0,
      },
      {
        answer: "No viaja",
        value: 0,
      },
    ],
  },
  {
    question: "RESPONSABILIDAD RESPECTO A SU MEDICACIÓN:",
    answers: [
      {
        answer:
          "Es capaz de tomar su medicación a la hora y con la dosis correcta",
        value: 1,
      },
      {
        answer: "Toma su medicación si la dosis le es preparada previamente",
        value: 0,
      },
      {
        answer: "No es capaz de administrarse su medicación",
        value: 0,
      },
    ],
  },
  {
    question: "MANEJO DE SUS ASUNTOS ECONÓMICOS:",
    answers: [
      {
        answer: "Se encarga de sus asuntos económicos por sí solo",
        value: 1,
      },
      {
        answer:
          "Realiza las compras de cada día, pero necesita ayuda en las grandes compras, bancos…",
        value: 1,
      },
      {
        answer: "Incapaz de manejar dinero",
        value: 0,
      },
    ],
  },
];

export const lawtonAndBrodyResult = {
  results: [
    {
      min: 0,
      max: 1,
      result:
        "Paciente con dependencia total de acuerdo a la escala Lawton y brody.",
    },
    {
      min: 2,
      max: 3,
      result:
        "Paciente con dependencia grave de acuerdo a la escala Lawton y brody.",
    },
    {
      min: 4,
      max: 5,
      result:
        "Paciente con dependencia moderada de acuerdo a la escala Lawton y brody.",
    },
    {
      min: 6,
      max: 7,
      result:
        "Paciente con dependencia leve de acuerdo a la escala Lawton y brody.",
    },
    {
      min: 8,
      max: 8,
      result:
        "Paciente Autónomo o con independencia total de acuerdo a la escala Lawton y brody.",
    },
  ],
  titles: ["Resultado", "Grado de Dependencia"],
};
