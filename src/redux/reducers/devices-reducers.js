

let initialState  = {
    producers: [
        {
            id: 1,
            name: 'Vaporesso',
            slug: '/vaporesso',
        },
        {
            id: 1,
            name: 'Voopoo',
            slug: '/voopoo',
        },
    ],
    devices: [
        {
            id: 1,
            slug: 'v-thru',
            producer: 'Voopoo',
            name: 'V.Thru Pro',
            material_box: 'Аллюминий',
            material_cartridge: 'PCTG',
            accum: '900mAh',
            charget: 'Type-C / 1A',
            power: '5 - 25',
            cartrige_ml: '3',
            min_resistance: null,
            blowing: 'Отсутствует',
            new: false,
            functions: 'Дисплей',
            title: '',
            eqpiment:
                'Батарейный блок, доп. картридж 1.2, руководство, кабель Type-C ',
        },
        {
            id: 2,
            slug: 'hello',
            producer: 'Smoant',
            name: 'dadja',
            material_box: 'Аллюминий',
            material_cartridge: 'PCTG',
            accum: '900mAh',
            charget: 'Type-C / 1A',
            power: '5 - 25',
            cartrige_ml: '3',
            min_resistance: null,
            blowing: 'Отсутствует',
            new: false,
            functions: 'Дисплей',
            title: '',
            eqpiment:
                'Батарейный блок, доп. картридж 1.2, руководство, кабель Type-C ',
        },
    ],
}


export const devicesReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}