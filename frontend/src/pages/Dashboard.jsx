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
            <h1>Dashboard</h1>
            <p className="page-description">
                Monitor and manage your organization's IT assets.
            </p>

            <div className="stats">
                <div className="stat-card">
                    <h3>Total Assets</h3>
                    <p>{totalAssets}</p>
                </div>

                <div className="stat-card">
                    <h3>Assigned</h3>
                    <p>{assignedAssets}</p>
                </div>

                <div className="stat-card">
                    <h3>Available</h3>
                    <p>{availableAssets}</p>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;