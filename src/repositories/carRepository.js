const db = require('../config/mysql');
const Car = require('../models/carModel');


async function getAllCars() {
    const [rows] = await db.query('SELECT * FROM carros');
    return rows.map(row => new Car(row.id, row.modelo, row.marca, row.ano));
}

async function getCarById(id) {
    const [rows] = await db.query('SELECT * FROM carros WHERE id = ?', [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new Car(row.id, row.modelo, row.marca, row.ano);
}


async function createCar(car) {
    const [result] = await db.query(
        'INSERT INTO carros (modelo, marca, ano) VALUES (?, ?, ?)',
        [car.modelo, car.marca, car.ano]
    );
    return new Car(result.insertId, car.modelo, car.marca, car.ano);
}


async function updateCar(id, car) {
    const [result] = await db.query(
        'UPDATE carros SET modelo = ?, marca = ?, ano = ? WHERE id = ?',
        [car.modelo, car.marca, car.ano, id]
    );
    return result.affectedRows > 0; 
}

async function deleteCar(id) {
    const [result] = await db.query(
        'DELETE FROM carros WHERE id = ?',
        [id]
    );
    return result.affectedRows > 0; 
}

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
};