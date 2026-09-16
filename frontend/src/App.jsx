import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import AssetForm from "./components/AssetForm";

import {
    getAssets,
    createAsset,
    updateAsset,
    deleteAsset
} from "./services/assetService";

function App() {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingAsset, setEditingAsset] = useState(null);

    const loadAssets = async () => {
        try {
            const data = await getAssets();
            setAssets(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAssets();
    }, []);

    const handleAddAsset = async (asset) => {
        try {
            await createAsset(asset);
            await loadAssets();
        } catch (error) {
            console.error(error);
            alert("Failed to add asset");
        }
    };

    const handleEditAsset = (asset) => {
        setEditingAsset(asset);

        setTimeout(() => {
            document
                .getElementById("asset-form")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        }, 100);
    };

    const handleUpdateAsset = async (id, asset) => {
        try {
            await updateAsset(id, asset);

            setEditingAsset(null);

            await loadAssets();
        } catch (error) {
            console.error(error);
            alert("Failed to update asset");
        }
    };

    const handleDeleteAsset = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this asset?"
        );

        if (!confirmed) {
            return;
        }

        try {
            await deleteAsset(id);
            await loadAssets();
        } catch (error) {
            console.error(error);
            alert("Failed to delete asset");
        }
    };

    const handleCancelEdit = () => {
        setEditingAsset(null);
    };

    return (
        <>
            <Navbar />

            <main className="container">
                <Dashboard assets={assets} />

                {loading ? (
                    <p className="loading">
                        Loading assets...
                    </p>
                ) : (
                    <Assets
                        assets={assets}
                        onDelete={handleDeleteAsset}
                        onEdit={handleEditAsset}
                    />
                )}

                <div id="asset-form">
                    <AssetForm
                        onAdd={handleAddAsset}
                        onUpdate={handleUpdateAsset}
                        editingAsset={editingAsset}
                        onCancelEdit={handleCancelEdit}
                    />
                </div>
            </main>
        </>
    );
}

export default App;