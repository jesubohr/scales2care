import * as MiniNutricional from "../libs/miniNutricionalScale";

export const nameScales = [
    'Nutritional Assessment Short Form',
    'Índice de Barthel',
    'Escala de Lawton y Brody',
    'Escala Yessavage',
    'Escala Gijon',
    'Escala Braden',
    'Cuestionario de Edimburgo',
    'SCORE',
    'Escala Framingham',
    'CAM',
    'Escala Has-bled',
    'Escala Padua',
    'Escala Caprini',
    'Índice de Comorbilidades de Charlson',
    'Mini-Mental State Examination',
    'Cuestionario CAGE',
    'Escala Morse',
];
export const scalesPerCategory = {
    'Componente Biológico o Clínico': [
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
    'Componente Psicológico o Mental': [
        { scaleName: nameScales[9], scaleId: 9 },
        { scaleName: nameScales[14], scaleId: 14 },
        { scaleName: nameScales[3], scaleId: 3 },
    ],
    'Componente Social': [
        { scaleName: nameScales[4], scaleId: 4 },
    ],
    'Componente Triple': [
        { scaleName: nameScales[2], scaleId: 2 },
        { scaleName: nameScales[1], scaleId: 1 },
        { scaleName: nameScales[16], scaleId: 16 },
    ],
};
export const scalesResults = [
    MiniNutricional.Results,
]

export const scalesQuestions = [
    MiniNutricional.Questions,
];
