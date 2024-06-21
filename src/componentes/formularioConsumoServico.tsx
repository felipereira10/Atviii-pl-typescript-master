import React, { useState } from "react";

type Props = {
    tema: string;
};

type State = {
    cpf: string;
    petNome: string;
    servicoNome: string;
    observacao: string;
};

const FormularioConsumoServico: React.FC<Props> = (props) => {
    const [cpf, setCpf] = useState<string>('');
    const [petNome, setPetNome] = useState<string>('');
    const [servicoNome, setServicoNome] = useState<string>('');
    const [observacao, setObservacao] = useState<string>('');

    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, '');
        const formattedValue = value
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setCpf(formattedValue);
    }

    const handlePetNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPetNome(event.target.value);
    }

    const handleServicoNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setServicoNome(event.target.value);
    }

    const handleObservacaoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setObservacao(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Dados do formulário:", { cpf, petNome, servicoNome, observacao });
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
                                placeholder="Nome do pet" 
                                value={petNome}
                                onChange={handlePetNomeChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nome do serviço" 
                                value={servicoNome}
                                onChange={handleServicoNomeChange}
                            />
                        </div>
                        <div className="mb-3">
                            <textarea 
                                className="form-control" 
                                placeholder="Observação" 
                                value={observacao}
                                onChange={handleObservacaoChange}
                                rows={4} // Quantidade de linhas visíveis do campo de texto
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

export default FormularioConsumoServico;
//Utilizamos os hooks useState para cada variável de estado: cpf, petNome, servicoNome e observacao.