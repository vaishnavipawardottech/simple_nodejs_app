function AssetTable({ assets, onDelete, onEdit }) {

    const formatDate = (date) => {
        if (!date) {
            return "-";
        }

        return new Date(date).toLocaleDateString("en-GB");
    };

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
                        <th>Edit</th>
                        <th>Delete</th>
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
                                <span
                                    className={`status ${asset.status.toLowerCase()}`}
                                >
                                    {asset.status}
                                </span>
                            </td>

                            <td>
                                {formatDate(asset.purchase_date)}
                            </td>

                            <td>
                                <button
                                    className="icon-btn edit-icon"
                                    onClick={() => onEdit(asset)}
                                    title="Edit asset"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                            </td>

                            <td>
                                <button
                                    className="icon-btn delete-icon"
                                    onClick={() => onDelete(asset.id)}
                                    title="Delete asset"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 6h18" />
                                        <path d="M8 6V4h8v2" />
                                        <path d="M19 6l-1 14H6L5 6" />
                                        <path d="M10 11v5" />
                                        <path d="M14 11v5" />
                                    </svg>
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