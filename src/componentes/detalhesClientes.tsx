import React from "react";

type Props = {
  nome: string;
  dataNascimento: string;
  cpf: string;
  rg: string;
  produtosConsumidos: string;
  servicosConsumidos: string;
};

const DetalhesClientes: React.FC<Props> = ({ nome, dataNascimento, cpf, rg, produtosConsumidos, servicosConsumidos }) => {
  return (
    <div style={{ marginLeft: "30px", maxWidth: "600px", marginTop: "30px" }}>
      <div style={{ marginBottom: "20px" }}>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Data de Nascimento:</b> {dataNascimento}</p>
        <p><b>CPF:</b> {cpf}</p>
        <p><b>RG:</b> {rg}</p>
        <p><b>Produtos Consumidos:</b> {produtosConsumidos}</p>
        <p><b>Serviços Consumidos:</b> {servicosConsumidos}</p>
      </div>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <button type="button" className="btn btn-success" style={{ width: "100px", marginRight: "20px" }}>
          Editar
        </button>
        <button type="button" className="btn btn-danger" style={{ width: "100px" }}>
          Excluir
        </button>
      </div>
      <div>
        <br />
        <h3>Histórico de Compras</h3>
        <ul>
          <li>Produto 01 - R$ 20,00</li>
          <li>Produto 02 - R$ 30,00</li>
          <li>Produto 03 - R$ 25,00</li>
        </ul>
      </div>
      <div>
        <h3>Histórico de Serviços</h3>
        <ul>
          <li>Serviço 01 - R$ 50,00</li>
          <li>Serviço 02 - R$ 40,00</li>
          <li>Serviço 03 - R$ 35,00</li>
        </ul>
      </div>
    </div>
  );
};

export default DetalhesClientes;

//Substitução class DetalhesClientes extends Component<Props> por const DetalhesClientes: React.FC<Props> = ({ nome, dataNascimento, cpf, rg, produtosConsumidos, servicosConsumidos }) => {.
//O conteúdo do método render foi movido diretamente para o corpo da função.
//As props foram desestruturadas diretamente nos parâmetros da função.
