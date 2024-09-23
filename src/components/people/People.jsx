import Peoples from '../../components/people/peoples/Peoples';
import { BottomPeople } from './bottomPeople/BottomPeople';
import { TopPeoples } from './topPeople/TopPeoples';
import './People.css';
import { PeopleButtons } from './peopleButtons/PeopleButtons';
import { useRef } from 'react';

export const People = () => {
    const peopleLightRef = useRef(null); 

    const scrollLeft = () => {
        if (peopleLightRef.current) {
            peopleLightRef.current.scrollBy({
                left: -1221, 
                behavior: 'smooth', 
            });
        }
    };

    const scrollRight = () => {
        if (peopleLightRef.current) {
            peopleLightRef.current.scrollBy({
                left: 1221, 
                behavior: 'smooth', 
            });
        }
    };

    return (
        <div className=''>
            <Peoples />
            <div className='people-light container' ref={peopleLightRef}>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
                <div className='card-people'>
                    <TopPeoples />
                    <BottomPeople />
                </div>
            </div>
            <PeopleButtons scrollLeft={scrollLeft} scrollRight={scrollRight} />
        </div>
    );
};
