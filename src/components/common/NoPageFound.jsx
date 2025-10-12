import { NavLink } from "react-router";

export default function NoPageFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Сторінку не знайдено</p>
            <NavLink to="/" className="back-link">Повернутися на головну</NavLink>
        </div>
    )
}