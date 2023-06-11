import { useEffect, useState } from 'react'
import Car from '../Car/Car'
import './Cars.scss'
import { carsData } from '../../data/carsData'
export default function Cars() {
    const [cars, setCars] = useState([])
    useEffect(() => {
        function getCarsData() {
            setCars(carsData)
        }
        getCarsData()
    },[])
    return (
        <div className='cars'>
            {cars.map(function(car, index){
                return (
                    <Car key={index} car={car} />
                )
            })}
        </div>
    )
}