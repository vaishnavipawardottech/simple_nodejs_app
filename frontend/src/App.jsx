import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import AssetForm from "./components/AssetForm";

import {
    getAssets,
    createAsset,
    deleteAsset
} from "./services/assetService";

function App() {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <>
            <Navbar />

            <main className="container">
                <Dashboard assets={assets} />

                {loading ? (
                    <p>Loading assets...</p>
                ) : (
                    <Assets
                        assets={assets}
                        onDelete={handleDeleteAsset}
                    />
                )}

                <AssetForm onAdd={handleAddAsset} />
            </main>
        </>
    );
}

export default App;