import React, {useMemo} from 'react';
import {NavLink, useParams} from "react-router-dom";
import './device-product.scss'
import Back from "../../../components/back/back";

const DeviceProduct = ({devices}) => {

    const param = useParams()

    const filterDevices = useMemo(() => {
        return devices.filter(item => item.producer.toLowerCase() === param.product.toLowerCase())
    }, [param.product])


    return (
        <div className='wrapper--devices__product'>
            <Back to='/signet/devices'/>
            <h1>Модели</h1>
            {filterDevices
                ? filterDevices.map(item => <div key={item.id}>
                    <NavLink to={`/signet/devices/${item.producer.toLowerCase()}/${item.slug}`}><h4>{`${item.producer} ${item.name}`}</h4></NavLink>
                </div>)
                : <div/>}
        </div>
    );
};

export default DeviceProduct;