import React from 'react'
import NavTitle from "../../components/nav-title";

const Devices = ({devices}) => {


  return (
    <div>
        {devices.map(({name, slug, id}) => <div key={id} >
           <NavTitle title={name} slug={slug}/>
        </div>)}
    </div>
  )
}

export default Devices