import React from "react";

type Props = {
  tema: string;
  seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ListaProduto: React.FC<Props> = ({ tema, seletorView }) => {
  return (
    <div className="container-fluid" style={{ maxWidth: "600px", marginLeft: "0" }}>
      <div className="list-group">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <a
            key={id}
            href={`/produto-x`}
            className="list-group-item list-group-item-action"
            data-cliente-id={id}
            onClick={(e) => seletorView("DetalhesProduto", e)}
          >
            Produto {id.toString().padStart(2, "0")}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListaProduto;