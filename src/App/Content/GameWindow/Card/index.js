import { useDispatch } from "react-redux";
import { check } from "../../../slice";
import { Container, Picture } from "./styled";

const Card = ({ card }) => {
    const dispatch = useDispatch();

    return (
        <Container
            onClick={() => dispatch(check(card.id))}
            checked={card.checked}
            matched={card.matched}
        >
            <Picture
                src={require(`./images/brains/${card.number}.svg`)}
                alt={card.number}
            />
        </Container>
    );
};

export default Card;