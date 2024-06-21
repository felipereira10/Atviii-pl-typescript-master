import React from "react";

type Props = {
  nome: string;
  valor: string;
};

const DetalhesProduto: React.FC<Props> = ({ nome, valor }) => {
  return (
    <div style={{ marginLeft: "40px", marginTop: "30px" }}>
      <div style={{ marginBottom: "20px" }}>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Valor:</b> {valor}</p>
      </div>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <button type="button" className="btn btn-success" style={{ width: "100px", marginRight: "20px" }}>
          Editar
        </button>
        <button type="button" className="btn btn-danger" style={{ width: "100px" }}>
          Excluir
        </button>
      </div>
      <br />
      <br />
      <div style={{ marginBottom: "20px" }}>
        <h3>Informações Adicionais</h3>
        <p><b>Descrição:</b> Detalhe adicional do produto.</p>
        <p><b>Categoria:</b> Categoria do produto.</p>
      </div>
      <div>
        <br />
        <h3>Ações Rápidas</h3>
        <button type="button" className="btn btn-primary" style={{ width: "150px", marginRight: "20px" }}>
          Ver Histórico
        </button>
        <button type="button" className="btn btn-warning" style={{ width: "150px" }}>
          Duplicar
        </button>
      </div>
    </div>
  );
};

export default DetalhesProduto;
//Substitução class DetalhesProduto extends Component<Props> por const DetalhesProduto: React.FC<Props> = ({ nome, valor }) => {.
//Em componentes funcionais, não há necessidade de um método render. O JSX é retornado diretamente da função.
//Em vez de acessar this.props, alterado para destructuring diretamente nos parâmetros da função.