import AssetTable from "../components/AssetTable";

function Assets({ assets, onDelete, onEdit }) {
    return (
        <section id="assets">
            <div className="section-header">
                <div>
                    <h2>Assets</h2>

                    <p className="page-description">
                        View and manage all registered assets.
                    </p>
                </div>
            </div>

            <AssetTable
                assets={assets}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        </section>
    );
}

export default Assets;