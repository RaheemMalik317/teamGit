import React from 'react'

const ResultMaster =(props) => {
    return(
        <div>
            <div>
                {props.results.map(results => {
                    return(
                        <div key = {results.events.images.url}>
                            <h3>{results.events.name}</h3>
                            <img alt="event images" src={`${results.images[0].url}`}/>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default ResultMaster;