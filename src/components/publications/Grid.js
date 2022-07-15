import React from 'react'

const Grid = (props) => {
    return (
        <div className='flex flex-wrap'>{
            // map function to loop features images array and print data
            props.data.map((publication, index)=>{
             return (<div key={index} className='p-5 w-1/2 md:w-4/12 lg:w-3/12'>
                <img alt='Publication' src={publication.url} />
                <p>Date : {props.date}</p>
                </div>)
            })
            }</div>
    )
}

export default Grid