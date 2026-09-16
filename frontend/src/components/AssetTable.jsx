function AssetTable({ assets, onDelete }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Serial Number</th>
                        <th>Assigned To</th>
                        <th>Status</th>
                        <th>Purchase Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {assets.map((asset) => (
                        <tr key={asset.id}>
                            <td>{asset.id}</td>
                            <td>{asset.name}</td>
                            <td>{asset.type}</td>
                            <td>{asset.serial_number}</td>
                            <td>{asset.assigned_to || "-"}</td>
                            <td>
                                <span className={`status ${asset.status.toLowerCase()}`}>
                                    {asset.status}
                                </span>
                            </td>
                            <td>{asset.purchase_date}</td>
                            <td>
                                <button
                                    className="delete-btn"
                                    onClick={() => onDelete(asset.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AssetTable;