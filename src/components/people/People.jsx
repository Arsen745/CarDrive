import Peoples from '../../components/people/peoples/Peoples'
import { BottomPeople } from './bottomPeople/BottomPeople'
import { TopPeoples } from './topPeople/TopPeoples'
import './People.css'
import { PeopleButtons } from './peopleButtons/PeopleButtons'

export const People = () => {
    return (
        <div>
            <Peoples />
            <div className='people-light container'>
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
