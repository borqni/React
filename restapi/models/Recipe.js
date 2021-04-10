const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const recipeSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    categorie: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    like: {
        type: ObjectId,
        ref: "User"
    },

    author: {
        type: ObjectId,
        ref: "User"
    },

    ingredients: {
        type: String,
        required: true,
    },

    cooking: {
        type: String,
        required: true,
    }


}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Recipe', recipeSchema);