import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom'
import NavTitle from "../../../components/nav-title";

const LiquidsRulers = ({liquids}) => {

    const params = useParams()

    const findRulerLiquids = useMemo(() => {
        return liquids.filter(item => item.slug_producer.toLowerCase() === params.product)
    }, [params.product])

    return (
        <div>
            { findRulerLiquids.length
                ?   findRulerLiquids.map(({id, name, slug}) => <div key={id}>
                    <NavTitle title={name} slug={slug}/>
            </div>)
                : <div>NEtu</div>
            }
        </div>
    );
};

export default LiquidsRulers;