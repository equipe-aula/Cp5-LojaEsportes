import { useState } from "react"

const Contato = () => {

    //Hook - useState - guarda o que a pessoa digita em cada campo
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    //Função chamada ao enviar o formulário
    const enviar = (e) => {
        //Previne que a página recarregue
        e.preventDefault()
        alert("Mensagem enviada, " + nome)
        //Limpa os campos
        setNome("")
        setEmail("")
        setMensagem("")
    }

    return (
        <main className="px-[5%] my-10 grow grid gap-10 md:grid-cols-2">
            <section>
                
                <h2 className="titulo text-4xl mb-6">Fale Conosco</h2>
                <p className="text-texto-suave mb-4">Envie sua mensagem e responderemos o mais rápido possível.</p>
                <p className="mb-2">E-mail: contato@nextsport.com</p>
                <p>Telefone: (11) 99999-9999</p>
            </section>

            <form onSubmit={enviar} className="bg-superficie rounded-[20px] p-6 flex flex-col gap-5">
                <div>
                    <label htmlFor="nome" className="block mb-2 text-sm font-semibold">Nome</label>
                    <input
                        id="nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome"
                        className="campo"
                    />
                </div>

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
                    <label htmlFor="mensagem" className="block mb-2 text-sm font-semibold">Mensagem</label>
                    <textarea
                        id="mensagem"
                        rows="5"
                        required
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        placeholder="Escreva sua mensagem"
                        className="campo"
                    />
                </div>

                <button type="submit" className="btn text-lg">
                    Enviar mensagem
                </button>
            </form>
        </main>
    )
}

export default Contato