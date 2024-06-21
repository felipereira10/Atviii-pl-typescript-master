import React, { useState } from "react";

type Props = {
  tema: string;
};

const FormularioCadastroProduto: React.FC<Props> = ({ tema }) => {
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

export default FormularioCadastroProduto;
//Substituímos class por const.
//Substituímos this.state por useState para definir e atualizar o estado do componente.
//Recebemos props diretamente como parâmetros da função.
//Utilizamos os valores do estado e funções de alteração do estado (setValor) diretamente nos elementos de input.