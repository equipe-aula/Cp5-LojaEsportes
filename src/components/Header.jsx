import { Link } from "react-router-dom"


const classeLink = "font-texto text-texto text-lg no-underline hover:text-primaria hover:underline transition-all"

const Header = () => {
    return (
        <header className="flex flex-wrap justify-between items-center gap-4 py-6 px-[5%] bg-superficie">
            <h1 className="logo p-2 text-[2rem] font-bold cursor-pointer transition-all text-texto">
                NEXT<span className="titulo p-4">SPORT</span></h1>
            <nav>
                <ul className="flex flex-wrap list-none items-center gap-8">
                    <li>
                        <Link to="/" className={classeLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/produtos" className={classeLink}>Produtos</Link>
                    </li>
                    <li>
                        <Link to="/sobre" className={classeLink}>Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato" className={classeLink}>Contato</Link>
                    </li>
                    <li>
                        <Link to="/login" className={classeLink}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header