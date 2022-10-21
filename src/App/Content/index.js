import GameStatus from "./GameStatus";
import GameWindow from "./GameWindow";
import Settings from "./Settings";
import { Container } from "./styled";

const Content = () => (
    <Container>
        <GameStatus moves={12} time={"00:00:45"}/>
        <GameWindow />
        <Settings />
    </Container>
);

export default Content;