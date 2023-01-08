import React, {useMemo} from 'react';
import {NavLink, useParams} from "react-router-dom";

const DeviceProduct = ({devices}) => {

    const param = useParams()

    const filterDevices = useMemo(() => {
        return devices.filter(item => item.producer.toLowerCase() === param.product.toLowerCase())
    }, [param.product])


    return (
        <div>
            {filterDevices
                ? filterDevices.map(item => <div key={item.id}>
                    <NavLink to={`/devices/${item.producer.toLowerCase()}/${item.slug}`}>{`${item.producer} ${item.name}`}</NavLink>
                </div>)
                : <div/>}
        </div>
    );
};

export default DeviceProduct;