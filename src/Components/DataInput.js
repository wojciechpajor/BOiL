import React from "react"
import {useState} from 'react'
import Result from "./Result";

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
            <Result inputData={inputData} />
        )
    }

    const handleCalculate = () => {
        setIsSubmitted(true)
    }

    const handleClearTable = () => {
        setIsSubmitted(false)
        setInputData(new Data)
    }
    
    const changeValueByID = (id,val) => {
        return document.getElementById(id).value = val
    }

    const fillForm = () => {
        changeValueByID(1,10)
        inputData.jkz[0] = 10;
        changeValueByID(2,12)
        inputData.jkz[1] = 12;
        changeValueByID(3,20)
        inputData.podaz[0] = 20;
        changeValueByID(4,30)
        inputData.podaz[1] = 30;
        changeValueByID(5,10)
        inputData.popyt[0] = 10;
        changeValueByID(6,28)
        inputData.popyt[1] = 28;
        changeValueByID(7,27)
        inputData.popyt[2] = 27;
        changeValueByID(8,30)
        inputData.cenaSprzedazy[0] = 30;
        changeValueByID(9,25)
        inputData.cenaSprzedazy[1] = 25;
        changeValueByID(10,30)
        inputData.cenaSprzedazy[2] = 30;
        changeValueByID(11,8)
        inputData.D1[0] = 8;
        changeValueByID(12,14)
        inputData.D1[1] = 14;
        changeValueByID(13,17)
        inputData.D1[2] = 17;
        changeValueByID(14,12)
        inputData.D2[0] = 12;
        changeValueByID(15,9)
        inputData.D2[1] = 9;
        changeValueByID(16,19)
        inputData.D2[2] = 19;
        console.log(inputData)
    }

    const inputForm = () => {
        return(
            <div>
                <form>
                    <h3>Dane dostawców :</h3>
                    <div className="row">
                        <div className="col-6">
                            <input id={1} type={"number"} onChange={e => inputData.jkz[0] = +e.target.value}
                                   className="form-control" placeholder="jednostkowy koszt zakupu" required/>

                        </div>
                        <div className="col-6">
                            <input id={3} type={"number"} onChange={e => inputData.podaz[0] = +e.target.value}
                                   className="form-control" placeholder="Podaż"  required/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input id={2} type={"number"} onChange={e => inputData.jkz[1] = +e.target.value}
                                   className="form-control" placeholder="jednostkowy koszt zakupu" required/>

                        </div>
                        <div className="col-6">
                            <input id={4} type={"number"} onChange={e => inputData.podaz[1] = +e.target.value}
                                   className="form-control" placeholder="Podaż" required/>

                        </div>
                    </div>
                <h3>Dane Odbiorców :</h3>
                    <div className="row">
                        <div className="col-6">
                            <input id={5} type={"number"} onChange={e => inputData.popyt[0] = +e.target.value}
                                   className="form-control" placeholder="Popyt" required/>

                        </div>
                        <div className="col-6">
                            <input id={8} type={"number"} onChange={e => inputData.cenaSprzedazy[0] = +e.target.value}
                                   className="form-control" placeholder="Cena sprzedaży" required/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input id={6} type={"number"} onChange={e => inputData.popyt[1] = +e.target.value}
                                   className="form-control" placeholder="Popyt" required/>

                        </div>
                        <div className="col-6">
                            <input id={9} type={"number"} onChange={e => inputData.cenaSprzedazy[1] = +e.target.value}
                                   className="form-control" placeholder="Cena sprzedaży" required/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input id={7} type="number" onChange={e => inputData.popyt[2] = +e.target.value}
                                   className="form-control" placeholder="Popyt" required/>

                        </div>
                        <div className="col-6">
                            <input id={10} type={"number"} onChange={e => inputData.cenaSprzedazy[2] = +e.target.value}
                                   className="form-control" placeholder="Cena sprzedaży" required/>

                        </div>
                    </div>
                <h3>Jednostkowe koszty transportu :</h3>
                    <div className="row">
                        <div className="col-6">
                            <input id={11} type={"number"} onChange={e => inputData.D1[0] = +e.target.value} className="form-control"
                                   placeholder="D1-O1" required/>

                        </div>
                        <div className="col-6">
                            <input id={14} type={"number"} onChange={e => inputData.D2[0] = +e.target.value} className="form-control"
                                   placeholder="D2-O1" required/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input id={12} type={"number"} onChange={e => inputData.D1[1] = +e.target.value} className="form-control"
                                   placeholder="D1-O2" required/>

                        </div>
                        <div className="col-6">
                            <input id={15} type={"number"} onChange={e => inputData.D2[1] = +e.target.value} className="form-control"
                                   placeholder="D2-O2" required/>

                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <input id={13} type={"number"} onChange={e => inputData.D1[2] = +e.target.value} className="form-control"
                                   placeholder="D1-O3" required/>

                        </div>
                        <div className="col-6">
                            <input id={16} type={"number"} onChange={e => inputData.D2[2] = +e.target.value} className="form-control"
                                   placeholder="D2-O3" required/>

                        </div>
                    </div>
                    <button onClick={() => handleClearTable()} className="btn btn-lg btn-danger m-2">Wyczyść Dane</button>
                </form>
                    <button onClick={() => handleCalculate()} className="btn btn-lg btn-primary m-2">Oblicz</button>
                    <button onClick={() => fillForm()} className="btn btn-lg btn-warning m-2">Przykładowe dane</button>

            </div>
        )
    }

    const inputWindow = () => {
        return (
            <div>
                {inputForm()}
            </div>
        )
    }


    return (
        <div className="container py-2 bg-light">
            {inputWindow()}
            {isSubmitted && results()}
        </div>
    )
}

export default DataInput;