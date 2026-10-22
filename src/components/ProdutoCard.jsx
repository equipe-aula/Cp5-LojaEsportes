const ProdutoCard = ({nome, preco, imagem}) => {


  const comprar = () => {
    alert(nome + " adicionado!")
  }

  return (
    <div className="bg-superficie m-3.5 rounded-[20px] overflow-hidden border-4 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-primaria">
      <img src={imagem} alt={nome} className="w-full h-[260px] object-cover"/>

      <article className="text-center p-4">
        <h2 className="text-xl text-primaria uppercase mb-3 font-bold">{nome}</h2>
        <p className="text-texto text-2xl font-bold mb-4">{preco}</p>

       
        <button onClick={comprar} className="btn">
          Comprar
        </button>

      </article>

    </div>
  )
}

export default ProdutoCard