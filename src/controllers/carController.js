const carRepository = require('../repositories/carRepository');
//Listar

async function listCars(req, res) {
    const cars = await carRepository.getAllCars();
    res.json(cars);
}

//Buscar por ID
async function getCar(req, res) {
    const car = await carRepository.getCarById(req.params.id);

    if (!car) {
        return res.status(400).json({ erro: "Carro não encontrado" });
    }
    res.json(car);
}

module.exports = {
    listCars,
    getCar
};