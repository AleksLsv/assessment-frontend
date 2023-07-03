import React, { useState } from "react";
import styles from "./Form.module.css";
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function MyForm({onAddShipment, onDelete}) {
    const { state } = useLocation();
    const { ship } = state;

    const [formData, setFormData] = useState({
        orderNo: ship.orderNo,
        date: ship.date,
        customer: ship.customer,
        trackingNo: ship.trackingNo,
        consignee: ship.consignee,
        status: ship.status
    });


/*    const [formData, setFormData] = useState({
        orderNo: "-",
        date: ship.date,
        customer: "-",
        trackingNo: "-",
        consignee: "-",
        status: "-"
    });*/



    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleChange2 = (e, field) => {
        setFormData({ ...formData, [field]: e.currentTarget.value });
    };



    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const onSubmit = (e) => {
        onAddShipment(formData);
        onDelete(ship.orderNo);
        //alert(ship.orderNo);
        alert(formData["orderNo"]);
        e.preventDefault();
    };

    const onSubmit2 = (e) => {
        onAddShipment(formData);
        //alert(ship.orderNo);
        alert(formData["orderNo"]);
        e.preventDefault();
    };


    const formFields = [
        { label: "Order No", field: "orderNo" },
        { label: "Date", field: "date" },
        { label: "Customer", field: "customer" },
        { label: "Tracking No", field: "trackingNo" },
        { label: "Consignee", field: "consignee" },
        { label: "Status", field: "status" }
    ];



    return (
        <div>
        <h4>SHIPMENT DETAILS</h4>
        <form className={styles.form}>
            {formFields.map((formField) => (
                <div className={styles.formField} key={formField.field}>
                    <label htmlFor={formField.field}>{formField.label}</label>
                    <input
                        type="text"
                        id={formField.field}
                        value={formData[formField.field]}
                        /*onChange={(e) => handleChange(e, formField.field)}*/
                        onChange={(e) => handleChange2(e, formField.field)}
                        /*onChange={(e) => alert(e.target.value)}*/

                    />
                </div>
            ))}
            <button className={styles.button2} type="submit" onClick={onSubmit}> Update data</button>
            <button className={styles.button3} type="submit" onClick={onSubmit2}> Add data</button>
        </form>


            <button className={styles.button} onClick={handleClick}>
                Back
            </button>


        </div>
    );
}

export default MyForm;