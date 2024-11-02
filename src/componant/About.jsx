export default function About() {
    return (
        <div className="p-8 font-sans text-gray-800">
            <h1 className="text-4xl font-bold mb-4 text-blue-600">About TaskMaster</h1>
            <p className="text-lg mb-6">
                TaskMaster is your go-to productivity tool. With an intuitive interface, customizable themes, and smart reminders, organizing your tasks has never been easier.
            </p>

            <h2 className="text-2xl font-semibold mb-3 text-blue-500">Why TaskMaster?</h2>
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
                <li><strong>Easy Task Management:</strong> Effortlessly create, edit, and organize tasks.</li>
                <li><strong>Smart Reminders:</strong> Never miss a deadline with personalized notifications.</li>
                <li><strong>Customizable Experience:</strong> Choose themes that suit your style.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 text-blue-500">What Our Users Say</h2>
            <div className="space-y-4 mb-8">
                <blockquote className="p-4 border-l-4 border-blue-300 italic text-gray-600">
                    <p>"TaskMaster has completely changed how I organize my day!"</p>
                    <cite className="block mt-2 text-gray-500">- Satisfied User</cite>
                </blockquote>
                <blockquote className="p-4 border-l-4 border-blue-300 italic text-gray-600">
                    <p>"The customizable themes are a game-changer!"</p>
                    <cite className="block mt-2 text-gray-500">- Creative User</cite>
                </blockquote>
            </div>

            <h2 className="text-2xl font-semibold mb-3 text-blue-500">Contact Us</h2>
            <p className="mb-2 text-gray-700">Have questions or feedback? We’d love to hear from you!</p>
            <ul className="space-y-2">
                <li><strong>Email:</strong> <a href="mailto:support@taskmaster.com" className="text-blue-600 hover:underline">support@taskmaster.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></li>
                <li><strong>Follow Us:</strong> 
                    <a href="https://twitter.com/taskmaster" className="text-blue-600 hover:underline ml-2">Twitter</a> | 
                    <a href="https://facebook.com/taskmaster" className="text-blue-600 hover:underline ml-2">Facebook</a>
                </li>
            </ul>

            <footer className="mt-8 text-sm text-gray-500">
                © 2024 TaskMaster. All rights reserved.
            </footer>
        </div>
    );
}
