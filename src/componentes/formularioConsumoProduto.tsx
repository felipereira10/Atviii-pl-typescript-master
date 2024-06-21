import React, { useState } from "react";

type Props = {
    tema: string;
};

const FormularioConsumoProduto: React.FC<Props> = (props) => {
    const [cpf, setCpf] = useState<string>('');
    const [produtoNome, setProdutoNome] = useState<string>('');
    const [quantidade, setQuantidade] = useState<number>(0);
    const [observacao, setObservacao] = useState<string>('');

    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, '');
        const formattedValue = value
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setCpf(formattedValue);
    }

    const handleProdutoNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProdutoNome(event.target.value);
    }

    const handleQuantidadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantidade(parseInt(event.target.value));
    }

    const handleObservacaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setObservacao(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Dados do formulário:", { cpf, produtoNome, quantidade, observacao });
    }

    return (
        <div className="container-fluid mb-3">
            <div className="row justify-content-start">
                <div className="col-12 col-md-8 col-lg-3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="CPF do cliente" 
                                value={cpf}
                                onChange={handleCpfChange}
                                maxLength={14}
                            />
                        </div>

                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome do produto" 
                                value={produtoNome}
                                onChange={handleProdutoNomeChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Quantidade" 
                                value={quantidade.toString()}
                                onChange={handleQuantidadeChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Observação" 
                                value={observacao}
                                onChange={handleObservacaoChange}
                            />
                        </div>
                        <button 
                            className="btn btn-secondary" 
                            type="submit" 
                            style={{ backgroundColor: "#e3f2fd", color: "#000000", width: "100px", marginRight: "20px", marginBottom: "30px" }}
                        >
                            Consumir
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioConsumoProduto;

//Utilizamos os hooks useState para cada variável de estado: cpf, produtoNome, quantidade e observacao.