import React, { useState } from "react";
import styles from "./Form.module.css";
import {useNavigate} from "react-router-dom";

function MyForm({ship}) {
    const [formData, setFormData] = useState({
        orderNo: "-",
        date: "-",
        customer: "-",
        trackingNo: "-",
        consignee: "-",
        status: "-"
    });

    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

       function handleButtonClick(props) {
           debugger;
           alert('Date: ' + props.date + ' consignee: ' + props.consignee);
           debugger;

       }





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
                        onChange={(e) => handleChange(e, formField.field)}
                    />
                </div>
            ))}
        </form>


            {/*<button className={styles.button} onClick={handleClick}>*/}
            <button className={styles.button} onClick={() => handleButtonClick(ship)}>
                Back
            </button>


        </div>
    );
}

export default MyForm;