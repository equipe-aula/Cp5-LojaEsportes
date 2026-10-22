import { Link } from "react-router-dom"
import ProdutoCard from "../components/ProdutoCard"
import produtoImg from "../assets/BolaFutebolAmericano.jpg"
import Camisasele from "../assets/imagemproduto.jpg"
import Kitbase from "../assets/KitBaseball.jpg"
import KitTenis from "../assets/KitTenis.jpg"

const Home = () => {

    
    const produtos = [
        { id: 1, nome: "Bola de Futebol Americano", preco: "R$ 100,00", imagem: produtoImg },
        { id: 2, nome: "Camisa da Seleção Brasileira", preco: "R$ 250,00", imagem: Camisasele },
        { id: 3, nome: "Kit de Baseball", preco: "R$ 400,00", imagem: Kitbase },
        { id: 4, nome: "Kit para Tenis", preco: "R$ 350,00", imagem: KitTenis }
    ];

    return (
        <main className="px-[5%] mt-10 mb-16 grow">
          
            <section className="text-center py-16">
                <h1 className="titulo text-4xl md:text-6xl mb-4">Bem-vindo à Nossa Loja</h1>
                <p className="text-texto-suave text-xl mb-8">Qualidade e atendimento que você merece</p>
                <Link to="/produtos" className="btn">Ver produtos</Link>
            </section>

            <h2 className="titulo text-4xl text-center py-6">Produtos em Destaque</h2>

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

export default Home