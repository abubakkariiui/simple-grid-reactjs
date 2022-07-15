import React from 'react'

const Features = (props) => {
    return (
        <div className='flex flex-wrap place-content-center'>
            <div className='p-5'>
                <img  alt='Publication' src={props.data.url} />
                <div>
                    <p>Date : {props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Features