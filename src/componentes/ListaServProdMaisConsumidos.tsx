import React from "react";

type Props = {
  tema: string;
};

const ListaServProdMaisConsumidos: React.FC<Props> = ({ tema }) => {
  const formatarNumero = (numero: number): string => {
    return numero < 10 ? `0${numero}` : `${numero}`;
  };

  const quantidades = [1, 2, 3, 4, 5];

  return (
    <div className="container-fluid mb-3">
      <div className="row">
        <div className="col-12 col-md-3 ml-md-0">
          <div className="list-group">
            {quantidades.map((quantidade) => (
              <a
                key={quantidade}
                href={`/consumo-${quantidade}`}
                className="list-group-item list-group-item-action"
                data-cliente-id={quantidade}
              >
                Consumo {formatarNumero(quantidade)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaServProdMaisConsumidos;