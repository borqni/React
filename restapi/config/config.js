const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        // dbURL: 'mongodb://localhost:27017/recipesDb',
        dbURL: 'mongodb+srv://ani:1234@react.equ9c.mongodb.net/recipesDb?retryWrites=true&w=majority',
        // dbURL: 'mongodb+srv://ani:1234@cluster0.qxi6y.mongodb.net/recipeDb?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];