import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {

    //Hook - useState - manipula o estado da variável
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    //Hook - useNavigate - navega entre as páginas
    const navigate = useNavigate();

    //Função de Login
    const entrar = (e) => {
        //Previne que a página recarregue
        e.preventDefault()
        alert(`Bem-Vindo(a), ${email}`)
        //Direciona para a página home
        navigate("/")
    }

    return (
        <main className="grow flex items-center justify-center px-4 py-8">
            <div className="bg-superficie p-8 sm:p-10 rounded-[20px] w-full max-w-md shadow-2xl border-2 border-primaria">

                <h2 className="text-2xl sm:text-3xl font-extrabold text-primaria text-center mb-8 uppercase tracking-wider">
                    Login
                </h2>

                <form onSubmit={entrar} className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="campo"
                        />
                    </div>

                    <div>
                        <label htmlFor="senha" className="block mb-2 text-sm font-semibold">Senha</label>
                        <input
                            id="senha"
                            type="password"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="••••••••"
                            className="campo"
                        />
                    </div>

                    <button type="submit" className="btn w-full text-lg">
                        Entrar
                    </button>
                </form>

                <p className="text-center text-texto-suave mt-6 text-sm">
                    Ainda não tem conta? <Link to="/contato" className="text-primaria hover:underline font-medium">Fale conosco</Link>
                </p>
            </div>
        </main>
    )
}

export default Login