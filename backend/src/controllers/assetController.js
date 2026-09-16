import pool from "../config/db.js";

// Get all assets
export const getAssets = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM assets ORDER BY id DESC"
        );

        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch assets"
        });
    }
};

// Get asset by ID
export const getAssetById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM assets WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Asset not found"
            });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch asset"
        });
    }
};

// Create asset
export const createAsset = async (req, res) => {
    try {
        const {
            name,
            type,
            serial_number,
            assigned_to,
            status,
            purchase_date
        } = req.body;

        const result = await pool.query(
            `INSERT INTO assets
            (name, type, serial_number, assigned_to, status, purchase_date)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [
                name,
                type,
                serial_number,
                assigned_to,
                status,
                purchase_date
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to create asset"
        });
    }
};

// Update asset
export const updateAsset = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            name,
            type,
            serial_number,
            assigned_to,
            status,
            purchase_date
        } = req.body;

        const result = await pool.query(
            `UPDATE assets
             SET
                name = $1,
                type = $2,
                serial_number = $3,
                assigned_to = $4,
                status = $5,
                purchase_date = $6
             WHERE id = $7
             RETURNING *`,
            [
                name,
                type,
                serial_number,
                assigned_to,
                status,
                purchase_date,
                id
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Asset not found"
            });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to update asset"
        });
    }
};

// Delete asset
export const deleteAsset = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM assets WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Asset not found"
            });
        }

        res.status(200).json({
            message: "Asset deleted successfully"
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to delete asset"
        });
    }
};