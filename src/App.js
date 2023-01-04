import React from "react";
import {Route, Routes} from 'react-router-dom'
import Main from './pages/main/main'
import Footer from './components/footer/footer'
import Devices from './pages/devices/devices'
import Others from './pages/others/others'
import OneShots from './pages/one-shots/one-shots'
import Liquids from './pages/liquids/liquids'
import Header from './components/header/header'
import ErrorPage from './components/error-page'
import "./style.scss";
import {useSelector} from "react-redux";
import DeviceProduct from "./pages/devices/device-product/device-product";
import AboutDevice from "./pages/devices/device-product/about-device/about-device";

export default function App() {

    const liquids = useSelector(state => state.liquidsReducer)
    const devices = useSelector(state => state.devicesReducer)


    return (
        <div className='wrapper__app'>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/*' element={<ErrorPage/>}/>
                <Route path='/devices' element={<Devices devices={devices}/>}/>
                <Route path='/devices/:product' element={<DeviceProduct devices={devices}/>} />
                <Route path='/devices/:product/:item' element={<AboutDevice devices={devices}/>} />
                <Route path='/liquids' element={<Liquids liquids={liquids}/>}/>
                <Route path='/others' element={<Others/>}/>
                <Route path='/one_shots' element={<OneShots/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}
