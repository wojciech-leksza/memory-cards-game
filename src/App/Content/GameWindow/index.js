import Card from "./Card";
import { Container } from "./styled";
import { v4 as uuid } from 'uuid';
import { useSelector } from "react-redux";
import { selectCards } from "../../slice";

const GameWindow = () => {
    const cards = useSelector(selectCards);

    return (
        <Container>
            {cards.map(card => (
                <Card key={uuid()} card={card}/>
            ))}
        </Container>
    );
};

export default GameWindow;