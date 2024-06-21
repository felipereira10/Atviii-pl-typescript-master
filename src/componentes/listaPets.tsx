import React from "react";

type Props = {
  tema: string;
  seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ListaPet: React.FC<Props> = ({ tema, seletorView }) => {
  return (
    <div className="container-fluid" style={{ maxWidth: "600px", marginLeft: "0" }}>
      <div className="list-group">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <a
            key={id}
            href={`/pet-x`}
            className="list-group-item list-group-item-action"
            data-pet-id={id}
            onClick={(e) => seletorView("DetalhesPet", e)}
          >
            Pet {id.toString().padStart(2, "0")}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListaPet;