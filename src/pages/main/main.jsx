import React from 'react'
import MainObject from '../../components/main-object/main-object'
import './main.scss'


const Main = () => {
  return (
    <div className='wrapper__main'>
      <div className='objects__main'> 
        <MainObject to='devices' title='Устройства' url='https://img.freepik.com/premium-photo/different-types-of-vaping-devices-on-black-background_256506-63.jpg'/>
        <MainObject to='liquids' title='Жидкости' url='https://cdn.create.vista.com/api/media/small/151772234/stock-photo-vape-and-dj-club-concept'/>
      </div>
      <div className='objects__main'>
        <MainObject to='one_shots' title='Одноразки' url='https://fill.by/filemanager/clients/store3193/uploads/Fill%20JOY/fill-joy-1500-ice-mango-lamp.jpg'/>
        <MainObject to='others' title='Прочее' url='https://phonoteka.org/uploads/posts/2022-07/thumbs/1658242767_27-phonoteka-org-p-veip-oboi-34.jpg'/>
      </div>
       
    </div>
  )
}

export default Main