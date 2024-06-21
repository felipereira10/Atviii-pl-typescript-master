import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

type Props = {
    tema: string,
    botoes: string[],
    seletorView: (valor: string, e: React.MouseEvent<HTMLAnchorElement>) => void
}

const BarraNavegacao: React.FC<Props> = ({ tema, botoes, seletorView }) => {

    const gerarListaBotoes = () => {
        if (botoes.length <= 0) {
            return <></>
        } else {
            return botoes.map(valor =>
                <li key={valor} className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => seletorView(valor, e)} style={{ backgroundColor: "#e3f2fd", color: "#000000" }}>{valor}</a>
                </li>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg justify-content-center" data-bs-theme="light" style={{ backgroundColor: "#e3f2fd", marginBottom: 10 }}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1" style={{color: "#000000"}}>
                        PetLovers</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            {gerarListaBotoes()}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default BarraNavegacao;

//Substitução class BarraNavegacao extends Component<props> por const BarraNavegacao: React.FC<Props> = ({ tema, botoes, seletorView }) => {.
//Como o hook useCallback não foi necessário, o método gerarListaBotoes foi definido diretamente na função.
//As props foram desestruturadas diretamente nos parâmetros da função.