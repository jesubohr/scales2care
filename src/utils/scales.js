export const nameScales = [
   'Nutritional Assessment Short Form',
   'Índice de Barthel',
   'Escala de Lawton y Brody',
   'Yessavage',
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

export const scalesQuestions = [
    {
        scale: 'Nutritional Assessment Short Form',
        questions: [
            {
                question: '¿Ha comido menos por falta de apetito o algún otro problema en los últimos tres meses?',
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
                        answer: 'Pérdida > 3kg',
                        value: 0,
                    },
                    {
                        answer: 'Pérdida entre 1 - 3kg',
                        value: 1,
                    },
                    {
                        answer: 'No sabe',
                        value: 2,
                    },
                    {
                        answer: 'No ha habido pérdida',
                        value: 3,
                    },
                ],
            },
            {
                question: '¿Ha comido menos por falta de apetito o algún otro problema en los últimos tres meses?',
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
            }
        ]
    }
]
