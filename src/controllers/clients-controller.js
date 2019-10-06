const mongoose = require('mongoose');
const Clients = mongoose.model('Clients');
const util = require('util');

// list
exports.listClients = async (req, res) => {
	try {
		const data = await Clients.find({});
		res.status(200).send(data);
	} catch (e) {
		res.status(500).send({message: 'Error on list clients'});
	}
};

// create
exports.createClients = async (req, res) => {
	try {
		const clients = new Clients({
			name: req.body.name,
			email: req.body.email,
			cpf: req.body.address,
			phone: req.body.address,
			address: req.body.address,
		});
		await clients.save();
		res.status(201).send({message: 'Clients created successfully'});
	} catch (e) {
		res.status(500).send({message: 'Error on clients creation' + e});
	}
};