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
import * as Framingham from "../libs/framinghamScale";

export const nameScales = [
  "Nutritional Assessment Short Form",
  "Índice de Barthel",
  "Escala de Lawton y Brody",
  "Escala Yessavage",
  "Escala Gijon",
  "Escala Braden",
  "Cuestionario de Edimburgo",
  "SCORE",
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
export const scalesPerCategory = {
  "Biológica o Clínica": [
    { scaleName: nameScales[0], scaleId: 0 },
    { scaleName: nameScales[10], scaleId: 10 },
    { scaleName: nameScales[11], scaleId: 11 },
    { scaleName: nameScales[12], scaleId: 12 },
    { scaleName: nameScales[15], scaleId: 15 },
    { scaleName: nameScales[7], scaleId: 7 },
    { scaleName: nameScales[8], scaleId: 8 },
    { scaleName: nameScales[6], scaleId: 6 },
    { scaleName: nameScales[13], scaleId: 13 },
    { scaleName: nameScales[5], scaleId: 5 },
  ],
  "Psicológica o Mental": [
    { scaleName: nameScales[9], scaleId: 9 },
    { scaleName: nameScales[14], scaleId: 14 },
    { scaleName: nameScales[3], scaleId: 3 },
  ],
  "Social": [{ scaleName: nameScales[4], scaleId: 4 }],
  "Triple": [
    { scaleName: nameScales[2], scaleId: 2 },
    { scaleName: nameScales[1], scaleId: 1 },
    { scaleName: nameScales[16], scaleId: 16 },
  ],
};

export const categoryPerScale = [
  {
    scaleName: nameScales[0],
    scaleId: 0,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[10],
    scaleId: 10,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[11],
    scaleId: 11,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[12],
    scaleId: 12,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[15],
    scaleId: 15,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[7],
    scaleId: 7,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[8],
    scaleId: 8,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[6],
    scaleId: 6,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[13],
    scaleId: 13,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[5],
    scaleId: 5,
    category: "Componente Biológico o Clínico",
  },
  {
    scaleName: nameScales[9],
    scaleId: 9,
    category: "Componente Psicológico o Mental",
  },
  {
    scaleName: nameScales[14],
    scaleId: 14,
    category: "Componente Psicológico o Mental",
  },
  {
    scaleName: nameScales[3],
    scaleId: 3,
    category: "Componente Psicológico o Mental",
  },
  { scaleName: nameScales[2], scaleId: 2, category: "Componente Triple" },
  { scaleName: nameScales[1], scaleId: 1, category: "Componente Triple" },
  { scaleName: nameScales[16], scaleId: 16, category: "Componente Triple" },
];

export const scalesResults = [
  MiniNutricional.Results,
  Barthel.barthelResults,
  LawtonBrody.lawtonAndBrodyResults,
  Yessavage.yesavageResults,
  Gijon.gijonResults,
  Braden.bradenResults,
  Edimburgo.edimburgoResults,
  {},
  {},
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
  [],
  [],
  Cam.camQuestions,
  Hasbled.hasbledQuestions,
  Padua.paduaQuestions,
  Caprini.capriniQuestions,
  Charlson.charlsonQuestions,
  MiniMental.miniMentalQuestions,
  Cage.cageQuestions,
  Morse.morseQuestions,
];
