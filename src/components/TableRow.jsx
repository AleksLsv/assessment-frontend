import React from "react";
import img from './../assets/img/notes.png'
import {NavLink} from "react-router-dom";

function TableRow({ship}) {

    function handleButtonClick(props) {
        alert('Date: ' + props.date + ' consignee: ' + props.consignee);

        /*alert('Date:');*/
    }

    return (
        <tr key={ship.orderNo}>
            <td>{ship.orderNo}</td>
            <td>{ship.date}</td>
            <td>{ship.customer}</td>
            <td>{ship.trackingNo}</td>
            <td>{ship.status}</td>
            <td>{ship.consignee}</td>
            <td>
                {/*<NavLink to="/form">*/}
                <button onClick={() => handleButtonClick(ship)}><img src={img} alt="notes"/></button>
                {/*</NavLink>*/}
                <button>x</button>
            </td>
        </tr>
    );
}

export default TableRow;