const carRepository = require('../repositories/carRepository');

async function listCars(req, res) {
    try {
        const carros = await carRepository.getAllCars();
        res.json(carros);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar a lista de carros", details: error.message });
    }
}

async function getCar(req, res) {
    try {
        const id = req.params.id;
        const carro = await carRepository.getCarById(id);
        
        if (carro) {
            res.json(carro);
        } else {
            res.status(404).json({ error: "Carro não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar o carro", details: error.message });
    }
}

async function createCar(req, res) {
    try {
        const novoCarro = await carRepository.createCar(req.body);
        res.status(201).json(novoCarro);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar carro", details: error.message });
    }
}

async function updateCar(req, res) {
    try {
        const id = req.params.id;
        const sucesso = await carRepository.updateCar(id, req.body);
        
        if (sucesso) {
            res.json({ message: "Carro atualizado com sucesso!" });
        } else {
            res.status(404).json({ error: "Carro não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar carro", details: error.message });
    }
}

async function deleteCar(req, res) {
    try {
        const id = req.params.id;
        const sucesso = await carRepository.deleteCar(id);
        
        if (sucesso) {
            res.json({ message: "Carro deletado com sucesso!" });
        } else {
            res.status(404).json({ error: "Carro não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar carro", details: error.message });
    }
}

module.exports = {
    listCars,
    getCar,
    createCar,
    updateCar,
    deleteCar
};