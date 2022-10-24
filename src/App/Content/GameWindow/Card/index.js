import { Container } from "./styled";

const Card = ({ number }) => (
    <Container>
        <img src={require(`./images/brains/${number}.svg`)} alt={number} />
    </Container>
);

export default Card;