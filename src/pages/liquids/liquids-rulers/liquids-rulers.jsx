import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom'
import NavTitle from "../../../components/nav-title";
import './liquids-rulers.scss'
import RulerTitle from "../../../components/ruler-title/ruler-title";
import Back from "../../../components/back/back";

const LiquidsRulers = ({liquids}) => {

    const params = useParams()

    const findRulerLiquids = useMemo(() => {
        return liquids.filter(item => item.slug_producer.toLowerCase() === params.product)
    }, [params.product])

    return (
        <div className='wrapper--liquids-rulers'>
            <Back to='/signet/liquids'/>
            <div className='rulers__title'>
                <div>
                    <h3>Линейка</h3>
                    {
                        findRulerLiquids.map(({id, name, slug}) => <div
                            key={id} className='title__nav'>
                            <NavTitle title={name} slug={slug} />

                        </div>)
                    }
                </div>
                <RulerTitle array={findRulerLiquids} title='Никотин' name='nicotine'/>
                <RulerTitle array={findRulerLiquids} title='Тип' name='nicotine_type'/>
                <RulerTitle array={findRulerLiquids} title='VG/PG' name='vg_pg'/>
                <RulerTitle array={findRulerLiquids} title='Объем' name='volume'/>
            </div>


        </div>
    );
};

export default LiquidsRulers;