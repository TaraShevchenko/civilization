const initialState = {
    cities: []
}

const NEW_CITY = "NEW_CITY";

export const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_CITY:
            let copyState = {...state};
            copyState.cities = [...state.cities];

            copyState.cities.push({
                id: action.id,
                name: 'Untiled',
                type: 'Common',
                level: 1,
                cog: false,
                smile: false,
                profit: 2
            });
            return copyState;
        default:
            return state;
    }
}
export const newCityActionCreator = (id) => ({
    type: NEW_CITY,
    id: id
});