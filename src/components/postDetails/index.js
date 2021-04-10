import React from 'react'

const Details = ({ title, img, description, author, date, id, comments }) => {
    return (
        <section className="details">
            <img className="fullImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpzkQ6ifPwwgGEjzB9l7dNHv_D33GnGHEvg&usqp=CAU" />
            <div>
                <h4>Топ 30 на най-алкалните храни за човешкото здраве</h4>
                <p>публикувано на {date} от {author} </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptatum veniam odit
                reprehenderit
                minus optio eum, iste laudantium illo minima. Odit laborum totam id ipsam explicabo tempora
                adipisci
                alias modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat culpa, animi
                nostrum incidunt architecto quibusdam atque officia dignissimos, laboriosam sit ab harum earum
                aliquid repellat eaque quasi aperiam autem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam praesentium accusantium similique laborum temporibus pariatur magni, modi veritatis minus,
                aliquid neque soluta. Ipsam dicta laboriosam dolor iure et quod veritatis.Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Modi voluptatum veniam odit
                reprehenderit
                minus optio eum, iste laudantium illo minima. Odit laborum totam id ipsam explicabo tempora
                adipisci
                alias modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat culpa, animi
                nostrum incidunt architecto quibusdam atque officia dignissimos, laboriosam sit ab harum earum
                aliquid repellat eaque quasi aperiam autem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam praesentium accusantium similique laborum temporibus pariatur magni, modi veritatis minus,
                aliquid neque soluta. Ipsam dicta laboriosam dolor iure et quod veritatis.Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Modi voluptatum veniam odit
                reprehenderit
                minus optio eum, iste laudantium illo minima. Odit laborum totam id ipsam explicabo tempora
                adipisci
                alias modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat culpa, animi
                nostrum incidunt architecto quibusdam atque officia dignissimos, laboriosam sit ab harum earum
                aliquid repellat eaque quasi aperiam autem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam praesentium accusantium similique laborum temporibus pariatur magni, modi veritatis minus,
    aliquid neque soluta. Ipsam dicta laboriosam dolor iure et quod veritatis.</p>
                <button>Comment</button>
            </div>
        </section>
    )
}

export default Details