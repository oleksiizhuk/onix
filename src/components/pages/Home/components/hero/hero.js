import React from 'react';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import Spinner from '../spinner/spinner';
import '../../../../../scss/pages/home/component/hero.scss';

const hero = (props) => {
    const {heroItems, heroError, loadingHero} = props;
    const error = heroError ? <ErrorIndicator/> : null;
    const items = (loadingHero || !error) ? heroItems : null;
    const spinner = (!loadingHero) ? <Spinner/> : null;
    return (
        <div className='section-6'>
            <div className='container'>
                <ul className='draggable__ul'>
                    {error}
                    {spinner}
                    {items}
                </ul>
            </div>
        </div>
    )

};
export default hero;