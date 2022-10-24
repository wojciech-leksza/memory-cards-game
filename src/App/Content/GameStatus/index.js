import { useSelector } from "react-redux";
import { selectMoves } from "../../slice";
import { Container, Parameter } from "./styled";

const GameStatus = () => {
    const moves = useSelector(selectMoves);

    return (
        <Container>
            <Parameter>
                Moves: {moves}
            </Parameter>
            <Parameter>
                00:00:00
            </Parameter>
        </Container>
    );
};

export default GameStatus;