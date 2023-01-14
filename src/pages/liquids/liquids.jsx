import React from 'react'
import NavTitle from "../../components/nav-title";
import './liquids.scss'
import Back from "../../components/back/back";
import ProducerObject from "../../components/producer-object/producer-object";

const Liquids = ({liquids}) => {

    return (
        <div className='wrapper--liquids'>
            <Back to='/signet'/>
            <h1>Производители</h1>
            {liquids.map(({id, slug, title}) => <div key={id} className='liquids__producers'>
                <ProducerObject to={slug} title={title}/>
            </div>)}
        </div>
    )
}

export default Liquids