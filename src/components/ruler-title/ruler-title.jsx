import React from 'react';
import './ruler-title.scss'

const RulerTitle = ({title, name, array}) => {
    return (
        <div className='wrapper__ruler-title'>
            <h3>{title}</h3>
            {array.map((item) => <div key={item.id}>
                <h4>{item[name]}</h4>
            </div>)}
        </div>
    );
};

export default RulerTitle;