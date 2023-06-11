import './Home.scss'
import Cars from '../../components/Cars/Cars'
export default function Home() {
    return (
        <div className='home'>
            <div className='reklam_left'>
                <img src="./images/Home/reklam_left.png" alt="" />
            </div>
            <div className=' container'>
                <form className="filters container">
                    <div>
                        <label htmlFor="price">Price</label>
                        <select name="price" id="price">
                            <option value='90 000'>90 000</option>
                            <option value='80 000'>80 000</option>
                            <option value='70 000'>70 000</option>
                            <option value='60 000'>60 000</option>
                            <option value='50 000'>50 000</option>
                            <option value='40 000'>40 000</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="marka">Marka</label>
                        <select name="marka" id="marka">
                            <option value="mercedes">Mercedes</option>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                            <option value="volkswagen">Volkswagen</option>
                            <option value="toyota">Toyota</option>
                            <option value="nissan">Nissan</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="model">Model</label>
                        <select name="model" id="model">
                            <option value="rx 350">RX 350</option>
                            <option value="camry">Camry</option>
                            <option value="x5">X5</option>
                            <option value="e 300">E 300</option>
                            <option value="civic">Civic</option>
                            <option value="golf">Golf</option>
                            <option value="focus">Focus</option>
                            <option value="model 3">Model 3</option>
                            <option value="xc 60">XC 60</option>
                            <option value="a4">A4</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="year">Year</label>
                        <select name="year" id="year">
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <select name="city" id="city">
                            <option value="baku">Baku</option>
                            <option value="new york">New York</option>
                            <option value="istanbul">Istanbul</option>
                            <option value="berlin">Berlin</option>
                            <option value="paris">Paris</option>
                            <option value="sydney">Sydney</option>
                        </select>
                    </div>
                </form>
                <Cars />

            </div>
            <div className='reklam_right'>
                <img src="./images/Home/reklam_right.png" alt="" />
            </div>
        </div>

    )
}