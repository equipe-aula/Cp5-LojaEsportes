const Sobre = () => {
    return (
        <main className="px-[5%] my-10 grow">
           
            <h2 className="titulo text-4xl mb-6">Sobre Nós</h2>
            <p className="text-texto-suave mb-4 max-w-3xl">
                Somos uma empresa que nasceu com o objetivo de oferecer qualidade e um atendimento próximo para cada cliente.
            </p>
            <p className="text-texto-suave mb-10 max-w-3xl">
                Desde o início, trabalhamos com dedicação para entregar a melhor experiência, sempre cuidando de cada detalhe.
            </p>

           
            <section className="grid gap-6 md:grid-cols-3">
                <article className="bg-superficie rounded-[20px] p-6">
                    <h3 className="text-2xl font-bold text-primaria mb-3">Missão</h3>
                    <p className="text-texto-suave">Oferecer produtos e serviços de qualidade que fazem a diferença no dia a dia.</p>
                </article>
                <article className="bg-superficie rounded-[20px] p-6">
                    <h3 className="text-2xl font-bold text-primaria mb-3">Visão</h3>
                    <p className="text-texto-suave">Ser referência no nosso segmento, reconhecida pela confiança e pelo bom atendimento.</p>
                </article>
                <article className="bg-superficie rounded-[20px] p-6">
                    <h3 className="text-2xl font-bold text-primaria mb-3">Valores</h3>
                    <p className="text-texto-suave">Respeito, transparência, compromisso e cuidado com cada pessoa.</p>
                </article>
            </section>
        </main>
    )
}

export default Sobre