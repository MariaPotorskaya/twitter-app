import React from 'react'
import Tweet from './Tweet'
import articles from '../fixtures'

function Thread() {
    return (
        <section className='thread'>
            <Tweet article={articles[0]} />
            <Tweet article={articles[1]} />
        </section>
    )
}

export default Thread