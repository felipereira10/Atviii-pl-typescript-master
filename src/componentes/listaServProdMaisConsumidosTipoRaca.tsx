import React from "react";

type Props = {
  tema: string;
};

const ListaServProdMaisConsumidosTipoRaca: React.FC<Props> = ({ tema }) => {
  const consumos = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <div className="container-fluid mb-3">
      <div className="row">
        <div className="col-12 col-md-3 ml-md-0">
          <div className="list-group">
            {consumos.map((consumo) => (
              <a
                key={consumo}
                href={`/consumo-${consumo}`}
                className="list-group-item list-group-item-action"
                data-cliente-id={consumo}
              >
                Consumo {consumo < 10 ? `0${consumo}` : consumo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaServProdMaisConsumidosTipoRaca;