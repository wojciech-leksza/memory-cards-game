import GameStatus from "./GameStatus";
import GameWindow from "./GameWindow";
import Settings from "./Settings";
import { Container } from "./styled";

const Content = () => (
    <Container>
        <GameStatus />
        <GameWindow />
        <Settings />
    </Container>
);

export default Content;