import { Card, Container, Header, ListContainer } from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";

export default function ContactsList() {
    return (
        <>
            <Container>
                <Header>
                    <strong>3 Contatos</strong>
                    <a href="/">Novo contato</a>
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
                        <a href="/">
                            <img src={edit} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="Delete" />
                        </button>
                    </div>
                </Card>
            </Container>
        </>
    );
}
