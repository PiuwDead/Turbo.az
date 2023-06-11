import { useState } from 'react';
import Avtosalon from '../avtosalon/Avtosalon'
import './AvtosalonsList.scss'
export default function AvtosalonsList() {
  const avtosalonsData = [
    {
      logo: 'https://i.pinimg.com/236x/b1/e9/57/b1e9574195198de342a63907f30e947d.jpg',
      name: "Abşeron Mercedes-Benz",
      describtion: "Abşeron Avtomobil Mərkəzi Mercedes-Benz markasının Azərbaycandakı rəsmi dileridir.",
      adress: "Bakı ş., Sumqayıt şossesi, 6-cı km.",
      tels: [" 050 289 09 48", "055 555 55 55"],
      workTime: "Bazar ertəsi-Cümə: 09:00-18:00; Şənbə: 10:00-16:00",
      cars: [
        {

        }
      ]
    },
    {
      logo: 'https://i.pinimg.com/236x/b4/a3/8b/b4a38b8c0716f0012ce4a53dd15882b2.jpg',
      name: "Autolux Azerbaijan - Dodge",
      describtion: "DODGE avtomobillərinin Azərbaycanda rəsmi düstribüteri Avtolüks Azərbaycan MMC-dir. Avtomobillərə 3 il və ya 60.000 km rəsmi istehalçı zəmanəti verilir.",
      adress: "Bakı ş., Nəsimi r., Ü.Hacıbəyli küç. 57",
      tels: [" 050 289 09 48", "055 555 55 55"],
      workTime: "Hər gün: 10:00–19:00",
      cars: [
        {

        }
      ]
    },
    {
      logo:'https://i.pinimg.com/236x/1c/15/fb/1c15fb214bc3413f1fe1101201657586.jpg',
      name: "Audi Azərbaycan",
      describtion: "Dream Auto MMC şirkəti Audi brendinin Azərbaycanda rəsmi distribütorudur.",
      adress: "Bakı ş., Xətai r., Babək pr. 43A",
      tels: [" 050 289 09 48", "055 555 55 55"],
      workTime: "Hər gün: 09:00–19:00",
      cars: [
        {

        }
      ]
    },
    {
      logo:'https://i.pinimg.com/236x/d5/a0/81/d5a0812947d27f6255c8237e1ff9e0a1.jpg',
      name: "Autolux Azerbaijan - Jaguar",
      describtion: "JAGUAR avtomobillərinin Azərbaycanda rəsmi distribütoru Avtolüks Azərbaycan MMC-dir.",
      adress: "Bakı ş., Nərimanov r., Zaur Nudirəliyev küç., 8",
      tels: [" 050 289 09 48", "055 555 55 55"],
      workTime: "Hər gün: 10:00–19:00",
      cars: [
        {

        }
      ]
    }
  ];
  const [avtosalons, setAvtosalons] = useState(avtosalonsData);
  return (
    <div className="avtosalonsList">
      {avtosalons.map(function (avtosalon, index) {
        return <Avtosalon key={index} avtosalon={avtosalon} />
      })}




    </div>
  )
}

