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
    [
        {
            result: 'De 24 a 30',
            description: 'Estado nutricional normal',
        },
        {
            result: 'De 17 a 23.5',
            description: 'Riesgo de malnutrición',
        },
        {
            result: 'Menos de 17',
            description: 'Malnutrición',
        }
    ]
]

export const scalesQuestions = [
    [
        {
            question: '¿Ha perdido el apetito? ¿Ha comido menos por falta de apetito, problemas digestivos, dificultades de masticación o deglución en los últimos 3 meses?',
            answers: [
                {
                    answer: 'Ha comido mucho menos',
                    value: 0,
                },
                {
                    answer: 'Ha comido menos',
                    value: 1,
                },
                {
                    answer: 'Ha comido igual',
                    value: 2,
                },
            ],
        },
        {
            question: 'Pérdida reciente de peso (< 3 meses)',
            answers: [
                {
                    answer: 'Pérdida de peso > 3kg',
                    value: 0,
                },
                {
                    answer: 'No lo sabe',
                    value: 1,
                },
                {
                    answer: 'Pérdida de peso entre 1 - 3kg',
                    value: 2,
                },
                {
                    answer: 'No ha habido pérdida de peso',
                    value: 3,
                },
            ],
        },
        {
            question: 'Movilidad',
            answers: [
                {
                    answer: 'De la cama al sillón',
                    value: 0,
                },
                {
                    answer: 'Autonomía en el interior',
                    value: 1,
                },
                {
                    answer: 'Sale del domicilio',
                    value: 2,
                },
            ],
        },
        {
            question: '¿Ha tenido una enfermedad aguda o situación de estrés psicológico en los últimos 3 meses?',
            answers: [
                {
                    answer: 'Si',
                    value: 0,
                },
                {
                    answer: 'No',
                    value: 2,
                },
            ],
        },
        {
            question: 'Problemas neuropsicológicos',
            answers: [
                {
                    answer: 'Demencia o depresión grave',
                    value: 0,
                },
                {
                    answer: 'Demencia moderada',
                    value: 1,
                },
                {
                    answer: 'Sin problemas psicológicos',
                    value: 2,
                },
            ],
        },
        {
            question: 'Índice de Masa Corporal (IMC) = Peso (kg) / Altura (m)²',
            answers: [
                {
                    answer: 'IMC < 19',
                    value: 0,
                },
                {
                    answer: '19 <= IMC < 21',
                    value: 1,
                },
                {
                    answer: '21 <= IMC < 23',
                    value: 2,
                },
                {
                    answer: 'IMC >= 23',
                    value: 3,
                },
            ],
        },
        {
            question: 'El paciente vive independiente en su domicilio',
            answers: [
                {
                    answer: 'Si',
                    value: 1,
                },
                {
                    answer: 'No',
                    value: 0,
                },
            ],
        },
        {
            question: 'Toma más de 3 medicamentos al día',
            answers: [
                {
                    answer: 'Si',
                    value: 0,
                },
                {
                    answer: 'No',
                    value: 1,
                },
            ],
        },
        {
            question: 'Úlceras o lesiones cutáneas',
            answers: [
                {
                    answer: 'Si',
                    value: 0,
                },
                {
                    answer: 'No',
                    value: 1,
                },
            ],
        },
        {
            question: '¿Cuántas comidas completas toma al día?',
            answers: [
                {
                    answer: '1 comida',
                    value: 0,
                },
                {
                    answer: '2 comidas',
                    value: 1,
                },
                {
                    answer: '3 comidas',
                    value: 2,
                },
            ],
        },
        {
            question: '¿Consume frutas o verduras al menos 2 veces al día?',
            answers: [
                {
                    answer: 'Si',
                    value: 1,
                },
                {
                    answer: 'No',
                    value: 0,
                },
            ],
        },
        {
            question: '¿Cuántas vasos de agua u otros liquidos toma al día? (agua, jugo, café, té, vino, cerveza...)',
            answers: [
                {
                    answer: 'Menos de 3 vasos',
                    value: 0.0,
                },
                {
                    answer: 'De 3 a 5 vasos',
                    value: 0.5,
                },
                {
                    answer: 'Más de 5 vasos',
                    value: 1.0,
                },
            ],
        },
        {
            question: 'Forma de alimentarse',
            answers: [
                {
                    answer: 'Necesita ayuda',
                    value: 0,
                },
                {
                    answer: 'Se alimenta solo con dificultad',
                    value: 1,
                },
                {
                    answer: 'Se alimenta solo sin dificultad',
                    value: 2,
                },
            ],
        },
        {
            question: '¿Se considera el paciente que está bien nutrido?',
            answers: [
                {
                    answer: 'Malnutrición grave',
                    value: 0,
                },
                {
                    answer: 'No lo sabe o malnutrición moderada',
                    value: 1,
                },
                {
                    answer: 'Sin problemas de nutrición',
                    value: 2,
                },
            ],
        },
        {
            question: '¿En comparación con personas de su edad, cómo encuentra el paciente su estado de salud?',
            answers: [
                {
                    answer: 'Peor',
                    value: 0.0,
                },
                {
                    answer: 'No lo sabe',
                    value: 0.5,
                },
                {
                    answer: 'Igual',
                    value: 1.0,
                },
                {
                    answer: 'Mejor',
                    value: 2.0,
                },
            ],
        },
        {
            question: 'Circunferencia braquial (CB en cm)',
            answers: [
                {
                    answer: 'CB < 21',
                    value: 0.0,
                },
                {
                    answer: '21 <= CB <= 22',
                    value: 0.5,
                },
                {
                    answer: 'CB > 22',
                    value: 1.0,
                },
            ],
        },
        {
            question: 'Circunferencia de la pantorrilla (CP en cm)',
            answers: [
                {
                    answer: 'CB < 31',
                    value: 0,
                },
                {
                    answer: 'CP >= 31',
                    value: 1,
                },
            ],
        },
    ]
];
