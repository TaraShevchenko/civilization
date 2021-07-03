const NEW_CITY = "NEW_CITY";
const LEVEL_UP = "LEVEL_UP";
const SMILE_CHANGE = "SMILE_CHANGE";
const COG_CHANGE = "COG_CHANGE";
const CITY_DELETE = "CITY_DELETE";
const CHANGE_TYPE = "CHANGE_TYPE";

let locStore
if (localStorage.store) {
    locStore = JSON.parse(localStorage.store);
}

export const cityReducer = (state = {cities: locStore ? [...locStore] : []}, action) => {
    let copyState = {...state};
    let cityIndex;
    let city;

    const changeProfit = (level, smile, cog) => {
        const smileNumber = smile ? 2 : 0;
        const cogNumber = cog ? 2 : 1;
        return (level * 2 + smileNumber) * cogNumber;
    }

    if (action.id) {
        city = copyState.cities[copyState.cities.findIndex(city => city.id === action.id)];
        cityIndex = copyState.cities.findIndex(city => city.id === action.id);
    }

    switch (action.type) {
        case NEW_CITY:
            copyState.cities = [...state.cities];

            copyState.cities.push({
                id: (new Date()).getTime(),
                name: 'Untiled',
                types: [
                    { title: "Метал", active: false },
                    { title: "Драгоценные металы", active: false  },
                    { title: "Брильянты", active: false },
                    { title: "Вино", active: false },
                    { title: "Лошади", active: false },
                    { title: "Нефть", active: false },
                    { title: "Специи", active: false },
                    { title: "Уголь", active: false },
                ],
                level: 1,
                cog: false,
                smile: false,
                profit: 2
            });
            localStorage.setItem('store', JSON.stringify(copyState.cities));

            return copyState;
        case LEVEL_UP:
            copyState.cities[cityIndex] = {
                ...city,
                level: city.level + 1,
                profit: changeProfit(city.level + 1, city.smile, city.cog)
            }
            localStorage.setItem('store', JSON.stringify(copyState.cities));

            return copyState;
        case SMILE_CHANGE:
            copyState.cities[cityIndex] = {
                ...city,
                smile: !city.smile,
                profit: changeProfit(city.level, !city.smile, city.cog)
            }
            localStorage.setItem('store', JSON.stringify(copyState.cities));

            return copyState;
        case COG_CHANGE:
            copyState.cities[cityIndex] = {
                ...city,
                cog: !city.cog,
                profit: changeProfit(city.level, city.smile, !city.cog)
            }
            localStorage.setItem('store', JSON.stringify(copyState.cities));

            return copyState;
        case CITY_DELETE:
            copyState.cities.splice(cityIndex, 1);
            localStorage.setItem('store', JSON.stringify(copyState.cities));

            return copyState;
        case CHANGE_TYPE:
            const activeType = city.types.findIndex(type => type.title === action.value.title);
            const newTypes = city.types.splice(activeType, 1);
            city.types.map(type => type.active = false);

            console.log()

            copyState.cities[cityIndex] = {
                ...city,
                types: [
                    ...city.types,
                    {
                        title: newTypes[0].title,
                        active: true,
                    },
                ]
            }

            localStorage.setItem('store', JSON.stringify(copyState.cities));
            return copyState;
        default:
            return state;
    }
}
export const newCityActionCreator = () => ({
    type: NEW_CITY,
});

export const levelUpActionCreator = (id) => ({
    type: LEVEL_UP,
    id: id
});

export const smileChangeActionCreator = (id) => ({
    type: SMILE_CHANGE,
    id: id
});

export const cogChangeActionCreator = (id) => ({
    type: COG_CHANGE,
    id: id
});

export const cityDeleteActionCreator = (id) => ({
    type: CITY_DELETE,
    id: id
});

export const typeChangeActionCreator = (id, value) => ({
    type: CHANGE_TYPE,
    id: id,
    value: value
});