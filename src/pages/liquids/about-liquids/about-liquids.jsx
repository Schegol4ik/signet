import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom'
import AboutRuler from "../../../components/about-ruler/about-ruler";
import './about-liquids.scss'

const AboutLiquids = ({liquids, liquidsRuler}) => {
    const params = useParams()

    const findLiquids = useMemo(() => {
        return liquids.filter(item => item.slug.toLowerCase() === params.item.toLowerCase())
    },[params.item])
    const findRulers = useMemo(() => {
        return liquidsRuler.filter(item => item.slug.toLowerCase() === params.item.toLowerCase())
    }, [params.item])



    return (
        <div className='wrapper--about-liquids'>
            <AboutRuler findRulers={findRulers}/>
            {findLiquids.length
                ? <div>
                    {findLiquids.map(({id, ruler, name, title, cooler, double_cooler}) => <div key={id}>
                        <div className='about-liquids__title'>
                            <h4>{ruler} {name} - </h4>
                            <h4 style={cooler || double_cooler ? {color: '#4574ed'} : {}}>{title}</h4>
                            <h3 style={double_cooler ? {} : {display: 'none'}}>ICE X 2</h3>
                        </div>
                    </div>)}
                </div>
                : <div>Пока нету(</div>
            }
        </div>
    );
};

export default AboutLiquids;