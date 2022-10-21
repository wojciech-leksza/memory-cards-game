import GameStatus from "./GameStatus";
import GameWindow from "./GameWindow";
import { Container } from "./styled";

const Content = () => (
    <Container>
        <GameStatus moves={12} time={"00:00:45"}/>
        <GameWindow />
    </Container>
);

export default Content;