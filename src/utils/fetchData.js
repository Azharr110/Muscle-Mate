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
 
      'X-RapidAPI-Key': 'b9b895c497msha7162157c60136dp1f7c45jsnb043f24603c0', // At, az786, az7866, az110
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',

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
    // console.log(data);

    return data
} 