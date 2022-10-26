import { useSelector } from "react-redux";
import { selectMoves } from "../../slice";
import { useTimer } from "../../timer";
import { Container, Parameter } from "./styled";

const GameStatus = () => {
    const moves = useSelector(selectMoves);
    const timer = useTimer();

    return (
        <Container>
            <Parameter>
                Moves: {moves}
            </Parameter>
            <Parameter>
                {timer}
            </Parameter>
        </Container>
    );
};

export default GameStatus;