import React from 'react';
import './search.scss'
import {useFilter} from "../../hooks/useFilter";
import {NavLink} from "react-router-dom";

const Search = ({value, devices, liquids}) => {

    const findDevices = useFilter(devices.devices, value, 'name')
    const findLiquids = useFilter(liquids.liquids, value, 'name')
    const findLiquidsTitle = useFilter(liquids.liquids, value, 'title')
    const findRulers = useFilter(liquids.rulers, value, 'name')


    return (
        <div className='wrapper--search'>
            <div>
                {findDevices.length
                    ? <div>
                        <p>-- Устройства --</p>
                        {findDevices.map(item => <div key={item.id} className='search__find'><NavLink
                            to={`/signet/devices/${item.producer.toLowerCase()}/${item.slug.toLowerCase()}`}>
                            <p>{item.producer} {item.name}</p></NavLink></div>)}
                    </div>
                    : <div></div>
                }
            </div>
            <div>
                {
                    findLiquids.length || findLiquidsTitle.length
                        ? <div>
                            <p>-- Жидкость --</p>
                            {
                                findLiquids.map(item => <div key={item.id} className='search__find'>
                                    <p>{item.ruler} {item.name} -</p><p style={item.cooler || item.double_cooler ? {color: '#4574ed'} : {}}>{item.title}</p></div>)
                            }
                            {
                                findLiquidsTitle.map(item => <div
                                    key={item.id} className='search__find'> <p>{item.ruler} {item.name} -</p><p style={item.cooler || item.double_cooler ? {color: '#4574ed'} : {}}>{item.title}</p></div>)
                            }
                        </div>
                        : <div></div>
                }
            </div>
            <div>
                {findRulers.length
                    ? <div>
                        <p>-- Линейка --</p>
                        {findRulers.map(item => <div key={item.id} className='search__find'><NavLink
                            to={`/signet/liquids/${item.slug_producer}/${item.slug}`}><p>{item.producer} {item.name}</p></NavLink>
                        </div>)}
                    </div>
                    : <div></div>

                }
            </div>
            {/*<div>
                <p>-- Одноразка --</p>
            </div>*/}
        </div>
    );
};

export default Search;