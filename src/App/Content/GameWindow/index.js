import Card from "./Card";
import { Container, Overlay, Result, StartButton, ResultTitle, ResultRow, ResultButton } from "./styled";
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { restart, selectCards, selectLevel, selectMoves, selectStatus, start } from "../../slice";
import { useTime } from "../../timer";

const GameWindow = () => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);
    const status = useSelector(selectStatus);
    const level = useSelector(selectLevel);
    const moves = useSelector(selectMoves);
    const time = useTime();

    return (
        <Container columns={level[0]}>
            {cards.map(card => (
                <Card key={uuid()} card={card} />
            ))}
            {status === "init"
                ? <Overlay>
                    <StartButton onClick={() => dispatch(start())}>
                        start
                    </StartButton>
                </Overlay>
                : ""
            }
            {status === "finish"
                ? <Overlay>
                    <Result>
                        <ResultTitle>Congratulations!</ResultTitle>
                        <ResultRow>moves: {moves}</ResultRow>
                        <ResultRow>time: {time}</ResultRow>
                        <ResultButton onClick={() => dispatch(restart())}>
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