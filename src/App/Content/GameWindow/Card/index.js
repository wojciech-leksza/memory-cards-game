import { useDispatch, useSelector } from "react-redux";
import { check, selectStatus } from "../../../slice";
import { Container, Picture } from "./styled";

const Card = ({ card }) => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    const onClickHandler = () => {
        if (status === "play"){
            dispatch(check(card.id));
        };
    };

    return (
        <Container
            onClick={onClickHandler}
            checked={card.checked}
            matched={card.matched}
        >
            <Picture
                src={require(`./images/brains/${card.number}.svg`)}
                alt={card.number}
                checked={card.checked}
                matched={card.matched}
            />
        </Container>
    );
};

export default Card;