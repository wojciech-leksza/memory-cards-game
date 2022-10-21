import { Container, Parameter } from "./styled";

const GameStatus = ({moves, time}) => (
    <Container>
        <Parameter>
            Moves: {moves}
        </Parameter>
        <Parameter>
            {time}
        </Parameter>
    </Container>
);

export default GameStatus;