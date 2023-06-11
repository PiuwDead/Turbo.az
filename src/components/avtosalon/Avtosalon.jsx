import { Link, Outlet } from "react-router-dom";


const Avtosalon = ({avtosalon}) => {
    const {name,describtion,logo,adress, tels,workTime ,cars} = avtosalon;
    return (
        <div className='avtosalon'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='info'>
                <h2>{name}</h2>
                <p>{describtion}</p>
                <p>{tels}</p>
                <p>{adress}</p>
                <p>{workTime}</p>
                <Link to='/avtosalon'>See Avtosalon</Link>

            </div>
            <Outlet/>
        </div>
        
    )
}

export default Avtosalon