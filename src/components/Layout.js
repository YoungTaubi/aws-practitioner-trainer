import { Link } from "react-router-dom"

export default function Layout({ children }) {

    return (
        <>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to='/quiz'>Quiz</Link></li>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </nav>
                <main>{children}</main>

                <footer>Footer</footer>
            </div>
        </>
    )
}