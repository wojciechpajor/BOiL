import React from "react"
import {useState} from 'react'

const DataInput = () => {
    class Data {
        jkz = [2];
        podaz = [2];
        popyt = [3];
        cenaSprzedazy = [3];
        D1 = [3];
        D2 = [3];
    }


    const [inputData, setInputData] = useState(new Data);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const results = () => {
        return (
            <div>Graphic representation</div>
        )
    }

    const inputWindow = () => {
        return (
            <div>
                <h3>Dane dostawców :</h3>
                <form>
                    <div className="row">
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.jkz[0] = e.target.value}
                                   className="form-control" placeholder="jednostkowy koszt zakupu"/>

                        </div>
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.podaz[0] = e.target.value}
                                   className="form-control" placeholder="Podaż"/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.jkz[1] = e.target.value}
                                   className="form-control" placeholder="jednostkowy koszt zakupu"/>

                        </div>
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.podaz[1] = e.target.value}
                                   className="form-control" placeholder="Podaż"/>

                        </div>
                    </div>
                </form>
                <h3>Dane Odbiorców :</h3>
                <form>
                    <div className="row">
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.popyt[0] = e.target.value}
                                   className="form-control" placeholder="Popyt"/>

                        </div>
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.cenaSprzedazy[0] = e.target.value}
                                   className="form-control" placeholder="Cena sprzedaży"/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.popyt[1] = e.target.value}
                                   className="form-control" placeholder="Popyt"/>

                        </div>
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.cenaSprzedazy[1] = e.target.value}
                                   className="form-control" placeholder="Cena sprzedaży"/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.popyt[2] = e.target.value}
                                   className="form-control" placeholder="Popyt"/>

                        </div>
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.cenaSprzedazy[2] = e.target.value}
                                   className="form-control" placeholder="Cena sprzedaży"/>

                        </div>
                    </div>
                </form>
                <h3>Jednostkowe koszty transportu :</h3>
                <form>
                    <div className="row">
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.D1[0] = e.target.value} className="form-control"
                                   placeholder="D1-O1"/>

                        </div>
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.D2[0] = e.target.value} className="form-control"
                                   placeholder="D2-O1"/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.D1[1] = e.target.value} className="form-control"
                                   placeholder="D1-O2"/>

                        </div>
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.D2[1] = e.target.value} className="form-control"
                                   placeholder="D2-O2"/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.D1[2] = e.target.value} className="form-control"
                                   placeholder="D1-O3"/>

                        </div>
                        <div className="col-6">
                            <input type={Text} onChange={e => inputData.D2[2] = e.target.value} className="form-control"
                                   placeholder="D2-O3"/>

                        </div>
                    </div>
                </form>
                <button onClick={() => setIsSubmitted(true)} className="btn btn-lg btn-primary m-2">Oblicz</button>
            </div>
        )
    }


    return (
        <div className="container py-2 bg-light">
            {
                isSubmitted
                    ? results()
                    : inputWindow()
            }
        </div>
    )
}

export default DataInput;