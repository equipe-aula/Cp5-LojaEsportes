import ProdutoCard from "../components/ProdutoCard"
import BolaFutebolAmericano from "../assets/BolaFutebolAmericano.jpg"
import imagemproduto from "../assets/imagemproduto.jpg"
import KitBaseball from "../assets/KitBaseball.jpg"
import KitTenis from "../assets/KitTenis.jpg"

const Produtos = () => {

    // TROQUE: nome e preço de cada item (a foto é a src/assets/produto.jpg)
    const produtos = [
        { id: 1, nome: "Produto 01", preco: "R$ 100,00", imagem: imagemproduto },
        { id: 2, nome: "Produto 02", preco: "R$ 150,00", imagem: KitBaseball },
        { id: 3, nome: "Produto 03", preco: "R$ 200,00", imagem: KitTenis },
        { id: 4, nome: "Produto 04", preco: "R$ 250,00", imagem: BolaFutebolAmericano }
    ];

    return (
        <main className="px-[5%] mt-10 mb-16 grow">
            
            <h2 className="titulo text-4xl text-center pt-6 pb-2">Nossos Produtos</h2>
            <p className="text-texto-suave text-center mb-10">Confira tudo o que temos para você</p>

            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
                {produtos.map((produto) => (
                    <ProdutoCard
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        imagem={produto.imagem}
                    />
                ))}
            </section>
        </main>
    )
}

export default Produtos