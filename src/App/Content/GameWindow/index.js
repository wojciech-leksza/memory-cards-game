import Card from "./Card";
import { Container, Overlay, Result, StartButton } from "./styled";
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { selectCards, selectStatus, setStatus } from "../../slice";

const GameWindow = () => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);
    const status = useSelector(selectStatus);

    return (
        <Container>
            {cards.map(card => (
                <Card key={uuid()} card={card} />
            ))}
            {status === "init"
                ? <Overlay>
                    <StartButton onClick={() => dispatch(setStatus("play"))}>
                        start
                    </StartButton>
                </Overlay>
                : ""
            }
            {status === "finish"
                ? <Overlay>
                    <Result>
                        Wynik
                    </Result>
                </Overlay>
                : ""
            }
        </Container>
    );
};

export default GameWindow;