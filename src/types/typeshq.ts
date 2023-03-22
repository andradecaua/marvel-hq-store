export type typeHqs = {
    data: {
      results: [typeHq]
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
      }],
    description: string
}

