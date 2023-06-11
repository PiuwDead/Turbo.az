import { useState } from 'react';
import './Car.scss'
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
export default function Car({ car }) {
    const [favorite, setFavorite] = useState(false)
    function toggleFavorite() {
        setFavorite((prev) => !prev)
    }
    return (
            <div className="car">
                <div className='carImg'>
                    <div className='favoriteIcon'>
                    {favorite ? <AiFillHeart onClick={toggleFavorite}  className='full'/> :  <AiOutlineHeart onClick={toggleFavorite} className='empty'/>}
                    </div>
                    <img className='carImage' src={car.image}/>
                </div>
                <div>
                    <h2>{car.price}$</h2>
                    <p>{car.brand} {car.model}</p>
                    <p>{car.year} {car.engine} </p>
                    <p>{car.city}</p>
                    {/* <p>Color: White</p>
                    
                    <p>GearBox: Automatic</p>
                    <p>Fuel Type: Gasoline</p>
                    <p>Number Of Seats: 5</p> */}
                </div>
            </div>
    )
}


