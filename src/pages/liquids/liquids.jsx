import React from 'react'
import NavTitle from "../../components/nav-title";

const Liquids = ({liquids}) => {

  return (
    <div>
        {liquids.map(({id, slug, title}) => <div key={id}>
            <NavTitle slug={slug} title={title}/>
        </div>)}
    </div>
  )
}

export default Liquids