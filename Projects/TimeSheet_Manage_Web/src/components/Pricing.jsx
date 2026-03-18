export default function Pricing() {
    return (
        <section className="py-20 px-6 bg-gray-950">
            <h2 className="text-3xl font-bold text-center mb-12">
                Pricing Plans
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-6 border border-gray-800 rounded-xl">
                    <h3 className="text-xl mb-4">Basic</h3>
                    <p className="text-3xl font-bold mb-4">₹0</p>
                    <p className="text-gray-400 mb-6">For small teams</p>
                    <button className="w-full border border-gray-600 py-2 rounded-lg">
                        Choose Plan
                    </button>
                </div>

                <div className="p-6 border border-blue-500 rounded-xl bg-gray-900">
                    <h3 className="text-xl mb-4">Pro</h3>
                    <p className="text-3xl font-bold mb-4">₹499/mo</p>
                    <p className="text-gray-400 mb-6">Best for growing teams</p>
                    <button className="w-full bg-blue-600 py-2 rounded-lg">
                        Choose Plan
                    </button>
                </div>

                <div className="p-6 border border-gray-800 rounded-xl">
                    <h3 className="text-xl mb-4">Enterprise</h3>
                    <p className="text-3xl font-bold mb-4">Custom</p>
                    <p className="text-gray-400 mb-6">For large organizations</p>
                    <button className="w-full border border-gray-600 py-2 rounded-lg">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}