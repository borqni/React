import React from 'react'
import style from './index.module.css'

const RecipeDetails = ({ title, img, description, author, date, id, category, ingredients, cooking, like, edit, delite }) => {
    return (
        <section className="details">
            <img src="https://m5.netinfo.bg/media/images/32740/32740173/960-540-hrana.jpg" className="detailsImg" />
            <div >
                <h3>Recept 1</h3>
                <p>Категория: Основно</p>

                {/* <div className="ingredients"> */}
                <h4>Съставки:</h4>
                <p>1кг. месо, 1 глава лук, 1 морков, сол, ч.пипер </p>
                {/* </div> */}
                {/* </div>
            <div className="cooking"> */}
                <h4>Начин на приготвяне:</h4>
                <p>нарежете месото и зеленчуците и ги овкусете с подправките, сложете в тава и печете до готовност.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui aspernatur autem
                maiores nihil eveniet architecto odio, veniam accusamus commodi magnam fuga ex, expedita nam
                ipsum ducimus ratione eius deleniti?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui aspernatur autem
                maiores nihil eveniet architecto odio, veniam accusamus commodi magnam fuga ex, expedita nam
                ipsum ducimus ratione eius deleniti?
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