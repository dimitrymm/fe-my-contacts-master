import {
    Container,
    InputSearchContainer,
    Header,
    ListContainer,
    Card,
} from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
    return (
        <Container>
            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar Contatos.." />
            </InputSearchContainer>
            <Header>
                <strong>3 Contatos</strong>
                <Link to="/new">Novo contato</Link>
            </Header>
            <ListContainer>
                <header>
                    <button type="button" className="sort-button">
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow" />
                    </button>
                </header>
            </ListContainer>
            <Card>
                <div className="info">
                    <div className="contact-name">
                        <strong>Dimitry</strong>
                        <small>Instagram</small>
                    </div>
                    <span>dimitry@gmail</span>
                    <span>16988212163</span>
                </div>
                <div className="actions">
                    <Link to="/edit/123">
                        <img src={edit} alt="Edit" />
                    </Link>
                    <button type="button">
                        <img src={trash} alt="Delete" />
                    </button>
                </div>
            </Card>
        </Container>
    );
}

fetch("http://localhost:3001/categories", {
    method: "GET",
    headers: new Headers({
        "X-App-ID": "123",
    }),
})
    .then((response) => {
        console.log("response", response);
    })
    .catch((error) => {
        console.log("erro", error);
    });
