import React from 'react';
import x from '../style.module.css'

import {Select, MenuItem} from "@material-ui/core";

import Lv from '../assets/images/Lv.svg';
import cityImage from '../assets/images/city.png';
import cogSolid from '../assets/images/cog-solid.svg';
import coinsSolid from '../assets/images/coins-solid.svg';
import smileSolid from '../assets/images/smile-solid.svg';
import trashSolid from '../assets/images/trash-solid.svg';
import levelUp from '../assets/images/long-arrow-alt-up-solid.svg';




const City = ({city, onLevelUp, onCogChange, onSmileChange, cityDelete, changeType, types}) => {

    return (
        <>
            <div className="col-md-4 col-sm-6 col-12">
                <div className={`${x.city}`}>
                    <div className={x.city__top}>
                        <Select
                            id={`${city.id}`}
                            value={city.activeType}
                            onChange={(e, value) => changeType(city.id, value.props.value)}
                            style={{width: '50%'}}
                        >
                            {types.map( (type, index) => <MenuItem key={index} value={type}>{type}</MenuItem>)}
                        </Select>
                    </div>
                    <div className={x.city__image}>
                        <img src={cityImage} alt='city'/>
                    </div>
                    <div className={x.city__info}>

                        {city.cog ? <div className={x.city__infoItem}>
                            <img src={cogSolid} alt='cogSolid'/>
                        </div> : ''}
                        {city.smile ? <div className={x.city__infoItem}>
                            <img src={smileSolid} alt='smileSolid'/>
                        </div> : ''}
                        <div className={x.city__infoItem}>
                            <img src={Lv} alt='Lv'/>
                            <div>{city.level}</div>
                        </div>
                        <div className={x.city__infoItem}>
                            <img src={coinsSolid} alt='coinsSolid'/>
                            <div>{city.profit}</div>
                        </div>
                    </div>
                    <div className={x.city__btnGroup}>
                        <button className="btn btn-primary" onClick={() => onCogChange(city.id)}>
                            <img src={cogSolid} alt='cogSolid'/>
                        </button>
                        <button disabled={city.activeType.title === 'Драгоценности' || city.activeType.title === 'Вино'} className="btn btn-primary" onClick={() => onSmileChange(city.id)}>
                            <img src={smileSolid} alt='coinsSolid'/>
                        </button>
                        <button disabled={city.level === 4} className="btn btn-primary"
                                onClick={() => onLevelUp(city.id)}>
                            <img src={levelUp} alt='longArrowAltUpSolid'/>
                        </button>
                        <button className="btn btn-primary" onClick={() => cityDelete(city.id)}>
                            <img src={trashSolid} alt='trashSolid'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default City;