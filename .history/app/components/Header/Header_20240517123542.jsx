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
                <Link href="/Gened"> Gened</Link>
                <Link href="/Login">Login</Link>
                <Link href="/Register"> Register</Link>
            </div>
        </div>
    </header>
    );
  };
  export default Header;