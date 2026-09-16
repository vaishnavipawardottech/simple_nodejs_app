function Dashboard({ assets }) {
    const totalAssets = assets.length;

    const assignedAssets = assets.filter(
        (asset) => asset.status === "Assigned"
    ).length;

    const availableAssets = assets.filter(
        (asset) => asset.status === "Available"
    ).length;

    return (
        <section id="dashboard">
            <div className="dashboard-header">
                <h1>Dashboard</h1>

                <p className="page-description">
                    Monitor and manage your organization's IT assets.
                </p>
            </div>

            <div className="stats">
                <div className="stat-card">
                    <span className="stat-label">
                        Total Assets
                    </span>

                    <p>{totalAssets}</p>
                </div>

                <div className="stat-card">
                    <span className="stat-label">
                        Assigned
                    </span>

                    <p>{assignedAssets}</p>
                </div>

                <div className="stat-card">
                    <span className="stat-label">
                        Available
                    </span>

                    <p>{availableAssets}</p>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;