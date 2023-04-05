export const exerciseOptions = {
    
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '248b61cec8msh8c332763162eabap11a6ffjsn5ed56ecac2a6',
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      
}

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options)
    const data = await response.json()

    return data
} 