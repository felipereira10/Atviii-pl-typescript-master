import React from "react";

type Props = {
  tema: string;
  seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ListaServico: React.FC<Props> = ({ tema, seletorView }) => {
  const servicos = [
    { id: 1, nome: "Serviço 01" },
    { id: 2, nome: "Serviço 02" },
    { id: 3, nome: "Serviço 03" },
    { id: 4, nome: "Serviço 04" },
    { id: 5, nome: "Serviço 05" },
    { id: 6, nome: "Serviço 06" },
    { id: 7, nome: "Serviço 07" },
    { id: 8, nome: "Serviço 08" },
  ];

  return (
    <div className="container-fluid" style={{ maxWidth: "600px", marginLeft: "0" }}>
      <div className="list-group">
        {servicos.map((servico) => (
          <a
            key={servico.id}
            href="/servico-x"
            className="list-group-item list-group-item-action"
            data-cliente-id={servico.id.toString()}
            onClick={(e) => seletorView("DetalhesServico", e)}
          >
            {servico.nome}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListaServico;