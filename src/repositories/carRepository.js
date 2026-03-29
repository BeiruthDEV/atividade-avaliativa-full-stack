const db = require('../config/mysql');
const Car = require('../models/carModel');

//Listar
async function getAllCars() {
    const [rows] = await db.query('SELECT * FROM carros');

    return rows.map(
        row => new Car(row.id, row.modelo, row.marca, row.ano)
    );
};

//Buscar por ID
async function getCarById(id) {
    const [rows] = await db.query (
        'SELECT * FROM carros WHERE id = ?',
        [id]
    )
    if (!rows[0])
        return null

    const row = row[0];

    return new Car(row.id, row.modelo, row.marca, row.ano);
};

module.exports = {
    getAllCars,
    getCarById
};