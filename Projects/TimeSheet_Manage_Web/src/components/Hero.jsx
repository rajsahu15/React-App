export default function Hero() {
    return (
        <section className="text-center py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Smart Timesheet <br /> Management System
            </h1>

            <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Track work, manage teams, and boost productivity with a modern SaaS solution.
            </p>

            <div className="space-x-4">
                <button className="bg-blue-600 px-6 py-3 rounded-lg">
                    Get Started
                </button>
                <button className="border border-gray-600 px-6 py-3 rounded-lg">
                    Live Demo
                </button>
            </div>
        </section>
    );
}