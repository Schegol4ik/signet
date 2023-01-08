import React from 'react';
import './search.scss'
import {useFilter} from "../../hooks/useFilter";

const Search = ({value, devices, liquids}) => {

    const findDevices = useFilter(devices.devices, value, 'name')
    const findLiquids = useFilter(liquids.liquids, value, 'name')
    const findLiquidsTitle = useFilter(liquids.liquids, value, 'title')
    const findRulers = useFilter(liquids.rulers, value, 'name')
    console.log()
    return (
        <div className='wrapper--search'>
            <div>
                {findDevices.length
                    ?   <div>
                        <p>-- Устройства --</p>
                        {findDevices.map(item => <div>{item.producer} {item.name}</div>)}
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
                                findLiquids.map(item => <div>{item.ruler} {item.name} - {item.title}</div>)
                                &&
                                findLiquidsTitle.map(item => <div>{item.ruler} {item.name} - {item.title}</div>)
                            }
                        </div>
                        : <div></div>
                }
            </div>
            <div>
                {findRulers.length
                    ?   <div>
                        <p>-- Линейка --</p>
                        {findRulers.map(item => <div>{item.producer} {item.name}</div>)}
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