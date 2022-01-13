import React, {useState} from "react";

const Result = (props) => {

    const {jkz, podaz, popyt, cenaSprzedazy, D1, D2,} = props.inputData;
    const [deltaCheck, setDeltaCheck] = useState(false);

    const dostawcy = [
        {id: 1, podaz: podaz[0], koszt_zakupu: jkz[0]},
        {id: 2, podaz: podaz[1], koszt_zakupu: jkz[1]},
    ];


    const odbiorcy = [
        {id: 1, popyt: popyt[0], cena_sprzedazy: cenaSprzedazy[0]},
        {id: 2, popyt: popyt[1], cena_sprzedazy: cenaSprzedazy[1]},
        {id: 3, popyt: popyt[2], cena_sprzedazy: cenaSprzedazy[2]},
    ];

    const koszty_transportu = [
        [D1[0], D1[1], D1[2]],
        [D2[0], D2[1], D2[2]],
    ];

    const koszty_calkowity = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j <= 2; j++) {
            koszty_calkowity[i][j] = koszty_transportu[i][j] + dostawcy[i].koszt_zakupu;
        }
    }

    console.log(`
KOSZT CALKOWITY:

    | O1 | O2 | O3
 D1 | ${koszty_calkowity[0][0]} |   ${koszty_calkowity[0][1]} | ${koszty_calkowity[0][2]} |
 D2 | ${koszty_calkowity[1][0]} |   ${koszty_calkowity[1][1]} | ${koszty_calkowity[1][2]} |

`);

    const zysk_jednostkowy = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            zysk_jednostkowy[i][j] = odbiorcy[j]["cena_sprzedazy"] - koszty_calkowity[i][j];
        }
    }

    console.log(`
ZYSK JEDNOSTKOWY:

    | O1 | O2 | O3
 D1 | ${zysk_jednostkowy[0][0]} |   ${zysk_jednostkowy[0][1]} | ${zysk_jednostkowy[0][2]} |
 D2 | ${zysk_jednostkowy[1][0]} |   ${zysk_jednostkowy[1][1]} | ${zysk_jednostkowy[1][2]} |

`);

    let ile_popytu = dostawcy[0]["podaz"] + dostawcy[1]["podaz"];
    let ile_podazy = odbiorcy[0]["popyt"] + odbiorcy[1]["popyt"] + odbiorcy[2]["popyt"];

    if ((ile_podazy < ile_popytu) || (ile_podazy > ile_popytu)) {

        dostawcy.push({id: 3, podaz: 0, koszt_zakupu: 0},)
        odbiorcy.push({id: 4, popyt: 0, cena_sprzedazy: 0},)

        for (let j = 0; j < 2; j++) {
            zysk_jednostkowy[j][3] = 0;
            zysk_jednostkowy[2][j] = 0;
            zysk_jednostkowy[2][j + 2] = 0;
        }
    }
    console.log(`
ZYSK JEDNOSTKOWY(wraz z fikcyjnymi):

    | O1 | O2 | O3 | OF
 D1 | ${zysk_jednostkowy[0][0]} |   ${zysk_jednostkowy[0][1]} | ${zysk_jednostkowy[0][2]} | ${zysk_jednostkowy[0][3]}
 D2 | ${zysk_jednostkowy[1][0]} |   ${zysk_jednostkowy[1][1]} | ${zysk_jednostkowy[1][2]} | ${zysk_jednostkowy[1][3]}
 DF | ${zysk_jednostkowy[2][0]} |   ${zysk_jednostkowy[2][1]} | ${zysk_jednostkowy[2][2]} | ${zysk_jednostkowy[2][3]}

`);

    dostawcy[2].podaz = ile_podazy;
    odbiorcy[3].popyt = ile_popytu;

    let ile_towaru = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    let bazowe = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
    ]

    let alfa = [0, 0, 0]
    let beta = [0, 0, 0, 0]

    let delta = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]

    function dane_pol() {
        const dane_polaczenia = [
            [
                {
                    zysk: zysk_jednostkowy[0][0],
                    dostepny_popyt: odbiorcy[0].popyt,
                    dostena_podaz: dostawcy[0].podaz,
                    ile_towaru: ile_towaru[0][0],
                    czy_bazowa: bazowe[0][0],
                    delta: delta[0][0],
                    alfa: alfa[0],
                    beta: beta[0]
                },
                {
                    zysk: zysk_jednostkowy[0][1],
                    dostepny_popyt: odbiorcy[1].popyt,
                    dostena_podaz: dostawcy[0].podaz,
                    ile_towaru: ile_towaru[0][1],
                    czy_bazowa: bazowe[0][1],
                    delta: delta[0][1],
                    alfa: alfa[0],
                    beta: beta[1]
                },
                {
                    zysk: zysk_jednostkowy[0][2],
                    dostepny_popyt: odbiorcy[2].popyt,
                    dostena_podaz: dostawcy[0].podaz,
                    ile_towaru: ile_towaru[0][2],
                    czy_bazowa: bazowe[0][2],
                    delta: delta[0][2],
                    alfa: alfa[0],
                    beta: beta[2]
                },
                {
                    zysk: zysk_jednostkowy[0][3],
                    dostepny_popyt: odbiorcy[3].popyt,
                    dostena_podaz: dostawcy[0].podaz,
                    ile_towaru: ile_towaru[0][3],
                    czy_bazowa: bazowe[0][3],
                    delta: delta[0][3],
                    alfa: alfa[0],
                    beta: beta[3]
                },
            ],
            [
                {
                    zysk: zysk_jednostkowy[1][0],
                    dostepny_popyt: odbiorcy[0].popyt,
                    dostena_podaz: dostawcy[1].podaz,
                    ile_towaru: ile_towaru[1][0],
                    czy_bazowa: bazowe[1][0],
                    delta: delta[1][0],
                    alfa: alfa[1],
                    beta: beta[0]
                },
                {
                    zysk: zysk_jednostkowy[1][1],
                    dostepny_popyt: odbiorcy[1].popyt,
                    dostena_podaz: dostawcy[1].podaz,
                    ile_towaru: ile_towaru[1][1],
                    czy_bazowa: bazowe[1][1],
                    delta: delta[1][1],
                    alfa: alfa[1],
                    beta: beta[1]
                },
                {
                    zysk: zysk_jednostkowy[1][2],
                    dostepny_popyt: odbiorcy[2].popyt,
                    dostena_podaz: dostawcy[1].podaz,
                    ile_towaru: ile_towaru[1][2],
                    czy_bazowa: bazowe[1][2],
                    delta: delta[1][2],
                    alfa: alfa[1],
                    beta: beta[2]
                },
                {
                    zysk: zysk_jednostkowy[1][3],
                    dostepny_popyt: odbiorcy[3].popyt,
                    dostena_podaz: dostawcy[1].podaz,
                    ile_towaru: ile_towaru[1][3],
                    czy_bazowa: bazowe[1][3],
                    delta: delta[1][3],
                    alfa: alfa[1],
                    beta: beta[3]
                },
            ],
            [
                {
                    zysk: zysk_jednostkowy[2][0],
                    dostępny_popyt: odbiorcy[0].popyt,
                    dostena_podaz: dostawcy[2].podaz,
                    ile_towaru: ile_towaru[2][0],
                    czy_bazowa: bazowe[2][0],
                    delta: delta[2][0],
                    alfa: alfa[2],
                    beta: beta[0]
                },
                {
                    zysk: zysk_jednostkowy[2][1],
                    dostępny_popyt: odbiorcy[1].popyt,
                    dostena_podaz: dostawcy[2].podaz,
                    ile_towaru: ile_towaru[2][1],
                    czy_bazowa: bazowe[2][1],
                    delta: delta[2][1],
                    alfa: alfa[2],
                    beta: beta[1]
                },
                {
                    zysk: zysk_jednostkowy[2][2],
                    dostępny_popyt: odbiorcy[2].popyt,
                    dostena_podaz: dostawcy[2].podaz,
                    ile_towaru: ile_towaru[2][2],
                    czy_bazowa: bazowe[2][2],
                    delta: delta[2][2],
                    alfa: alfa[2],
                    beta: beta[2]
                },
                {
                    zysk: zysk_jednostkowy[2][3],
                    dostępny_popyt: odbiorcy[3].popyt,
                    dostena_podaz: dostawcy[2].podaz,
                    ile_towaru: ile_towaru[2][3],
                    czy_bazowa: bazowe[2][3],
                    delta: delta[2][3],
                    alfa: alfa[2],
                    beta: beta[3]
                },
            ],
        ]

        return dane_polaczenia;
    }

    let temp = dane_pol();
    show();

    function show() {
        console.log(`
TABELA ZMIENNA:

      | O1(${odbiorcy[0].popyt}) | O2(${odbiorcy[1].popyt}) | O3(${odbiorcy[2].popyt}) | OF(${odbiorcy[3].popyt})
 D1(${dostawcy[0].podaz})| ${temp[0][0]["ile_towaru"]}    | ${temp[0][1]["ile_towaru"]} | ${temp[0][2]["ile_towaru"]} | ${temp[0][3]["ile_towaru"]} | ${alfa[0]}
      | ${temp[0][0]["czy_bazowa"]} | ${temp[0][1]["czy_bazowa"]} | ${temp[0][2]["czy_bazowa"]} | ${temp[0][3]["czy_bazowa"]} | 
      | ${temp[0][0]["delta"]}      | ${temp[1][1]["delta"]}      | ${temp[0][2]["delta"]}      | ${temp[0][3]["delta"]}      | 
 D2(${dostawcy[1].podaz})| ${temp[1][0]["ile_towaru"]}    | ${temp[1][1]["ile_towaru"]} | ${temp[1][2]["ile_towaru"]} | ${temp[1][3]["ile_towaru"]} | ${alfa[1]}
      | ${temp[1][0]["czy_bazowa"]} | ${temp[1][1]["czy_bazowa"]} | ${temp[1][2]["czy_bazowa"]} | ${temp[1][3]["czy_bazowa"]} | 
      | ${temp[1][0]["delta"]}      | ${temp[1][1]["delta"]}      | ${temp[1][2]["delta"]}      | ${temp[1][3]["delta"]}      | 
 DF(${dostawcy[2].podaz})| ${temp[2][0]["ile_towaru"]}    | ${temp[2][1]["ile_towaru"]} | ${temp[2][2]["ile_towaru"]} | ${temp[2][3]["ile_towaru"]} | ${alfa[2]}
      | ${temp[2][0]["czy_bazowa"]} | ${temp[2][1]["czy_bazowa"]} | ${temp[2][2]["czy_bazowa"]} | ${temp[2][3]["czy_bazowa"]} | 
      | ${temp[2][0]["delta"]}      | ${temp[2][1]["delta"]}      | ${temp[2][2]["delta"]}      | ${temp[2][3]["delta"]}      | 
 B    | ${beta[0]} | ${beta[1]} | ${beta[2]} | ${beta[3]}
`);
    }


    function znajdzMax() {
        let max = 0;
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                if (temp[i][j]["zysk"] > max && temp[i][j]["dostepny_popyt"] !== 0 && temp[i][j]["dostena_podaz"] !== 0 && temp[i][j]["dostepny_popyt"] !== ile_popytu && temp[i][j]["dostena_podaz"] !== ile_podazy) {
                    max = temp[i][j]["zysk"];
                }
            }
        }
        return max;
    }

    function zmianaPopPod() {
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                if (temp[i][j]["zysk"] === znajdzMax()) {
                    if (temp[i][j]["dostepny_popyt"] <= temp[i][j]["dostena_podaz"]) {
                        ile_towaru[i][j] = temp[i][j]["dostepny_popyt"]
                        dostawcy[i].podaz -= temp[i][j]["dostepny_popyt"]
                        odbiorcy[j].popyt = 0;
                        bazowe[i][j] = true;
                        temp = dane_pol();
                    } else if (temp[i][j]["dostepny_popyt"] >= temp[i][j]["dostena_podaz"] && temp[i][j]["dostepny_popyt"] !== ile_popytu && temp[i][j]["dostena_podaz"] !== ile_podazy) {
                        ile_towaru[i][j] = temp[i][j]["dostena_podaz"]
                        odbiorcy[j].popyt -= temp[i][j]["dostena_podaz"]
                        dostawcy[i].podaz = 0;
                        bazowe[i][j] = true;
                        temp = dane_pol();
                    }
                }
            }
        }
    }

    zmianaPopPod()
    zmianaPopPod()

    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            if (temp[i][j]["dostepny_popyt"] > 0 && temp[i][j]["dostena_podaz"] > 0 && temp[i][j]["dostepny_popyt"] !== ile_popytu && temp[i][j]["dostena_podaz"] !== ile_podazy && temp[i][j]["dostepny_popyt"] >= temp[i][j]["dostena_podaz"]) {
                ile_towaru[i][j] = temp[i][j]["dostena_podaz"]
                odbiorcy[j].popyt -= temp[i][j]["dostena_podaz"]
                dostawcy[i].podaz = 0;
                bazowe[i][j] = true;
                temp = dane_pol();
            }
        }
    }
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            if (temp[i][j]["dostepny_popyt"] > 0) {
                ile_towaru[2][j] = temp[i][j]["dostepny_popyt"];
                odbiorcy[j].popyt = 0;
                dostawcy[2].podaz -= temp[i][j]["dostepny_popyt"];
                bazowe[2][j] = true;
                temp = dane_pol();
            } else if (temp[i][j]["dostena_podaz"] > 0) {
                ile_towaru[i][3] = temp[i][j]["dostena_podaz"];
                dostawcy[i].podaz = 0;
                odbiorcy[3].popyt -= temp[i][j]["dostena_podaz"];
                bazowe[i][3] = true;
                temp = dane_pol();
            }
        }
    }
    show();

    function wyliczenie_alfa_beta() {

        alfa = ['', '', 0]
        beta = ['', '', '', '']
        for (let i = 2; i >= 0; --i) {

            for (let j = 3; j >= 0; j--) {
                if (temp[i][j]["czy_bazowa"] === true && beta[j] !== '') {
                    alfa[i] = zysk_jednostkowy[i][j] - beta[j]
                    beta[j] = zysk_jednostkowy[i][j] - alfa[i]
                }
                if (temp[i][j]["czy_bazowa"] === true && alfa[i] !== '') {
                    beta[j] = zysk_jednostkowy[i][j] - alfa[i]
                } else if (temp[i][j]["czy_bazowa"] === true && beta[i] !== '') {
                    alfa[i] = zysk_jednostkowy[i][j] - beta[i]

                }
            }
        }

        if (temp[0][2]["czy_bazowa"] === true && beta[2] !== '') {
            alfa[0] = zysk_jednostkowy[0][2] - beta[2]
        }
        if (temp[0][0]["czy_bazowa"] === true && beta[0] !== '') {
            alfa[0] = zysk_jednostkowy[0][0] - beta[0]
        } else if (temp[0][0]["czy_bazowa"] === true && alfa[0] !== '') {
            beta[0] = zysk_jednostkowy[0][0] - alfa[0]
        }
    }

    wyliczenie_alfa_beta();
    show();

    temp = dane_pol();
    show()

    function obliczanie_delty() {
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                if (temp[i][j]["czy_bazowa"] === false) {
                    delta[i][j] = temp[i][j]["zysk"] - alfa[i] - beta[j]
                }
            }
        }
        return delta;
    }

    obliczanie_delty();
    temp = dane_pol();
    show();

    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            if (temp[i][j]["delta"] > 0) {
                ile_towaru[i][j] += ile_towaru[i][j - 1];
                ile_towaru[i + 1][j - 1] += ile_towaru[i][j - 1];
                ile_towaru[i + 1][j] -= ile_towaru[i][j - 1];
                ile_towaru[i][j - 1] = 0;
                if (bazowe[i][j] === false) {
                    bazowe[i][j] = true;
                }
                if (ile_towaru[i][j - 1] === 0) {
                    bazowe[i][j - 1] = false;
                }
                break
            }
        }
    }
    temp = dane_pol();
    show();

    alfa = [0, 0, 0]
    beta = [0, 0, 0, 0]

    delta = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    wyliczenie_alfa_beta();
    temp = dane_pol();

    obliczanie_delty();
    temp = dane_pol();

    show();

    const KosztCałkowityD1 = (bazowe[0][0] && koszty_calkowity[0][0])+(bazowe[0][1] && koszty_calkowity[0][1])+(bazowe[0][2] && koszty_calkowity[0][2])
    const KosztCałkowityD2 = (bazowe[1][0] && koszty_calkowity[1][0])+(bazowe[1][1] && koszty_calkowity[1][1])+(bazowe[1][2] && koszty_calkowity[1][2])
    const PrzychodCałkowityD1 = (bazowe[0][0] && ile_towaru[0][0]*zysk_jednostkowy[0][0])+(bazowe[0][1] && ile_towaru[0][1]*zysk_jednostkowy[0][1])+(bazowe[0][2] && ile_towaru[0][2]*zysk_jednostkowy[0][2])
    const PrzychodCałkowityD2 = (bazowe[1][0] && ile_towaru[1][0]*zysk_jednostkowy[1][0])+(bazowe[1][1] && ile_towaru[1][1]*zysk_jednostkowy[1][1])+(bazowe[1][2] && ile_towaru[1][2]*zysk_jednostkowy[1][2])


    return (
        <div className='container'>
{/*            <h2 className="pt-5">Jednostkowe Koszty transportu</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">D1</th>
                    <td>{koszty_transportu[0][0]}</td>
                    <td>{koszty_transportu[0][1]}</td>
                    <td>{koszty_transportu[0][2]}</td>
                </tr>
                <tr>
                    <th scope="row">D2</th>
                    <td>{koszty_transportu[1][0]}</td>
                    <td>{koszty_transportu[1][1]}</td>
                    <td>{koszty_transportu[1][2]}</td>
                </tr>
                </tbody>
            </table >*/}
{/*            <h2 className="pt-3" >Jednostkowe koszty zakupu:</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">D1</th>
                    <td>{dostawcy[0].koszt_zakupu}</td>
                </tr>
                <tr>
                    <th scope="row">D2</th>
                    <td>{dostawcy[1].koszt_zakupu}</td>
                </tr>
                </tbody>
            </table>*/}
            <h1 className="mt-5" >Wyniki optymalizacji:</h1>
            <h4>Koszt całkowity:
                {" "}{KosztCałkowityD1+KosztCałkowityD2}
            </h4>
            <h4>Przychód całkowity:
                {" "}{PrzychodCałkowityD1+PrzychodCałkowityD2}
            </h4>
            <h4>Zysk posrednik D1:
                {" "}{PrzychodCałkowityD1-KosztCałkowityD1}
            </h4>
            <h4>Zysk posrednik D2:
                {" "}{PrzychodCałkowityD2-KosztCałkowityD2}
            </h4>
            <h2 className="pt-5" >Tabela optymalnych przewozów</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">O 1</th>
                    <th scope="col">O 2</th>
                    <th scope="col">O 3</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">D1</th>
                    <td>{bazowe[0][0] && "+"}</td>
                    <td>{bazowe[0][1] && "+"}</td>
                    <td>{bazowe[0][2] && "+"}</td>

                </tr>
                <tr>
                    <th scope="row">D2</th>
                    <td>{bazowe[1][0] && "+"}</td>
                    <td>{bazowe[1][1] && "+"}</td>
                    <td>{bazowe[1][2] && "+"}</td>
                </tr>
                </tbody>
            </table>
            <h2 className="pt-5" >Zysk Całkowity z przewożonego towaru: </h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">O 1</th>
                    <th scope="col">O 2</th>
                    <th scope="col">O 3</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">D1 ({podaz[0]})({dostawcy[0].podaz})</th>
                    <td>{ile_towaru[0][0]*zysk_jednostkowy[0][0]}</td>
                    <td>{ile_towaru[0][1]*zysk_jednostkowy[0][1]}</td>
                    <td>{ile_towaru[0][2]*zysk_jednostkowy[0][2]}</td>
                </tr>
                <tr>
                    <th scope="row">D1 ({podaz[0]})({dostawcy[0].podaz})</th>
                    <td>{ile_towaru[1][0]*zysk_jednostkowy[1][0]}</td>
                    <td>{ile_towaru[1][1]*zysk_jednostkowy[1][1]}</td>
                    <td>{ile_towaru[1][2]*zysk_jednostkowy[1][2]}</td>
                </tr>
                </tbody>
            </table>
            <h2 className="pt-5" >Koszt całkowity</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">D1</th>
                    <td>{koszty_calkowity[0][0]}</td>
                    <td>{koszty_calkowity[0][1]}</td>
                    <td>{koszty_calkowity[0][2]}</td>
                </tr>
                <tr>
                    <th scope="row">D2</th>
                    <td>{koszty_calkowity[1][0]}</td>
                    <td>{koszty_calkowity[1][1]}</td>
                    <td>{koszty_calkowity[1][2]}</td>
                </tr>
                </tbody>
            </table>
            <h2 className="pt-5" >Zysk jednostkowy</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">1</th>
                    <th scope="col">2</th>
                    <th scope="col">3</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">D1</th>
                    <td>{zysk_jednostkowy[0][0]}</td>
                    <td>{zysk_jednostkowy[0][1]}</td>
                    <td>{zysk_jednostkowy[0][2]}</td>
                </tr>
                <tr>
                    <th scope="row">D2</th>
                    <td>{zysk_jednostkowy[1][0]}</td>
                    <td>{zysk_jednostkowy[1][1]}</td>
                    <td>{zysk_jednostkowy[1][2]}</td>
                </tr>
                </tbody>
            </table>
            <h2 className="pt-5" >Ilość towaru przeworzona do odbiorcy: </h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">O 1</th>
                    <th scope="col">O 2</th>
                    <th scope="col">O 3</th>
                    <th scope="col">Niewykorzystany popyt</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">D1 ({podaz[0]})</th>
                    <td>{ile_towaru[0][0]}</td>
                    <td>{ile_towaru[0][1]}</td>
                    <td>{ile_towaru[0][2]}</td>
                    <td>{ile_towaru[0][3]}</td>
                </tr>
                <tr>
                    <th scope="row">D2 ({podaz[1]})</th>
                    <td>{ile_towaru[1][0]}</td>
                    <td>{ile_towaru[1][1]}</td>
                    <td>{ile_towaru[1][2]}</td>
                    <td>{ile_towaru[1][3]}</td>
                </tr>
                <tr>
                    <th scope="row">DF ({ile_podazy})</th>
                    <td>{ile_towaru[2][0]}</td>
                    <td>{ile_towaru[2][1]}</td>
                    <td>{ile_towaru[2][2]}</td>
                    <td>{ile_towaru[2][3]}</td>
                </tr>
                </tbody>
            </table>
            <h2 className="pt-5" ><button className="btn btn-primary" onClick={() => setDeltaCheck(!deltaCheck)} >Toogle</button> Obliczanie alfy, bety, delty (by zobaczyć czy dobrze wylicza) : </h2>
            <table hidden={deltaCheck} className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">O 1</th>
                    <th scope="col">O 2</th>
                    <th scope="col">O 3</th>
                    <th scope="col">O F</th>
                    <th scope="col">a (alfa)</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">D1</th>
                    <td>{delta[0][0]}</td>
                    <td>{delta[0][1]}</td>
                    <td>{delta[0][2]}</td>
                    <td>{delta[0][3]}</td>
                    <td>{alfa[0]}</td>
                </tr>
                <tr>
                    <th scope="row">D2</th>
                    <td>{delta[1][0]}</td>
                    <td>{delta[1][1]}</td>
                    <td>{delta[1][2]}</td>
                    <td>{delta[1][3]}</td>
                    <td>{alfa[1]}</td>
                </tr>
                <tr>
                    <th scope="row">DF</th>
                    <td>{delta[2][0]}</td>
                    <td>{delta[2][1]}</td>
                    <td>{delta[2][2]}</td>
                    <td>{delta[2][3]}</td>
                    <td>{alfa[2]}</td>
                </tr>
                <tr>
                    <th scope="row">B (beta)</th>
                    <td>{beta[0]}</td>
                    <td>{beta[1]}</td>
                    <td>{beta[2]}</td>
                    <td>{beta[3]}</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Result;