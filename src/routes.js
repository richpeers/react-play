import TechQuiz from "./components/TechQuiz";
import MineSweeper from "./components/MineSweeper";
import Calculator from "./components/Calculator";
import HomePage from "./components/HomePage";

export default [
    {
        path: "/",
        component: HomePage,
        exact: false
    },
    {
        path: "/tech-quiz",
        component: TechQuiz,
        routes: [],
        exact: false
    },
    {
        path: "/minesweeper",
        component: MineSweeper,
        exact: false
    },
    {
        path: "/calculator",
        component: Calculator,
        exact: false
    }
];
