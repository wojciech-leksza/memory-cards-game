import Card from "./Card";
import { Container, Overlay, Result, StartButton, ResultTitle, ResultRow, ResultButton } from "./styled";
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { selectCards, selectLevel, selectStatus, setStatus } from "../../slice";

const GameWindow = () => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);
    const status = useSelector(selectStatus);
    const level = useSelector(selectLevel);

    return (
        <Container columns={level[0]}>
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
                        <ResultTitle>Congratulations!</ResultTitle>
                        <ResultRow>moves: 23</ResultRow>
                        <ResultRow>time: 00:00:00</ResultRow>
                        <ResultButton>
                            Play again!
                        </ResultButton>
                    </Result>
                </Overlay>
                : ""
            }
        </Container>
    );
};

export default GameWindow;