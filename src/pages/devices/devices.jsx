import React from 'react'
import './devices.scss'
import Back from "../../components/back/back";
import ProducerObject from "../../components/producer-object/producer-object";

const Devices = ({devices}) => {


  return (
    <div className='wrapper--devices'>
            <Back to='/signet'/>
            <h1>Производители</h1>
        {devices.map(({name, slug, id}) => <div key={id} className='devices__objects'>
           <ProducerObject title={name} to={slug}/>
        </div>)}
    </div>
  )
}

export default Devices