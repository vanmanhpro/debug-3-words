const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
	ownerId:{
		type: String,
		require: true
	},
	url:{
		type: String,
		require: true
	},
	interest:{
		type: Number,
		require: true
	},
	voters:{
		type: [],
		default: []
	},
	words: [{type: Schema.Types.ObjectId, ref: 'words'}]
},
{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('images', ImageSchema);