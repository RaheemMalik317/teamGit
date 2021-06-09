import React from 'react'

const ResultMaster =(props) => {
      let resultData = props.results === undefined ? 'results failed' : props.results
      let displayInfo = props.results === undefined ? 'results failed' : 'Results Successful'
    //   let eventName = props.results === undefined ? '' : resultData._.events
    // let resultData = props.results === undefined ? 'results failed' : props.results
    // let resultData = props.results === undefined ? 'results failed' : props.results

    console.log(resultData);

    return(
        <div>
            <div>
                <h3>Results</h3>
                {displayInfo}
                {/* {eventName}  */}
                {/* {resultData.map(results => {
                    return(
                        <div key = {results._embedded.events.images.url}>
                            <h3>{results.events.name}</h3>
                            <img alt="event images" src={`${results.images[0].url}`}/>
                        </div>

                    )
                })} */}
            </div>
        </div>
    )
}

export default ResultMaster;