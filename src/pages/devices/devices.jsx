import React from 'react'
import NavTitle from "../../components/nav-title";
import './devices.scss'
import Back from "../../components/back/back";

const Devices = ({devices}) => {


  return (
    <div className='wrapper--devices'>
            <Back to='/'/>
            <h1>Производители</h1>
        {devices.map(({name, slug, id}) => <div key={id} >
           <NavTitle title={name} slug={slug}/>
        </div>)}
    </div>
  )
}

export default Devices