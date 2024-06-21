import React from "react";

type Props = {
  tema: string;
  seletorView: (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ListaCliente: React.FC<Props> = ({ tema, seletorView }) => {
  const clientes = [
    { id: 1, nome: "Cliente 01" },
    { id: 2, nome: "Cliente 02" },
    { id: 3, nome: "Cliente 03" },
    { id: 4, nome: "Cliente 04" },
    { id: 5, nome: "Cliente 05" },
    { id: 6, nome: "Cliente 06" },
    { id: 7, nome: "Cliente 07" },
    { id: 8, nome: "Cliente 08" },
  ];

  return (
    <div className="container" style={{ maxWidth: "600px", marginLeft: "0" }}>
      <div className="list-group">
        {clientes.map((cliente) => (
          <a
            key={cliente.id}
            href="/cliente-x"
            className="list-group-item list-group-item-action"
            data-cliente-id={cliente.id.toString()}
            onClick={(e) => seletorView("DetalhesCliente", e)}
          >
            {cliente.nome}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ListaCliente;

//O componente foi convertido de uma classe para uma função utilizando React.FC<Props>, que é uma abreviação para React.FunctionComponent<Props>. Isso elimina a necessidade do uso de this.props e torna o código mais conciso.
//As props (tema e seletorView) são desestruturadas diretamente como parâmetros da função ListaCliente.