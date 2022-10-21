import GameStatus from "./GameStatus";
import { Container } from "./styled";

const Content = () => (
    <Container>
        <GameStatus moves={12} time={"00:00:45"}/>
    </Container>
);

export default Content;