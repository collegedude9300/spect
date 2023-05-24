import Link from 'next/link'
const Header = () => {
    return(
    <header className="header">
        <div className="container">
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/ProgramA">Program A</Link>
                <Link href="/ProgramB">Program B</Link>
                <Link href="/ProgramList">Program List </Link>
                <Link href="/gened"> Gened</Link>
                <Link href="/login">Login</Link>
                <Link href="/register"> Register</Link>
            </div>
        </div>
    </header>
    );
  };
  export default Header;