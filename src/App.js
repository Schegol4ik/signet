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
import "./App.scss";
import {useSelector} from "react-redux";
import DeviceProduct from "./pages/devices/device-product/device-product";
import AboutDevice from "./pages/devices/device-product/about-device/about-device";
import LiquidsRulers from "./pages/liquids/liquids-rulers/liquids-rulers";
import AboutLiquids from "./pages/liquids/about-liquids/about-liquids";

export default function App() {

    const liquids = useSelector(state => state.liquidsReducer)
    const devices = useSelector(state => state.devicesReducer)


    return (
        <div className='wrapper__app'>
            <Header devices={devices} liquids={liquids}/>
            <Routes>
                <Route path='/signet' element={<Main/>}/>
                <Route path='/*' element={<ErrorPage/>}/>
                <Route path='/signet/devices' element={<Devices devices={devices.producers}/>}/>
                <Route path='/signet/devices/:product' element={<DeviceProduct devices={devices.devices}/>} />
                <Route path='/signet/devices/:product/:item' element={<AboutDevice devices={devices.devices}/>} />
                <Route path='/signet/liquids' element={<Liquids liquids={liquids.producer}/>}/>
                <Route path='/signet/liquids/:product' element={<LiquidsRulers liquids={liquids.rulers}/>}/>
                <Route path='/signet/liquids/:product/:item' element={<AboutLiquids liquids={liquids.liquids} liquidsRuler={liquids.rulers}/>}/>
                <Route path='/signet/others' element={<Others/>}/>
                <Route path='/signet/one_shots' element={<OneShots/>}/>
            </Routes>
            {/*<Footer/>*/}
        </div>
    );
}
