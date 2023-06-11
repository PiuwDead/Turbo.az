import './NewCarAd.scss'

export default function NewCarAd() {
    return (
        <div className="newCarAd">
            <div className="newCarAd__inner container">
                <form className="form">
                    <h2>
                        ELAN YERLƏŞDİRMƏK
                    </h2>
                    <div>
                        <ul>
                            <li>
                                Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc oluna bilər.
                            </li>
                            <li>
                                Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng) ödənişlidir.
                            </li>
                            <li>
                                Elanınızı saytın ön sıralarında görmək üçün "İrəli çək" xidmətindən istifadə edin.
                            </li>
                        </ul>
                    </div>
                    <div className='formPart1'>
                        <div className='formLeft'>
                            <div className='formGroup'>
                                <label>Marka</label>
                                <select name="marka" id="marka">
                                    <option value="mercedes">Mercedes</option>
                                    <option value="bmw">BMW</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Model</label>
                                <select name="marka" id="marka">
                                    <option value="mercedes">Mercedes</option>
                                    <option value="bmw">BMW</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Ban növü</label>
                                <select name="marka" id="marka">
                                    <option value="avtobus">Avtobus</option>
                                    <option value="dartqı">Dartqı</option>
                                    <option value="furqon">Furqon</option>
                                    <option value="hetçbek">Hetçbek</option>
                                    <option value="kabriolet">Kabriolet</option>
                                    <option value="karvan">Karvan</option>
                                    <option value="kupe">Kupe</option>
                                    <option value="kvadrosiki">Kvadrosiki</option>
                                    <option value="liftbek">Liftbek</option>
                                    <option value="mikroavtobus">Mikroavtobus</option>
                                    <option value="minivan">Minivan</option>
                                    <option value="moped">Moped</option>
                                    <option value="motosiklet">Motosiklet</option>
                                    <option value="suv">SUV</option>
                                    <option value="pikap">Pikap</option>
                                    <option value="qolfkar">Qolfkar</option>
                                    <option value="rodster">Rodster</option>
                                    <option value="sedan">Sedan</option>
                                    <option value="universal">Universal</option>
                                    <option value="van">Van</option>
                                    <option value="yük maşını">Yük maşını</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Rəng</label>
                                <select name="rəng" id="rəng">
                                    <option value="qara">Qara</option>
                                    <option value="yaş asfalt">Yaş Asfalt</option>
                                    <option value="boz">Boz</option>
                                    <option value="gümüşü">Gümüşü</option>
                                    <option value="ağ">Ağ</option>
                                    <option value="bej">Bej</option>
                                    <option value="tünd qırmızı">Tünd Qırmızı</option>
                                    <option value="qırmızı">Qırmızı</option>
                                    <option value="çəhrayı">Çəhrayı</option>
                                    <option value="narıncı">Narıncı</option>
                                    <option value="qızılı">Qızılı</option>
                                    <option value="sarı">Sarı</option>
                                    <option value="yaşıl">Yaşıl</option>
                                    <option value="mavi">Mavi</option>
                                    <option value="göy">Göy</option>
                                    <option value="bənövşəyi">Bənövşəyi</option>
                                    <option value="qəhvəyi">Qəhvəyi</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Neçənci sahibisiniz?</label>
                                <select name="neçənci sahibisiniz?" id="neçənci sahibisiniz?">
                                    <option value="birinci">Birinci</option>
                                    <option value="ikinci">İkinci</option>
                                    <option value="üçüncü">Üçüncü</option>
                                    <option value="dördüncü və ya daha çox">Dördüncü və ya daha çox</option>
                                </select>
                            </div>
                        </div>

                        <div className='formRight'>
                            <div className='formGroup'>
                                <label>Yanacaq növü</label>
                                <select name="Yanacaq növü" id="Yanacaq növü">
                                    <option value="benzin">Benzin</option>
                                    <option value="dizel">Dizel</option>
                                    <option value="qaz">Qaz</option>
                                    <option value="hibrid">Hibrid</option>
                                    <option value="plug-in hibrid">Plug-in Hibrid</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Ötürücü</label>
                                <select name="ötürücü" id="ötürücü">
                                    <option value="arxa">Arxa</option>
                                    <option value="ön">Ön</option>
                                    <option value="tam">Tam</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Sürətlər qutusu</label>
                                <select name="sürətlər qutusu" id="sürətlər qutusu">
                                    <option value="mexaniki">Mexaniki</option>
                                    <option value="avtomat">Avtomat</option>
                                    <option value="robotlaşdırılmış">Robotlaşdırılmış</option>
                                    <option value="variator">Variator</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Ötürücü</label>
                                <select name="ötürücü" id="ötürücü">
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Hansı bazar üçün yığılıb</label>
                                <select name="Hansı bazar üçün yığılıb" id="Hansı bazar üçün yığılıb">
                                    <option value="amerika">Amerika</option>
                                    <option value="avropa">Avropa</option>
                                    <option value="dubay">Dubay</option>
                                    <option value="koreya">Koreya</option>
                                    <option value="rusiya">Rusiya</option>
                                    <option value="avropa">Yaponiya</option>
                                    <option value="rəsmi diler">Rəsmi Diler</option>
                                    <option value="digər">Digər</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}