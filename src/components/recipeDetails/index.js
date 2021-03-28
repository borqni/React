import React from 'react'

const RecipeDetails = ({ title, img, description, author, date, id, category, ingredients, cooking, like, edit, delite }) => {
    return (
        <section class="detailsRecipe">
            <div >
                <img src="https://m5.netinfo.bg/media/images/32740/32740173/960-540-hrana.jpg" class="detailsImg" />
                <h3>Recept 1</h3>
                <p>Основно</p>

                <div class="ingredients">
                    <h4>Съставки:</h4>
                    <p>1кг. месо, 1 глава лук, 1 морков, сол, ч.пипер </p>
                </div>
            </div>
            <div class="cooking">
                <h4>Начин на приготвяне:</h4>
                <p>нарежете месото и зеленчуците и ги овкусете с подправките, сложете в тава и печете до готовност.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui aspernatur autem
                maiores nihil eveniet architecto odio, veniam accusamus commodi magnam fuga ex, expedita nam
                ipsum ducimus ratione eius deleniti?    </p>
                <button>харесай</button>
                <button>промени</button>
                <button>изтриване</button>
            </div>
        </section>
    )
}

export default RecipeDetails