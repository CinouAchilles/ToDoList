import { Link } from 'react-router-dom';
import '../App.css'
import taskpic from '../assets/task.png'
import reminderpic from '../assets/reminder.png'
import paintpic from '../assets/paint.png'
import productivitypic from '../assets/productivity.png'
import workorder from '../assets/work-order.png'
import { motion } from "framer-motion";

function Home() {
    const testimonials = [
        { text: "This app has transformed how I manage my daily tasks!", author: "Happy User" },
        { text: "I love the customizable themes!", author: "Creative User" },
        { text: "The reminders feature has saved me so much time.", author: "Busy Professional" },
    ];

    


    return (
        <div className="container mx-auto px-4">

            <header className="heroundernav h-fit md:h-auto text-center py-5 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg relative">

                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Welcome to TaskMaster</h1>
                <p className="text-lg mb-8 relative z-10">Organize your day, prioritize your goals, and get more done.</p>
                <div className="flex justify-center mb-8">
                    <img src={productivitypic} alt="productivity" className="w-32 h-32 md:h-60 md:w-60 mx-2 hover:scale-110 duration-200 ease-in-out" />
                    <img src={workorder} alt="work order" className="w-32 h-32 hover:scale-110 duration-200 ease-in-out md:h-60 md:w-60 mx-2" />
                </div>
                <Link to="/Tasks">
                    <button className="cta-button bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200 transform hover:scale-105 relative z-10">
                        Start Managing Your Tasks
                    </button>
                </Link>
                {/* <div className="flex justify-center mt-4">
                    <Link to="/learn-more">
                        <button className="bg-transparent text-white font-semibold py-2 px-4 border border-white rounded-lg shadow-lg hover:bg-white hover:text-purple-600 transition duration-200 transform hover:scale-105">
                            Learn More
                        </button>
                    </Link>
                </div> */}
            </header>



            <motion.main
                className='features my-16 text-black'
                initial={{ x: '100%'}}
                whileInView={{ x:0}}
                transition={{duration:1, ease:"easeInOut"}}
            >
                <h2 className="text-3xl font-semibold text-center mb-6">Why Choose TaskMaster?</h2>
                <p className="text-center text-lg mb-12">Discover how TaskMaster simplifies your task management and boosts your productivity.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: taskpic, title: 'Easy Task Management', description: 'Create, edit, and organize your tasks effortlessly. Our intuitive interface makes it a breeze!', link: '/features/task-management' },
                        { icon: reminderpic, title: 'Reminders & Notifications', description: 'Never miss a deadline with helpful reminders tailored to your schedule.', link: '/features/reminders' },
                        { icon: paintpic, title: 'Customizable Themes', description: 'Choose the look that best fits your style. Personalize your experience!', link: '/features/themes' },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="feature-item bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-200 transform hover:scale-105"
                        >
                            <img src={feature.icon} alt={feature.title} className="icon w-16 h-16 mb-4 transition-transform duration-200" />
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p>{feature.description}</p>
                            <Link to={feature.link} className="text-blue-500 hover:underline mt-2 block">Learn More</Link>
                        </div>
                    ))}
                    </div>
                
            </motion.main>


            <motion.section
      className="testimonials show my-16"
      initial={{ x: "-100%" }} // Start position off-screen to the left
      whileInView={{ x: 0 }}    // End position when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Customize the timing and easing
    >
      <h2 className="text-3xl font-semibold text-center mb-6">
        What Users Are Saying
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-0">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow mx-2"
            initial={{ opacity: 0, y: 50 }} // Start with fade-in and slide-up effect
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and 0 offset
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }} // Staggered delay for each item
          >
            <p>{`"${testimonial.text}"`}</p>
            <cite>- {testimonial.author}</cite>
          </motion.div>
        ))}
      </div>
    </motion.section>
            
            <footer className="footer text-center py-4">
                <p className="mb-2">&copy; {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
                <div className="footer-links">
                    <Link to="/About" className="mx-2 text-blue-500 hover:underline">About & Contact</Link>
                </div>
            </footer>
        </div>
    );
}

export default Home;
