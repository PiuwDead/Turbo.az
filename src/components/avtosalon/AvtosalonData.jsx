import './AvtosalonData.scss'
export default function AvtosalonData({avtosalon})  {
    return(
        <div>
            <div className='avtosalon'>
                <div className='left'>
                    <img src="https://i.pinimg.com/236x/77/7c/c6/777cc6510ba7183ecb34e0450d3d9679.jpg" alt="" />
                    <button className='button'>10 Elan</button>
                </div>
                <div className='medium'>
                    <h2>Abşeron Mercedes-Benz</h2>
                    <p>Abşeron Avtomobil Mərkəzi Mercedes-Benz markasının Azərbaycandakı rəsmi dileridir.</p>
                    <p>Bakı ş., Sumqayıt şossesi, 6-cı km.</p>
                </div>
                <div className='right'>
                    <div>
                        <p>(050) 289-09-85 (051) 232-87-70</p>
                        <p>(050) 289-09-80</p>
                    </div>
                    <div>
                        <p>Bazar ertəsi-Cümə: 09:00-18:00; Şənbə: 10:00-16:00</p>
                    </div>
                </div>

            </div>
        </div>
    )
}