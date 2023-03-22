type typeHqs = {
  data: {
    results: [{
      title: string,
      thumbnail: {
        path: string,
        extension: string
      },
      prices: [{
        type: string,
        price: number
      }]
    }]
  }
}

function filterHqsWithNoImageAvaliable(hqs: typeHqs){

    let hqsArrayForModifed = hqs

    hqsArrayForModifed.data.results.forEach((hq, indexHQ) => {
        if(hq.thumbnail.path.includes('image_not_available')){
            hqsArrayForModifed.data.results.splice(indexHQ, 1)
            filterHqsWithNoImageAvaliable(hqsArrayForModifed)
        }
    })

    return hqsArrayForModifed
}

export {filterHqsWithNoImageAvaliable}