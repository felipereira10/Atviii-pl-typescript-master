import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioConsumoProduto from "./formularioConsumoProduto";
import FormularioConsumoServico from "./formularioConsumoServico";
import ListaCliente from "./listaClientes";
import ListaPet from "./listaPets";
import ListaServico from "./listaServicos";
import ListaProduto from "./listaProdutos";
import ListaServProdMaisConsumidos from "./ListaServProdMaisConsumidos";
import ListaClientesMaisConsumiramQuantidade from "./listaClientesMaisConsumiramQuantidade";
import ListaServProdMaisConsumidosTipoRaca from "./listaServProdMaisConsumidosTipoRaca";
import ListaClientesMaisConsumiramValor from "./listaClientesMaisConsumiramValor";
import DetalhesCliente from "./detalhesClientes";
import DetalhesPet from "./detalhesPet";
import DetalhesProduto from "./detalhesProduto";
import DetalhesServico from "./detalhesServico";

const Roteador: React.FC = () => {
  const [tela, setTela] = useState<string>("Cadastros");
  const [clienteSelecionado, setClienteSelecionado] = useState<null | string>(null);
  const [petSelecionado, setPetSelecionado] = useState<null | string>(null);

  const selecionarView = (novaTela: string, evento: React.MouseEvent<HTMLAnchorElement>) => {
    evento.preventDefault();
    setTela(novaTela);
    setClienteSelecionado(evento.currentTarget.getAttribute("data-cliente-id"));
    setPetSelecionado(evento.currentTarget.getAttribute("data-pet-id"));
  };

  const barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="#e3f2fd"
      botoes={["Cadastros", "Consumir", "Clientes", "Pets", "Produtos", "Serviços", "Consumos"]}
    />
  );

  const renderTela = () => {
    switch (tela) {
      case "Clientes":
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Listagem de Clientes</h2>
            <ListaCliente tema="#e3f2fd" seletorView={selecionarView} />
          </>
        );
      case "Cadastros":
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Cadastrar Cliente</h2>
            <FormularioCadastroCliente tema="#00000" />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar Pet</h2>
            <FormularioCadastroPet tema="#00000" />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar Produto</h2>
            <FormularioCadastroProduto tema="#e3f2fd" />
            <h2 style={{ marginLeft: "40px" }}>Cadastrar Serviço</h2>
            <FormularioCadastroServico tema="#e3f2fd" />
          </>
        );
      case "Pets":
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Listagem de Pets</h2>
            <ListaPet tema="#e3f2fd" seletorView={selecionarView} />
          </>
        );
      case "Produtos":
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Listagem de Produtos</h2>
            <ListaProduto tema="#e3f2fd" seletorView={selecionarView} />
          </>
        );
      case "Serviços":
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Listagem de Serviços</h2>
            <ListaServico tema="#e3f2fd" seletorView={selecionarView} />
          </>
        );
      case "Consumir":
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Consumir um produto</h2>
            <FormularioConsumoProduto tema="#e3f2fd" />
            <h2 style={{ marginLeft: "40px" }}>Consumir um serviço</h2>
            <FormularioConsumoServico tema="#e3f2fd" />
          </>
        );
      case "Consumos":
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>10 Clientes que mais consumiram em quantidade</h2>
            <ListaClientesMaisConsumiramQuantidade tema="#e3f2fd" />
            <h2 style={{ marginLeft: "40px" }}>5 clientes que mais consumiram em valor</h2>
            <ListaClientesMaisConsumiramValor tema="#e3f2fd" />
            <h2 style={{ marginLeft: "40px" }}>Serviços/Produtos mais consumidos</h2>
            <ListaServProdMaisConsumidos tema="#e3f2fd" />
            <h2 style={{ marginLeft: "40px" }}>Serviços/produtos mais consumidos por tipo e raça de pets</h2>
            <ListaServProdMaisConsumidosTipoRaca tema="#e3f2fd" />
          </>
        );
      case "DetalhesCliente":
        const detalhesCliente = {
          nome: "Cliente 01",
          dataNascimento: "10/10/2001",
          cpf: "000.000.000-00",
          rg: "00.000.000-0",
          produtosConsumidos: "produtos",
          servicosConsumidos: "serviços",
        };
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Detalhes do Cliente</h2>
            <DetalhesCliente {...detalhesCliente} />
          </>
        );
      case "DetalhesPet":
        const detalhesPet = {
          cliente: 'Cliente 04',
          nome: 'Pet 02',
          tipo: 'Cachorro',
          raca: 'Labrador',
          genero: 'Masculino',
          nascimento: '12/12/2012'
        };
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Detalhes do Pet</h2>
            <DetalhesPet {...detalhesPet} />
          </>
        );
      case "DetalhesProduto":
        const detalhesProduto = {
          nome: 'Produto Exemplo',
          valor: 'R$ 100,00'
        };
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Detalhes do Produto</h2>
            <DetalhesProduto {...detalhesProduto} />
          </>
        );
      case "DetalhesServico":
        const detalhesServico = {
          nome: 'Serviço Exemplo',
          valor: 'R$ 100,00',
          data: '12/12/2012'
        };
        return (
          <>
            {barraNavegacao}
            <h2 style={{ marginLeft: "40px" }}>Detalhes do Serviço</h2>
            <DetalhesServico {...detalhesServico} />
          </>
        );
      default:
        return null;
    }
  };

  return renderTela();
};

export default Roteador;
//Class Roteador extends Component<{}, State> por const Roteador: React.FC = () => {.
//Substituição do estado this.state e this.setState pelo hook useState.
//A função renderTela foi mantida dentro do componente funcional e usa o estado diretamente.
