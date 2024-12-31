import "./HomePage.css"
import {Link} from "react-router-dom";
import plcimg from "../../images/Games-1.png"


function Navbar() {
    return (
        <>
            <div className="navbar">
                <label className="hamburger-menu">
                    <input type="checkbox" />
                </label>

                <aside className="sidebar">
                    <h1 className="title sidebar-title">
                       Carter's Compendium
                    </h1>
                    <div className="games">
                        <h1>Games</h1>
                        <ul>
                            <li>
                                <p>About</p>
                            </li>
                            <li>
                                <p>Ghost</p>
                            </li>
                            <li>
                                <p>Sudoku</p>
                            </li>
                            <li>
                                <p>Crossword</p>
                            </li>
                            <li>
                                <p>Backgammon</p>
                            </li>
                            <li>
                                <p>Poker</p>
                            </li>
                            <li>
                                <p>Solitaire</p>
                            </li>
                            <li>
                                <p>Pucket</p>
                            </li>
                            <li>
                                <p>About Me</p>
                            </li>
                        </ul>
                    </div>
                    <div className="sites">
                        <h1>Sites</h1>
                        <ul>
                            <li>
                                <p>Carter's Compendium</p>
                            </li>
                            <li>
                                <p>Biology</p>
                            </li>
                            <li>
                                <p>Humanities</p>
                            </li>
                            <li>
                                <p>Physics</p>
                            </li>
                            <li>
                                <p>Chemistry</p>
                            </li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <Link to="/login" className="logout">Login</Link>
                        <Link to="/account" className="account-button">Account</Link>
                    </div>
                </aside>
            </div>
        </>
    )
}

function MainGames() {
    return (
        <>
            <div className={"main_games"}>
                <div className={"side_game"}>
                    <h1>Sudoku</h1>
                </div>
                <div className={"main_game"}>
                    <h1>Ghost</h1>
                </div>
                <div className={"side_game"}>
                    <h1>Crossword</h1>
                </div>
            </div>
        </>
    )
}

function AllGames() {
    return (
        <>
            <div className={"all-games"}>
                <div className="games-grid">
                    <div className="game">
                        <img src={plcimg} alt="placeholder"/>
                        <h1>Backgammon</h1>
                    </div>
                    <div className="game">
                        <img src={plcimg} alt="placeholder"/>
                        <h1>Sudoku</h1>
                    </div>
                    <div className="game">
                        <img src={plcimg} alt="placeholder"/>
                        <h1>Poker</h1>
                    </div>
                    <div className="game">
                        <img src={plcimg} alt="placeholder"/>
                        <h1>Solitaire</h1>
                    </div>
                    <div className="game">
                        <img src={plcimg} alt="placeholder"/>
                        <h1>Pucket</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export function HomePage() {
    return (
        <>
            <div className="content">
                <div>
                    <Navbar />
                    <MainGames />
                    <h1 className="all-games-title">All Games</h1>
                    <AllGames />
                </div>
            </div>
        </>
    )
}