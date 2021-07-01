import React from 'react';
import x from '../style.module.css'

import image from '../assets/images/plus-solid.svg'

const NewCity = ({onCityAdd, cityId}) => {



    return (
        <div className={`col-md-4 ${x.city_add_wrapper}`}>
            <div className={`${x.city} d-flex align-items-center justify-content-center`}>
                <button className={x.city_add} onClick={() => onCityAdd(cityId)}>
                    <img src={image} alt="plus"/>
                </button>
            </div>
        </div>
    );
};

export default NewCity;