import Link from 'next/link'
const Header = () => {
    return(
    <header className="header">
        <div className="container">
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/classes">Classes</Link>
                <Link href="/gened"> Gen ed</Link>
                <Link href="/login">Login</Link>
                <Link href="/register"> Register</Link>
            </div>
        </div>
    </header>
    );
  };
  export default Header;