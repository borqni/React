const getNavigation = (user) => {

    const authLinks = [
        {
            title: "Статии",
            link: "/posts"
        },
        {
            title: "Добавете статия",
            link: "/sharePost"
        },
        {
            title: "Рецепти",
            link: "/recipes"
        },
        {
            title: "Добавете рецепта",
            link: "/shareRecipe"
        },
        {
            title: "Профил",
            link: `/profile/${user && user.id}`
        },
        {
            title: "Изход",
            link: "/logout"
        }
    ]

    const guestLinks = [
        {
            title: "Статии",
            link: "/posts"
        },
        {
            title: "Добавете статия",
            link: "/sharePost"
        },
        {
            title: "Рецепти",
            link: "/recipes"
        },
        {
            title: "Добавете рецепта",
            link: "/shareRecipe"
        },
        {
            title: "Профил",
            link: `/profile/${user && user.id}`
        },
        {
            title: "Изход",
            link: "/logout"
        },


        {
            title: "Вход",
            link: "/login"
        },

        {
            title: "Регистрация",
            link: "/register"
        }
    ]

    const loggedIn = user && user.loggedIn
    return loggedIn ? authLinks : guestLinks
}

export default getNavigation