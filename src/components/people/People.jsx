import Peoples from '../../components/people/peoples/Peoples'
import { BottomPeople } from './bottomPeople/BottomPeople'
import { TopPeoples } from './topPeople/TopPeoples'
import './People.css'
import { PeopleButtons } from './peopleButtons/PeopleButtons'

export const People = () => {
    return (
        <div className=''>
            <Peoples />
            <div className='people-light'>
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
            <PeopleButtons />
        </div>
    )
}
