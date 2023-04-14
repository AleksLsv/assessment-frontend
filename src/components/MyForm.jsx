import React, { useState } from "react";
import styles from "./Form.module.css";

function MyForm() {
    const [formData, setFormData] = useState({
        orderNo: "Value 1",
        date: "Value 2",
        customer: "Value 3",
        trackingNo: "Value 4",
        consignee: "Value 5",
        status: "Value 6"
    });

    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
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
                        onChange={(e) => handleChange(e, formField.field)}
                    />
                </div>
            ))}
        </form>
        </div>
    );
}

export default MyForm;