const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        // dbURL: 'mongodb://localhost:27017/recipesDb',
        dbURL: 'mongodb+srv://user:123-pass@cluster0.qxi6y.mongodb.net/recipeDb?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];