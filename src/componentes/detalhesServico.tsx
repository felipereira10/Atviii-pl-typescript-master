import React from "react";

type Props = {
  nome: string;
  valor: string;
  data: string; // Nova propriedade para a data do serviço
};

const DetalhesServico: React.FC<Props> = ({ nome, valor, data }) => {
  return (
    <div style={{ marginLeft: "40px", marginTop: "30px" }}>
      <div style={{ marginBottom: "20px" }}>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Valor:</b> {valor}</p>
        <p><b>Data do Serviço:</b> {data}</p> {/* Exibindo a data do serviço */}
      </div>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <button type="button" className="btn btn-success" style={{ width: "100px", marginRight: "20px" }}>
          Editar
        </button>
        <button type="button" className="btn btn-danger" style={{ width: "100px" }}>
          Excluir
        </button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <br />
        <br />
        <br />
        <h3>Informações Adicionais</h3>
        <p><b>Descrição:</b> Detalhe adicional do serviço.</p>
        <p><b>Categoria:</b> Categoria do serviço.</p>
      </div>
      <div>
        <br />
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

export default DetalhesServico;

//Substitução da class DetalhesServico extends Component<Props> por const DetalhesServico: React.FC<Props> = ({ nome, valor, data }) => {.
//Em vez de acessar this.props, fica destructuring diretamente nos parâmetros da função.
//Auto-fechamento para as tags <br />.