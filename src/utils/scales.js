import * as MiniNutricional from "../libs/miniNutricionalScale";
import * as Barthel from "../libs/barthelScale";
import * as LawtonBrody from "../libs/lawtonAndBrodyScale";
import * as Yessavage from "../libs/yesavageScale";
import * as Gijon from "../libs/gijonScale";
import * as Edimburgo from "../libs/edimburgoScale";
import * as Hasbled from "../libs/hasbledScale";
import * as Padua from "../libs/paduaScale";
import * as Charlson from "../libs/charlsonScale";
import * as Morse from "../libs/morseScale";
import * as Braden from "../libs/bradenScale";
import * as Cam from "../libs/camScale";
import * as Caprini from "../libs/capriniScale";
import * as MiniMental from "../libs/miniMentalScale";
import * as Cage from "../libs/cageScale";
import FraminghamHombre from "../libs/framinghamHombres.json";
import FraminghamMujer from "../libs/framinghamMujeres.json";

export const nameScales = [
  "Nutritional Assessment Short Form",
  "Índice de Barthel",
  "Escala de Lawton y Brody",
  "Escala Yessavage",
  "Escala Gijon",
  "Escala Braden",
  "Cuestionario de Edimburgo",
  "Escala Framingham",
  "CAM",
  "Escala Has-bled",
  "Escala Padua",
  "Escala Caprini",
  "Índice de Comorbilidades de Charlson",
  "Mini-Mental State Examination",
  "Cuestionario CAGE",
  "Escala Morse",
];

export const scalesDescriptions = [
  "El MNA® es una herramienta de tamizaje que ayuda a identificar a personas de edad avanzada desnutridos o en riesgo de desnutrición tanto en el hospital como en su entorno social, se diseñó y validó para proporcionar una evaluación única y rápida del estado nutricional.",
  "El índice de Barthel es una herramienta con demostrada validez y fiabilidad. Útil en la práctica clínica y en la atención domiciliaria de pacientes adultos mayores, debido a que está nos ayuda a valorar el grado de discapacidad física en este grupo etario mediante un análisis del nivel de independencia propio de cada paciente con respecto a la realización de actividades básicas de la vida diaria (AVD) tales como: comer, bañarse, vestirse, arreglarse, deposiciones, micción, usar el retrete, trasladarse, deambular y subir/bajar escaleras).",
  "Escala capaz de detectar las primeras señales de deterioro de las personas mayores, muy útil para evaluar independencia e interacción con el entorno, o lo que es también catalogado como Actividades instrumentales de la vida diaria(AIVD) y tiene como objetivo principal determinar dependencia en ámbitos instrumentales tales como: escribir, leer, cocinar, limpiar, comprar, lavar, planchar, usar el teléfono, manejar dinero y medicación, así como usar el transporte público o realizar trabajos fuera de la casa.",
  "Tiene como objetivo identificar síntomas cognoscitivos de un episodio depresivo mayor en pacientes adultos mayores.",
  "Es una escala de tamizaje que permite valoración inicial sociofamiliar en el adulto mayor para la detección de riesgo social.",
  "La escala de Braden fue presentada como un instrumento de predicción del riesgo de desarrollar ulceras por presión en 1987. Está conformada por seis ítems o subescalas que evalúan individualmente:  percepción sensorial, humedad, actividad, movilidad, nutrición, fricción y roce.",
  "Es una herramienta usada ante la sospecha de claudicación intermitente",
  "Permite Calcular el riesgo coronario a 10 años en población de 30-62 años. Esta escala mide variables tales como: edad, sexo, HDL-colesterol, colesterol total, presión arterial sistólica, tabaquismo, diabetes, hipertrofia ventricular izquierda  y puntúa de manera que, a mayor exposición de los factores mencionados anteriormente, mayor será el riesgo cardiovascular del paciente en 10 años.",
  "Es una herramienta basada en los criterios diagnósticos del DSM-III-R y usada para el diagnóstico del delirium en adultos mayores que cuentan con alto riesgo. Evalúa cambios agudos o fluctuantes del estado mental, presencia de inatención, pensamiento desorganizado y alteración del estado de conciencia. ",
  "Esta escala está indicada para la valoración y estratificación de riesgo de sangrado en pacientes con factores de riesgo como: hipertensión arterial, alteración renal o hepática, ictus previo, historia de sangrado previo, INR lábil, edad > 65 años y consumo concomitante de fármacos o alcohol.",
  "Se desarrolló con el fin de identificar el riesgo de tromboembolismo venoso en pacientes con patologías médicas, pacientes hospitalizados no quirúrgicos y/o no críticos. ",
  "La escala de Caprini es la más utilizada para la estratificación del riesgo de enfermedad trombótica, se emplea en todo aquel paciente quirúrgico y encuentra su utilidad en determinar cuándo se hace necesario establecer cuidados profilácticos que ayuden a disminuir la incidencia de trombosis venosa profunda y tromboembolia pulmonar. ",
  "Es un método utilizado para estimar el pronóstico de vida en base a la comorbilidad existente en el paciente, prediciendo las complicaciones de la suma de ciertas enfermedades. ",
  "Mini-Mental State Examination (MMSE) de Folstein es una herramienta de tamizaje fundamental en la detección del deterioro cognitivo. Explora y puntúa varias áreas, como: orientación temporal, orientación espacial, fijación-recuerdo inmediato, atención y cálculo, recuerdo diferido, lenguaje ",
  "El cuestionario CAGE es una prueba de tamizaje que se aplica a sujetos consumidores de alcohol y está compuesta por cuatro preguntas que evalúan: Crítica social, Culpabilidad individual, Ingesta matutina de alcohol y Necesidad sentida de consumo",
  "Escala capaz de detectar y estratificar el riesgo caídas ante la presencia de factores de riesgo.",
];

