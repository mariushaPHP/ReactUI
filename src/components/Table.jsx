import React, {useState} from "react";
import {BsPencil, BsTrash} from "react-icons/bs";

const Table = ({entry}) => {

    //console.log(entry)

    return (
        <>
            <div className="card">
                <div className="card-body"></div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h1>Darbų sąrašas:</h1>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Data</th>
                                <th scope="col">Klientas</th>
                                <th scope="col">Suteikta paslauga</th>
                                <th scope="col">Aprašymas</th>
                                <th scope="col">Trukmė</th>
                                <th scope="col">Keisti</th>
                                <th scope="col">Šalinti</th>
                            </tr>
                        </thead>
                        <tbody>

                        {entry.map(uab =>
                            <tr>
                                <td>{uab.date}</td>
                                <td className={'client'}>{uab.client}</td>
                                <td className={'service'}>{uab.service}</td>
                                <td>{uab.description}</td>
                                <td>{uab.duration}</td>
                                <td><BsPencil style={{color: 'blue'}}/></td>
                                <td><BsTrash style={{color: 'blue'}}/></td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table