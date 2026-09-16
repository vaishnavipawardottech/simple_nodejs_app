import AssetTable from "../components/AssetTable";

function Assets({ assets, onDelete }) {
    return (
        <section id="assets">
            <div className="section-header">
                <div>
                    <h2>Assets</h2>
                    <p className="page-description">
                        View and manage all registered assets.
                    </p>
                </div>

                <button
                    className="primary-btn"
                    onClick={() =>
                        document
                            .getElementById("add-asset")
                            .scrollIntoView()
                    }
                >
                    + Add Asset
                </button>
            </div>

            <AssetTable
                assets={assets}
                onDelete={onDelete}
            />
        </section>
    );
}

export default Assets;