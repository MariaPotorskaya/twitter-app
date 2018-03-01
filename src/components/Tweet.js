import React from 'react'

function Tweet(props) {
    const {article} = props
    return (
        <section className='tweet'>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
            <button>Retweet</button>
        </section>
    )
}

export default Tweet