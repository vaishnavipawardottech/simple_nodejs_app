import { useState } from "react";

function AssetForm({ onAdd }) {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        serial_number: "",
        assigned_to: "",
        status: "Available",
        purchase_date: ""
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await onAdd(formData);

        setFormData({
            name: "",
            type: "",
            serial_number: "",
            assigned_to: "",
            status: "Available",
            purchase_date: ""
        });
    };

    return (
        <section id="add-asset">
            <h2>Add Asset</h2>

            <form onSubmit={handleSubmit} className="asset-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Asset Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="serial_number"
                    placeholder="Serial Number"
                    value={formData.serial_number}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="assigned_to"
                    placeholder="Assigned To"
                    value={formData.assigned_to}
                    onChange={handleChange}
                />

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="Available">Available</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Maintenance">Maintenance</option>
                </select>

                <input
                    type="date"
                    name="purchase_date"
                    value={formData.purchase_date}
                    onChange={handleChange}
                />

                <button type="submit" className="primary-btn">
                    Add Asset
                </button>
            </form>
        </section>
    );
}

export default AssetForm;