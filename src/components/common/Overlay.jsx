export default function Overlay(props) {
    return (
        <div className={`overlay ${props.isActive ? "is-active" : ''}`} onClick={props.handleClick}></div>
    )
}