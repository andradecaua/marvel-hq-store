import { typeHq } from "../types/typeshq"

//FUNÇÃO QUE CRIA UM ARRAY PARA FAZER PAGINAÇÃO

function createArrayForPagination(limitForPage: number, arrayForTransfrom: any[]){  // PRIMEIRO PARAMETRO É O LIMITE DE ITENS POR PÁGINA E O SEGUNDO É O ARRAY PARA SER TRANSFORMADO EM UM ARRAY DE PAGINAÇÃO

    const arrayForPagination: typeHq[][] = [] // Array para paginação
    const lengthArrayForPagination: number = arrayForTransfrom.length / limitForPage // Calcula o tamanho do array para paginação
    const copyOfArrayForSlice = arrayForTransfrom // Variavel com a copia do segundo parametro para removermos os itens e passalos para um novo array

    for(let index = 0; index < lengthArrayForPagination; index++) // Fica em loop enquanto não pegar todos os itens
    {
        let tempArray = [] // Array temporario para armazenar os itens que serão deletados

        if(arrayForPagination.length === 0) // Verifica se o array de paginação está no seu estado inicial
        {
            tempArray =  copyOfArrayForSlice.splice(0, limitForPage) // Caso esteja pega o item do primeiro até o limit da pagina e adiciona no array temporario
            arrayForPagination.push(tempArray) // adiciona os itens deletados da copia do array para o array final de paginação
        }
        else if(copyOfArrayForSlice.length === 0){ //verica se acabou os itens dentro do arary de copia, caso sim saí do loop
            break
        }
        tempArray = copyOfArrayForSlice.splice(arrayForTransfrom.indexOf(arrayForPagination.at(-1))+1, limitForPage) // Adiciona os itens no array de paginação
        arrayForPagination.push(tempArray)
    }

    return arrayForPagination // retorna o array para paginação
}

export {createArrayForPagination}