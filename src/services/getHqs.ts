const API_KEY: string = process.env.REACT_APP_PUBLIC_API_KEY as string

function getHqs(){
    const data = fetch('https://gateway.marvel.com:443/v1/public/comics?limit=100&apikey='
                .concat(API_KEY))
                .then((dataResponse) => dataResponse.json())
    return data 
}


export {getHqs}