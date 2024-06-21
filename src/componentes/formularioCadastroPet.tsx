import React, { useState } from "react";

type Props = {
  tema: string;
};

const FormularioCadastroPet: React.FC<Props> = ({ tema }) => {
  const [cpf, setCpf] = useState("");
  const [petNome, setPetNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [raca, setRaca] = useState("");
  const [genero, setGenero] = useState("Macho");
  const [tipo, setTipo] = useState("");

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCpf(formattedValue);
  };

  const handlePetNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPetNome(event.target.value);
  };

  const handleDataNascimentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d{1,4})$/, "$1/$2");

    setDataNascimento(formattedValue);
  };

  const handleRacaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRaca(event.target.value);
  };

  const handleGeneroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenero(event.target.value);
  };

  const handleTipoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipo(event.target.value);
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
                placeholder="CPF do tutor" 
                aria-label="CPF do tutor" 
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
                placeholder="Nome do pet" 
                aria-label="Nome do pet" 
                aria-describedby="basic-addon1" 
                value={petNome}
                onChange={handlePetNomeChange}
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Data de Nascimento (dd/mm/yyyy)" 
                aria-label="Data de Nascimento" 
                aria-describedby="basic-addon1" 
                value={dataNascimento}
                onChange={handleDataNascimentoChange}
                maxLength={10}
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Raça" 
                aria-label="Raça" 
                aria-describedby="basic-addon1" 
                value={raca}
                onChange={handleRacaChange}
              />
            </div>
            <div className="mb-3">
              <select 
                className="form-select" 
                aria-label="Gênero"
                value={genero}
                onChange={handleGeneroChange}
              >
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Tipo" 
                aria-label="Tipo" 
                aria-describedby="basic-addon1" 
                value={tipo}
                onChange={handleTipoChange}
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

export default FormularioCadastroPet;
//Substituímos class por const.
//Substituímos this.state por useState para definir e atualizar o estado do componente.
//Recebemos props diretamente como parâmetros da função.
//Utilizamos os valores do estado e funções de alteração do estado (setCpf, setPetNome, etc.) diretamente nos elementos de input.