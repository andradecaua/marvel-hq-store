import nullcart from "../../assets/carrinho_vazio.png"

function NullCart(){
    return(
        <div id="nullcart" style={{display: "grid", alignSelf: "center", height: 200}}>
            <h2 style={{textAlign: 'center'}}>
                O Carrinho está Vazio
            </h2>
            <img src={nullcart} width={120} height={120} style={{justifySelf: 'center'}} alt={"Carrinho vazio"} />
        </div>
    )
}

export default NullCart