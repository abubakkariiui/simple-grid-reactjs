import { React, useEffect, useState } from 'react'
import Features from './Features'
import Grid from './Grid'

const Publications = () => {
    // setting date
    let today = new Date().toLocaleDateString()

    // initializing hooks
    const [selectValue, setSelectValue] = useState('Grid & Featured')
    const [featuredArray, setFeatured] = useState([])
    const [latestIssueArray, setlatestIssue] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12')
            .then(response => response.json())
            .then(json => {
                setFeatured(json[5])
                setlatestIssue(json)
            })
    }, [])
    



    return (

        <div>
            {/* div for select box */}
            <div className='flex justify-end p-4'>
                <select id="Sort" value={selectValue} onInput={(event) => setSelectValue(event.target.value)} className="
                 border rounded p-2 ">
                    <option>Grid & Featured</option>
                    <option>Featured</option>
                    <option>Grid</option>
                </select>
            </div>

            {/* checking user input and displaying Grid & Featured View */}
            {selectValue === 'Grid & Featured' ?
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-5/12'>
                    < Features data={featuredArray} date={today}/>
                    </div>
                    <div className='w-full md:w-7/12'>
                    < Grid data={latestIssueArray} date={today}/> 
                    </div> 
                </div>
                : null}
            {/* displaying Grid*/}
            {selectValue === 'Grid' ?
                <div>
                    < Grid data={latestIssueArray} date={today}/>
                </div>
                : null}
            {/* displaying Featured*/}
            {selectValue === 'Featured' ?
                <div>
                    < Features data={featuredArray} date={today}/>
                </div>
                : null}
        </div>
    )
}

export default Publications