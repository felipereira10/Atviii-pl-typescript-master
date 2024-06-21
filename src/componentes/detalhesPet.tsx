import React from "react";

type Props = {
  cliente: string;
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
  nascimento: string;
};

const DetalhesPet: React.FC<Props> = ({ cliente, nome, tipo, raca, genero, nascimento }) => {
  return (
    <div style={{ marginLeft: "40px", marginTop: "30px" }}>
      <div style={{ marginBottom: "20px" }}>
        <p><b>Tutor:</b> {cliente}</p>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Tipo:</b> {tipo}</p>
        <p><b>Raça:</b> {raca}</p>
        <p><b>Gênero:</b> {genero}</p>
        <p><b>Nascimento:</b> {nascimento}</p>
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
        <h3>Ações Rápidas</h3>
        <button type="button" className="btn btn-primary" style={{ width: "150px", marginRight: "20px" }}>
          Histórico Médico
        </button>
        <button type="button" className="btn btn-warning" style={{ width: "150px" }}>
          Adicionar Observação
        </button>
      </div>
    </div>
  );
};

export default DetalhesPet;

//Substitução class DetalhesPet extends Component<Props> por const DetalhesPet: React.FC<Props> = ({ cliente, nome, tipo, raca, genero, nascimento }) => {.
//Em vez de acessar this.props, alterado para destructuring diretamente nos parâmetros da função.