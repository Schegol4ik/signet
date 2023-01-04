

let initialState = {
    producer: [
        {
            id: 1,
            slug: '/vape_liquid',
            title: 'Vape ЛиквидЪ',
            rulers: [
                {
                    name: 'Freezee Breeze',
                    vg_pg: '50/50',
                    nicotine: '15 ± 3',
                    volume: '30мл',
                },
                {
                    name: 'Freeze Monkey',
                    vg_pg: '50/50',
                    nicotine: '15 ± 3',
                    volume: '30мл',
                },
            ],
        },
    ],

    liquids: [
        {
            id: 1,
            ruler: 'Freezee Breeze',
            name: 'Super Green',
            title: 'Яблоко, персик',
            cooler: true,
            double_cooler: false,
            slug: '/freeze-breeze',
        },
        {},
    ],
}

export const liquidsReducer = (state = initialState, action) => {

    switch (action.type) {
        default : {
            return state
        }
    }


}