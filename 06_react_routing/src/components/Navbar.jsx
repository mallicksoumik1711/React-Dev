import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-zinc-700">
        <div className="h-20 w-20">
            <img className="h-full w-full object-cover rounded-full" src="https://images.unsplash.com/photo-1786431523179-cc488037bcf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="flex flex-wrap gap-10 mx-auto">
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="contact">Contact</a> */}

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
