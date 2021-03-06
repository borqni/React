const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const length = req.query.length ? parseInt(req.query.length) : 100
        models.Recipe.find().sort('-created_at').limit(length).populate('author')
            .then((recipe) => res.send(recipe))
            .catch(next);
    },

    post: (req, res, next) => {
        const { title, categorie, image, like, ingredients, cooking } = req.body;
        const { _id } = req.user;

        models.Recipe.create({ title, categorie, image, like, ingredients, cooking, author: _id })
            .then((createdRecipe) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdRecipe } }),
                    models.Recipe.findOne({ _id: createdRecipe._id })
                ]);
            })
            .then(([modifiedObj, recipeObj]) => {
                res.send(recipeObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Recipe.updateOne({ _id: id }, { description })
            .then((updatedRecipe) => res.send(updatedRecipe))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Recipe.deleteOne({ _id: id })
            .then((removedRecipe) => res.send(removedRecipe))
            .catch(next)
    }
};