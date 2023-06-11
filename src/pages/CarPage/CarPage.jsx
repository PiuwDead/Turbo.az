import './CarPage.scss'
export default function CarPage() {
  return (
    <div className='carInfo container'>
      <div className='left'>
        <h2>Volkswagen Tayron, 1.4 L, 2022 il, yeni</h2>
        <img src="https://turbo.azstatic.com/uploads/f460x343/2023%2F05%2F03%2F12%2F32%2F22%2Fe2fc5d6f-4f58-44af-a014-abf40189c419%2F35669_ZdVaHYb_SjxN_O_I4nYSNQ.jpg" alt="" />
        <p>Yeniləndi: 31.05.2023 
           Baxışların sayı: 3169
        </p>
        <hr />
        <div className='tables'>
        <table className='table'>
          <tr>
            <th className='th1'>Şəhər</th>
            <th>Bakı</th>
          </tr>
          <tr>
            <th className='th1'>Marka</th>
            <th>Volkswagen</th>
          </tr>
          <tr>
            <th className='th1'>Model</th>
            <th>Tayron</th>
          </tr>
          <tr>
            <th className='th1'>Buraxılış ili</th>
            <th>2022</th>
          </tr>
          <tr>
            <th className='th1'>Ban növü</th>
            <th>Offroader / SUV</th>
          </tr>
          <tr>
            <th className='th1'>Rəng</th>
            <th>Ağ</th>
          </tr>          
          <tr>
            <th className='th1'>Mühərrik</th>
            <th>1.4 L/218 a.g./Plug-in Hibrid</th>
          </tr>
          <tr>
            <th className='th1'>Yürüş</th>
            <th>0 km</th>
          </tr>
        </table>
        <table className='table'>
          <tr>
            <th className='th1'>Sürətlər qutusu</th>
            <th>Robotlaşdırılmış</th>
          </tr>
          <tr>
            <th className='th1'>Ötürücü</th>
            <th>Ön</th>
          </tr>
          <tr>
            <th className='th1'>Yeni</th>
            <th>Bəli</th>
          </tr>
          <tr>
            <th className='th1'>Vəziyyəti</th>
            <th>Vuruğu yoxdur, rənglənməyib</th>
          </tr>
        </table>
        </div>

      </div>
      <div className='right'>
        <div className='right__inner'>
          <h2>73 900 AZN</h2>
          <hr />
          <div className='button'>
            <button className='button__inner'>Nömrəni göstər</button>
          </div>
          <hr />
          <p className='nameAndInfo'>Volkswagen</p>
          <p className='nameAndInfo'>Volkswagen avtomobillərin Azərbaycandakı rəsmi və yeganə dileri "Azərbaycan Automobiles" LTD</p>
          <hr />
          <p className='timeAndAdress'>Bazar ertəsi-Cümə: 10:00–19:00; Şənbə günü: 10:00-18:00</p>
          <p className='timeAndAdress'>Bakı ş., Nəcəfqulu Rəfiyev küçəsi 29</p>
          <div className='button'>
            <button className='moveSalonButton'>Salona keç</button>
          </div>
        </div>

      </div>
    </div>

  )
}