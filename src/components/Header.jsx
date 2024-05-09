import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-dark text-white h-[4rem] flex justify-between items-center px-8">
      <Link to="/" className=" text-primary text-2xl">
        Blog
      </Link>
      <div className="flex gap-4">
        <Link to="/login">Sign In</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
