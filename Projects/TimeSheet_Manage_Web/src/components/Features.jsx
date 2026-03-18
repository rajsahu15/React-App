const features = [
    {
        title: "Employee Management",
        desc: "Add, edit, and manage employees easily.",
    },
    {
        title: "Project Tracking",
        desc: "Monitor project progress in real-time.",
    },
    {
        title: "Timesheet Approval",
        desc: "Approve or reject timesheets with comments.",
    },
    {
        title: "Reports & Analytics",
        desc: "Get insights on productivity and performance.",
    },
];

export default function Features() {
    return (
        <section className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                Powerful Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition"
                    >
                        <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                        <p className="text-gray-400">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}