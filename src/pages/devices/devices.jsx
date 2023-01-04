import React from 'react'
import MainObject from "../../components/main-object/main-object";

const Devices = () => {

  return (
    <div>
      <MainObject to='/devices/voopoo' title='Voopoo'/>
      <MainObject to='/devices/vaporesso' title='Vaporesso'/>
      <MainObject to='/devices/smoant' title='Smoant'/>
      <MainObject to='/devices/joyetech' title='Joyetech'/>
      <MainObject to='/devices/geekvape' title='GeekVape'/>
    </div>
  )
}

export default Devices