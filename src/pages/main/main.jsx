import React from 'react'
import MainObject from '../../components/main-object/main-object'
import './main.scss'


const Main = () => {
  return (
    <div className='wrapper__main'>
      <div className='objects__main'> 
        <MainObject to='devices' title='Устройства'/>
        <MainObject to='liquids' title='Жидкости'/>
      </div>
      <div className='objects__main'>
        <MainObject to='one_shots' title='Одноразки'/>
        <MainObject to='others' title='Прочее'/>
      </div>
       
    </div>
  )
}

export default Main