export const scalesPerCategory = {
  "Biológica o Clínica": [
    { scaleName: nameScales[0], scaleId: 0 },
    { scaleName: nameScales[9], scaleId: 9 },
    { scaleName: nameScales[10], scaleId: 10 },
    { scaleName: nameScales[11], scaleId: 11 },
    { scaleName: nameScales[14], scaleId: 14 },
    { scaleName: nameScales[7], scaleId: 7 },
    { scaleName: nameScales[6], scaleId: 6 },
    { scaleName: nameScales[12], scaleId: 12 },
    { scaleName: nameScales[5], scaleId: 5 },
  ],
  "Psicológica o Mental": [
    { scaleName: nameScales[8], scaleId: 8 },
    { scaleName: nameScales[13], scaleId: 13 },
    { scaleName: nameScales[3], scaleId: 3 },
  ],
  Social: [{ scaleName: nameScales[4], scaleId: 4 }],
  Triple: [
    { scaleName: nameScales[2], scaleId: 2 },
    { scaleName: nameScales[1], scaleId: 1 },
    { scaleName: nameScales[15], scaleId: 15 },
  ],
};

export const categoryPerScale = [
  {
    scaleName: nameScales[0],
    scaleId: 0,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[9],
    scaleId: 9,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[10],
    scaleId: 10,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[11],
    scaleId: 11,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[14],
    scaleId: 14,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[7],
    scaleId: 7,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[6],
    scaleId: 6,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[12],
    scaleId: 12,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[5],
    scaleId: 5,
    category: "Biológica o Clínica",
  },
  {
    scaleName: nameScales[8],
    scaleId: 8,
    category: "Psicológica o Mental",
  },
  {
    scaleName: nameScales[13],
    scaleId: 13,
    category: "Psicológica o Mental",
  },
  {
    scaleName: nameScales[3],
    scaleId: 3,
    category: "Psicológica o Mental",
  },
  { scaleName: nameScales[2], scaleId: 2, category: "Triple" },
  { scaleName: nameScales[1], scaleId: 1, category: "Triple" },
  { scaleName: nameScales[15], scaleId: 15, category: "Triple" },
  { scaleName: nameScales[4], scaleId: 4, category: "Social" },
];

export const scalesResults = [
  MiniNutricional.Results,
  Barthel.barthelResults,
  LawtonBrody.lawtonAndBrodyResults,
  Yessavage.yesavageResults,
  Gijon.gijonResults,
  Braden.bradenResults,
  Edimburgo.edimburgoResults,
  [FraminghamHombre.interpretations, FraminghamMujer.interpretations],
  Cam.camResults,
  Hasbled.hasbledResults,
  Padua.paduaResults,
  Caprini.capriniResults,
  Charlson.charlsonResults,
  MiniMental.miniMentalResults,
  Cage.cageResults,
  Morse.morseResults,
];

export const scalesQuestions = [
  MiniNutricional.Questions,
  Barthel.barthelQuestions,
  LawtonBrody.lawtonAndBrodyQuestions,
  Yessavage.yesavageQuestions,
  Gijon.gijonQuestions,
  Braden.bradenQuestions,
  Edimburgo.edimburgoQuestions,
  [FraminghamHombre.questions, FraminghamMujer.questions],
  Cam.camQuestions,
  Hasbled.hasbledQuestions,
  Padua.paduaQuestions,
  Caprini.capriniQuestions,
  Charlson.charlsonQuestions,
  MiniMental.miniMentalQuestions,
  Cage.cageQuestions,
  Morse.morseQuestions,
];
