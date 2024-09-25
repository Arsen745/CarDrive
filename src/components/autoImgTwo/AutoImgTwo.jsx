import "./AutoImgTwo.css"
import audiTwo from "../../assets/png/AUDI.png"
// import audiCar from '../../assets/svg/audicar.svg'
import audiCar1 from '../../assets/svg/audicar.svg1.svg'
import audiCar2 from '../../assets/svg/audicar.svg2.svg'
const AutoImgTwo = () => {
    return (
        <div>
            <div className="audi-car">
                <img src={audiTwo} alt="audi car" />
                <div className="small-cars">
                    <div className="audi-cars">
                        <img src={audiCar2} alt="" />
                        <img src={audiCar1} alt="" />
                        <img src={audiCar2} alt="" />
                        <img src={audiCar1} alt="" />
                        <img src={audiCar2} alt="" />
                    </div>
                    <div className="audi-cars">
                        <img src={audiCar2} alt="" />
                        <img src={audiCar1} alt="" />
                        <img src={audiCar2} alt="" />
                        <img src={audiCar1} alt="" />
                        <img src={audiCar2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoImgTwo;