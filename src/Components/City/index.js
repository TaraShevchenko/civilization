import React from 'react';
import x from '../style.module.css'

import Lv from '../assets/images/Lv.svg';
import cityImage from '../assets/images/city.png';
import cogSolid from '../assets/images/cog-solid.svg';
import coinsSolid from '../assets/images/coins-solid.svg';
import smileSolid from '../assets/images/smile-solid.svg';
import trashSolid from '../assets/images/trash-solid.svg';
import longArrowAltUpSolid from '../assets/images/long-arrow-alt-up-solid.svg';

const City = ({city}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className={`${x.city}`}>
                <div className={x.city__top}>
                    <div className={x.city__switcher}>
                        <input type="checkbox"/>
                        <label htmlFor="switch0"></label>
                    </div>
                    <div className={x.city__name}>
                        <div className={x.inputGroup}>
                            <input className={x.input} type="text" name="name" id="name" placeholder={city.name}/>
                            <label className={x.label} htmlFor="name">Name</label>
                        </div>
                    </div>
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
                    <button className="btn btn-primary">
                        <img src={longArrowAltUpSolid} alt='longArrowAltUpSolid'/>
                    </button>
                    <button className="btn btn-primary">
                        <img src={cogSolid} alt='cogSolid'/>
                    </button>
                    <button className="btn btn-primary">
                        <img src={coinsSolid} alt='coinsSolid'/>
                    </button>
                    <button className="btn btn-primary">
                        <img src={trashSolid} alt='trashSolid'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default City;