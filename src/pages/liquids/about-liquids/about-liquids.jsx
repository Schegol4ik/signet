import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom'

const AboutLiquids = ({liquids}) => {
    const params = useParams()

    const findLiquids = useMemo(() => {
        return liquids.filter(item => item.slug.toLowerCase() === params.item.toLowerCase())
    },[params.item])


    return (
        <div>
            {findLiquids.length
                ? <div>
                    {findLiquids.map(({id, ruler, name, title}) => <div key={id}>
                        <div>{ruler} {name} - {title}</div>
                    </div>)}
                </div>
                : <div>Пока нету(</div>
            }
        </div>
    );
};

export default AboutLiquids;