import React, {useState} from 'react';

import './style.css';
import x from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NewCity from "./NewCity";
import Modal from "./Modal";
import City from "./City";
import {TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";


const Civilization = ({state, onCityAdd, onLevelUp, onSmileChange, onCogChange, cityDelete, changeType}) => {

    const [opened, setOpened] = useState(false);
    const [total, setTotal] = useState(0);

    const changeModalOpen = () => {
        setOpened(true);
        state.cities.length ? setTotal(0) : setTotal('Создайте хотя бы один город');
    }

    const types = [
        {title: "Вино"},
        {title: "Город"},
        {title: "Драгоценности"},
        {title: "Драгоценные металы"},
        {title: "Железо"},
        {title: "Лошади"},
        {title: "Нефть"},
        {title: "Специи"},
        {title: "Уголь"},
    ];

    const filterTypes = types.filter(item => item.title !== "Город");

    const calculate = (value) => {
        setTotal(0);
        let monopoly = 0;
        let profit = 0;

        const allCityTypes = [];
        const result = {};

        for (let city of state.cities) {
            const cityType = city.activeType;
            allCityTypes.push(cityType.title);
        }
        for (let item of allCityTypes) {
            const a = item;
            if (result[a] !== undefined)
                ++result[a];
            else
                result[a] = 1;
        }
        for (let key in result) {
            switch (result[key]) {
                case 3:
                    monopoly = monopoly + 20;
                    break;
                case 4:
                    monopoly = monopoly + 40;
                    break;
                case 5:
                    monopoly = monopoly + 80;
                    break;
                default:
                    break;
            }
        }
        for (let city of state.cities) {
            const criticalProfit = city.activeType.title === value.title ? city.profit * 2 : city.profit;
            profit = profit + criticalProfit;
        }

        setTotal(monopoly + profit);
    }


    return (
        <div>
            <div className={x.root}>
                <div className='container'>
                    <div className='row'>

                        {state.cities ? state.cities.map(city =>
                            <City
                                key={city.id}
                                city={city}
                                types={types}
                                onLevelUp={onLevelUp}
                                onSmileChange={onSmileChange}
                                onCogChange={onCogChange}
                                cityDelete={cityDelete}
                                changeType={changeType}
                            />
                        ) : ''}
                        <NewCity onCityAdd={onCityAdd}/>
                    </div>
                    <div className={`${x.calculateWrapper}`}>
                        <Modal opened={opened} setOpened={setOpened}>

                            <Autocomplete
                                id={`calculate`}
                                options={filterTypes}
                                onChange={(e, value) => calculate(value)}
                                getOptionLabel={(option) => option.title}
                                style={{width: '100%'}}
                                renderInput={(params) => <TextField {...params} label="Type" variant="outlined"/>}
                            />

                            <div className={x.total}>{total}</div>

                        </Modal>
                        <button className={`btn btn-primary ${x.calculate}`}
                                onClick={changeModalOpen}>Calculate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Civilization;