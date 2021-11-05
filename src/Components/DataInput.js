import React from "react"
import { useState } from 'react'

const DataInput = () => {
    const [name, setName] = useState('');


    return (
        <div className="container py-2 bg-light">
            <h3>Dane1 :</h3>
            <form>
                <div className="row">
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Koszt zakupu" />

                    </div>
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data2" />

                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data1" />

                    </div>
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data2" />

                    </div>
                </div>
            </form>
            <h3>Dane2 :</h3>
            <form>
                <div className="row">
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data1" />

                    </div>
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data2" />

                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data1" />

                    </div>
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data2" />

                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data1" />

                    </div>
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data2" />

                    </div>
                </div>
            </form>
            <h3>Dane3 :</h3>
            <form>
                <div className="row">
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data1" />

                    </div>
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data2" />

                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data1" />

                    </div>
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data2" />

                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data1" />

                    </div>
                    <div className="col-6">
                        <input type={Text} className="form-control" placeholder="Podaj Data2" />

                    </div>
                </div>
            </form>
            <button className="btn btn-primary m-1">Oblicz</button>
        </div>
    )
}

export default DataInput;