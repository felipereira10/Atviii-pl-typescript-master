import React from "react";

type Props = {
  tema: string;
};

const ListaClientesMaisConsumiramQuantidade: React.FC<Props> = ({ tema }) => {
  return (
    <div className="container-fluid mb-3">
      <div className="row">
        <div className="col-12 col-md-3 ml-md-0 mr-md-auto">
          <div className="list-group">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <a
                key={id}
                href={`/consumo-${id}`}
                className="list-group-item list-group-item-action"
                data-cliente-id={id}
              >
                Consumo {id.toString().padStart(2, "0")}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaClientesMaisConsumiramQuantidade;