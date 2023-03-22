const API_KEY: string = process.env.REACT_APP_PUBLIC_API_KEY as string

function getHQ(idhq: string){
    const hq = fetch(`https://gateway.marvel.com:443/v1/public/comics/${idhq}?apikey=`
                .concat(API_KEY))
                .then((hq) => hq.json())
    return hq
}

export {getHQ}