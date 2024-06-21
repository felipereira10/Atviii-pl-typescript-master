import React, { useState } from "react";

type Props = {
  tema: string;
};

const FormularioCadastroServico: React.FC<Props> = ({ tema }) => {
  const [valor, setValor] = useState("");

  const handleValorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d)(\d{2})$/, "$1,$2")
      .replace(/(?=(\d{3})+(\D))\B/g, ".");

    setValor(`R$${formattedValue}`);
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
                placeholder="Valor" 
                aria-label="Valor" 
                aria-describedby="basic-addon1"
                value={valor}
                onChange={handleValorChange}
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

export default FormularioCadastroServico;

//O componente foi transformado em um componente funcional usando a sintaxe const FormularioCadastroServico: React.FC<Props> = ({ tema }) => { ... }.
//Utilizei o hook useState para gerenciar o estado de valor. O estado inicial é definido como uma string vazia: const [valor, setValor] = useState("");.
//O evento onChange do input que controla o valor é tratado pela função handleValorChange, que utiliza setValor para atualizar o estado de valor com o valor formatado conforme o usuário digita.
