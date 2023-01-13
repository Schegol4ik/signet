import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom'
import './about-device.scss'
import Back from "../../../../components/back/back";

const AboutDevice = ({devices}) => {

    const param = useParams()

    const filterDevices = useMemo(() => {
        return devices.filter(item => item.slug.toLowerCase() === param.item.toLowerCase())
    }, [param.item])

    return (
        <div className='wrapper--about-devices'>
            {filterDevices
                ? filterDevices.map((item) => <div key={item.id} className='about-devices__options'>
                    <Back to={`/devices/${item.producer.toLowerCase()}`}/>
                    <h1>{item.producer} {item.name}</h1>
                    <div className="options__param">
                        <h3>Материал корпуса</h3>
                        <p>{item.material_box}</p>
                    </div>
                    <div className="options__param">
                        <h3>Материал картриджа</h3>
                        <p>{item.material_cartridge}</p>
                    </div>
                    <div className="options__param">
                        <h3>Емкость картриджа</h3>
                        <p>{item.cartrige_ml} мл</p>
                    </div>
                    <div className="options__param">
                        <h3>Аккумулятор</h3>
                        <p>{item.accum} mAh</p>
                    </div>
                    <div className="options__param">
                        <h3>Зарядка</h3>
                        <p>{item.charget}</p>
                    </div>
                    <div className="options__param">
                        <h3>Мощность</h3>
                        <p>{item.power} W</p>
                    </div>
                    <div className="options__param">
                        <h3>Обдув</h3>
                        <p>{item.blowing}</p>
                    </div>
                    <div className="options__param">
                        <h3>Функции</h3>
                        <p>{item.functions}</p>
                    </div>
                    <div className="options__param">
                        <h3>Комплектация</h3>
                        <p>{item.eqpiment}</p>
                    </div>
                    <div className="options__param">
                        {item.min_resistance
                            ? <div className="options__param">
                                <h3>Минимально поддерживаемое сопротивление</h3>
                                <p>{item.min_resistance} Ом</p></div>
                            : <div></div>
                        }

                    </div>
                    <div className="options__param">
                        <h3></h3>
                        <p></p>
                    </div>
                </div>)
                : <div>Netu</div>
            }
        </div>
    );
};

export default AboutDevice;