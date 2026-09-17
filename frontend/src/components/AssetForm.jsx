import { useEffect, useState } from "react";

const emptyForm = {
    name: "",
    type: "",
    serial_number: "",
    assigned_to: "",
    status: "Available",
    purchase_date: ""
};

function AssetForm({ onAdd, onUpdate, editingAsset, onCancelEdit }) {
    const [formData, setFormData] = useState(emptyForm);

    // useEffect(() => {
    //     if (editingAsset) {
    //         setFormData({
    //             name: editingAsset.name || "",
    //             type: editingAsset.type || "",
    //             serial_number: editingAsset.serial_number || "",
    //             assigned_to: editingAsset.assigned_to || "",
    //             status: editingAsset.status || "Available",
    //             purchase_date: editingAsset.purchase_date
    //                 ? editingAsset.purchase_date.split("T")[0]
    //                 : ""
    //         });
    //     } else {
    //         setFormData(emptyForm);
    //     }
    // }, [editingAsset]);

    useEffect(() => {
        if (editingAsset) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData({
                name: editingAsset.name || "",
                type: editingAsset.type || "",
                serial_number: editingAsset.serial_number || "",
                assigned_to: editingAsset.assigned_to || "",
                status: editingAsset.status || "Available",
                purchase_date: editingAsset.purchase_date
                    ? editingAsset.purchase_date.split("T")[0]
                    : ""
            });
        } else {
            setFormData(emptyForm);
        }
    }, [editingAsset]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (editingAsset) {
            await onUpdate(editingAsset.id, formData);
        } else {
            await onAdd(formData);
        }

        setFormData(emptyForm);
    };

    const handleCancel = () => {
        setFormData(emptyForm);
        onCancelEdit();
    };

    return (
        <section className="form-section">
            <div className="form-header">
                <div>
                    <h2>
                        {editingAsset ? "Edit Asset" : "Add Asset"}
                    </h2>

                    <p className="page-description">
                        {editingAsset
                            ? "Update the selected asset details."
                            : "Register a new IT asset."}
                    </p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="asset-form"
            >
                <div className="form-group">
                    <label>Asset Name</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="e.g. Dell Latitude 5440"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Type</label>

                    <input
                        type="text"
                        name="type"
                        placeholder="e.g. Laptop"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Serial Number</label>

                    <input
                        type="text"
                        name="serial_number"
                        placeholder="e.g. DL-001"
                        value={formData.serial_number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Assigned To</label>

                    <input
                        type="text"
                        name="assigned_to"
                        placeholder="e.g. Vaishnavi"
                        value={formData.assigned_to}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="Available">
                            Available
                        </option>

                        <option value="Assigned">
                            Assigned
                        </option>

                        <option value="Maintenance">
                            Maintenance
                        </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Purchase Date</label>

                    <input
                        type="date"
                        name="purchase_date"
                        value={formData.purchase_date}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-actions">
                    <button
                        type="submit"
                        className="primary-btn"
                    >
                        {editingAsset
                            ? "Update Asset"
                            : "Add Asset"}
                    </button>

                    {editingAsset && (
                        <button
                            type="button"
                            className="secondary-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </section>
    );
}

export default AssetForm;