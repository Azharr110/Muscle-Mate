export const exerciseOptions = {
    
    // method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    // headers: {
     
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    //   'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //     }
      

    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '9c91cca313msh153546c38874335p132748jsnddd8f9826fb5',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  }  

      export const youtubeOptions = {
        method: 'GET',
      
        headers: {
          
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };

      // console.log(process.env.REACT_APP_RAPID_API_KEY)
        export const fetchData = async (url, options) =>{
    const response = await fetch(url, options)
    const data = await response.json()

    return data
} 