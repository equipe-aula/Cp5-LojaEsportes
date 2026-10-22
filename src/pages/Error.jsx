import { Link } from "react-router-dom"

const Error = () => {
    return (
        <main className="px-[5%] my-20 grow text-center flex flex-col items-center">
            <h2 className="titulo text-6xl mb-4">404</h2>
          
            <p className="text-texto text-2xl font-bold mb-2">Ops! Página não encontrada</p>
            <p className="text-texto-suave mb-8 max-w-md">A página que você está procurando não existe ou foi removida.</p>
            <Link to="/" className="btn">Voltar para o início</Link>
        </main>
    )
}

export default Error