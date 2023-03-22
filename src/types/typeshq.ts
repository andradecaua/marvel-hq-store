export type typeHqs = {
    data: {
      results: [{
        id: number
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


export type typeHq = {
    id: number,
    title: string,
    thumbnail: {
      path: string,
      extension: string
    },
    prices: [{
        type: string,
        price: number
      }]
}

