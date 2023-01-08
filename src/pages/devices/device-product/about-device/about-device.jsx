import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom'

const AboutDevice = ({devices}) => {

    const param = useParams()

    const filterDevices = useMemo(() => {
        return devices.filter(item => item.slug.toLowerCase() === param.item.toLowerCase())
    }, [param.item])


    return (
        <div>
            {filterDevices
                ? filterDevices.map(item => <div key={item.id}>
                    {item.name}
                    </div>)
                : <div>Netu</div>
            }
        </div>
    );
};

export default AboutDevice;