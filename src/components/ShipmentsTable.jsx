import React from "react";
import s from './Table.module.css';
import img from './../assets/img/notes.png'

function ShipmentsTable(props) {
    return (
        <table id="my-table" className={s.table}>
            <thead>
            <tr>
                <th>ORDER NO</th>
                <th>DELIVERY DAY</th>
                <th>CUSTOMER</th>
                <th>TRACKING NO</th>
                <th>STATUS</th>
                <th>CONSIGNEE</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                props.data
                    .map(ship =>
                        <tr key ={ship.orderNo}>
                            <td>{ship.orderNo}</td>
                            <td>{ship.date}</td>
                            <td>{ship.customer}</td>
                            <td>{ship.trackingNo}</td>
                            <td>{ship.status}</td>
                            <td>{ship.consignee}</td>
                            <td> <button> <img src={img}/> </button>
                                <button>x</button>  </td>
                        </tr>
                    )
            }
            </tbody>
        </table>
    );
}

export default ShipmentsTable;