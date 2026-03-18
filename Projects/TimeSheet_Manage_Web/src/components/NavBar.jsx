export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
            <h1 className="text-xl font-bold">TimeFlow</h1>

            <div className="space-x-6 hidden md:flex">
                <a href="#" className="hover:text-blue-400">Features</a>
                <a href="#" className="hover:text-blue-400">Pricing</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
            </div>

            <button className="bg-blue-600 px-4 py-2 rounded-lg">
                Login
            </button>
        </nav>
    );
}