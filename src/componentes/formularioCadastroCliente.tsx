import React, { useState } from "react";

type Props = {
  tema: string;
};

const FormularioCadastroCliente: React.FC<Props> = ({ tema }) => {
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataEmissaoCpf, setDataEmissaoCpf] = useState("");
  const [dataEmissaoRg, setDataEmissaoRg] = useState("");

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d{1,4})/, "$1-$2");

    setTelefone(formattedValue);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCpf(formattedValue);
  };

  const handleDataEmissaoCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d{1,4})$/, "$1/$2");

    setDataEmissaoCpf(formattedValue);
  };

  const handleDataEmissaoRgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d{1,4})$/, "$1/$2");

    setDataEmissaoRg(formattedValue);
  };

  return (
    <div className="container-fluid mb-3">
      <div className="row justify-content-start">
        <div className="col-12 col-md-8 col-lg-3">
          <form>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Nome" 
                aria-label="Nome" 
                aria-describedby="basic-addon1" 
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Data de Nascimento (dd/mm/yyyy)" 
                aria-label="Data de Nascimento" 
                aria-describedby="basic-addon1" 
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="CPF" 
                aria-label="CPF" 
                aria-describedby="basic-addon1" 
                value={cpf}
                onChange={handleCpfChange}
                maxLength={14}
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Data de emissão CPF" 
                aria-label="Data de emissão CPF" 
                aria-describedby="basic-addon1" 
                value={dataEmissaoCpf}
                onChange={handleDataEmissaoCpfChange}
                maxLength={10}
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="RG" 
                aria-label="RG" 
                aria-describedby="basic-addon1" 
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Telefone" 
                aria-label="Telefone" 
                aria-describedby="basic-addon1"
                value={telefone}
                onChange={handleTelefoneChange}
                maxLength={15}
              />
            </div>
            <button 
              className="btn btn-secondary" 
              type="submit" 
              style={{ backgroundColor: "#e3f2fd", color: "#000000", width: "100px", marginRight: "20px", marginBottom: "30px" }}
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioCadastroCliente;

//Substituição class por const.
//Substituição this.state por useState para definir e atualizar o estado do componente.
//Props diretamente como parâmetros da função.