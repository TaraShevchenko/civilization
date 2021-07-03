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

    const calculate = (value) => {
        setTotal(0)
        for (let city of state.cities) {
            const cityType = city.types.find(type => type.active === true);
            if (cityType) {
                const profit = cityType.title === value.title ? city.profit * 2 : city.profit;
                setTotal(prevState => prevState + profit);
            }else {
                setTotal('Не все города имеют тип');
            }
        }
    }

    const types = [
        {title: "Брильянты"},
        {title: "Вино"},
        {title: "Драгоценные металы"},
        {title: "Лошади "},
        {title: "Метал"},
        {title: "Нефть"},
        {title: "Специи"},
        {title: "Уголь"},
    ];

    return (
        <div>
            <div className={x.root}>
                <div className='container'>
                    <div className='row'>

                        {state.cities ? state.cities.map(city =>
                            <City
                                key={city.id}
                                city={city}
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
                            {state.cities[0] ?
                                <Autocomplete
                                    id={`calculate`}
                                    options={types}
                                    onChange={(e, value) => calculate(value)}
                                    getOptionLabel={(option) => option.title}
                                    style={{width: '50%'}}
                                    renderInput={(params) => <TextField {...params} label="Type" variant="outlined"/>}
                                /> : ''}

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