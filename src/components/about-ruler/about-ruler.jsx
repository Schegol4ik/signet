import React from 'react';
import './about-ruler.scss'
import Back from "../back/back";

const AboutRuler = ({findRulers}) => {

    console.log(findRulers)
    return (
        <div>
            {findRulers.map(({nicotine, nicotine_type, vg_pg, volume, id, name, producer,slug_producer}) => <div
                className='wrapper--about-ruler' key={id}>
                <Back to={`/signet/liquids/${slug_producer}`}/>
                <h1>{producer} - {name}</h1>
                <div className='about-ruler--options'>
                    <div className='options__current'>
                        <h3>Никотин</h3>
                        <p>{nicotine}</p>
                    </div>
                    <div className='options__current'>
                        <h3>Тип никотина</h3>
                        <p>{nicotine_type}</p>
                    </div>
                    <div className='options__current'>
                        <h3>VG/PG</h3>
                        <p>{vg_pg}</p>
                    </div>
                    <div className='options__current'>
                        <h3>Объем</h3>
                        <p>{volume}</p>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default AboutRuler;