import { NavLink } from "react-router";

export default function NoPageFound() {
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <p>An error was ancountered while proseccing your reqaust</p>

        <div>Here`s a link to the Steam Community<NavLink to="/" className="back-link"> Store</NavLink></div>    
        </div>
    )
}