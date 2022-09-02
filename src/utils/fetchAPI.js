// this is Util fn.. not custom hook. 
// this needs api url, method, and data

export const fetchApi = (url, method) => {

  return fetch(url, )
    .then( (res) => {
      if(res && res.status === 200){
        return res.json();
      }else{
        throw new Error('Invalid resp');
      }
    })
    .catch( (err) => {
      console.log(err);
    })
    .finally( () => {
      console.log('It is over!');
    })

}