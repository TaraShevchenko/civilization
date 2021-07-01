import React from 'react';
import {Route} from "react-router-dom";

import x from './style.module.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NewCity from "./NewCity";
import Modal from "./Modal";
import City from "./City";


const Civilization = ({state, onCityAdd}) => {

    const cityId = state.cities.length;

    return (
        <div>

            <Route path='/civa/'>
                <div className={x.root}>
                    <div className='container'>
                        <div className='row'>`
                            {state.cities.map(city => <City key={city.id} city={city} />)}

                            <NewCity onCityAdd={onCityAdd} cityId={cityId}/>
                        </div>
                        <div className={`${x.calculateWrapper}`}>
                            <button className={`btn btn-primary ${x.calculate}`}>Calculate</button>
                        </div>
                    </div>
                </div>
            </Route>

            <Route path='/civa/calculate'>
                <Modal/>
            </Route>
        </div>
    );
};

export default Civilization;