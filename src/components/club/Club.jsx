import { useState } from 'react'
import './Club.scss'

export default function Club({ name, coach, logo }) {
    const [goal, setGoal] = useState(0)
    function minus() {
        setGoal((prev)=> --prev)
    }
    function plus() {
        setGoal((prev)=> ++prev)
    }
    return (     
        <div className='club'>
            <img className='logo' src={logo} alt="" />
            <div>
                Name: {name}
            </div>
            <div>
                Coach: {coach}
            </div>
            <div>

                <button onClick={minus}>-</button>
                {goal}
                <button onClick={plus}>+</button>

            </div>

        </div>
    )
}