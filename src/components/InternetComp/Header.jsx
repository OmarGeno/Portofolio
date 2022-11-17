import './Header.css'

function Header(props) {
    return (
        <header>
            <button onClick={props.onClick}>Click Me!</button>
        </header>
    );
}
export default Header;