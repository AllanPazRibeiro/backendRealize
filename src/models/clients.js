const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validator = require('validator');

const schema = new Schema({
	name: {
		type: String,
		required: [true, 'The Name field is required.'],
	},
	address: {
		type: String,
		required: [true, 'The Addresss field is required.'],
		trim: true
	},
	phone: {
		type: String,
		required: [true, 'The Phone Number field is required.'],
	},
	cpf: {
		type: String,
		required: [true, 'The CPF field is required.'],
	},
	email: {
		type: String,
		required: [true, 'The Email field is required.'],
		trim: true,
		minlength: 3,
		unique: true,
		validate: {
			validator: value => validator.isEmail(value),
			message: '{VALUE} is not valid email'
		}
	},
});

module.exports = mongoose.model('Clients', schema);