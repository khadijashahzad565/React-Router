import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom' // import the useLoaderData hook from react-router-dom

function Github() {
    const data = useLoaderData() // use the useLoaderData hook to get the data from the loader function

     
    // const [data, setData] = useState([]) // state to store the data from the github api
    // useEffect(() => {
    //     fetch('https://api.github.com/users/khadijashahzad565')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    // })
            
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}</div> // data is the object that we get from the github api
  )
}

export default Github


export const githubInfoLoader = async () => { // async function to fetch data from github api
    const response = await fetch('https://api.github.com/users/khadijashahzad565') // fetch data from github api
    return response.json()
}