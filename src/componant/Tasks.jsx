import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from "framer-motion";

export default function Tasks() {
    const [inputtext, updateinputtext] = useState('');
    const [inputtextIdit, updateinputtextIdit] = useState('');
    const [tasks, updateTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [selectedColor, updateSelectedColor] = useState("#FF5733");
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [reminderDate, setReminderDate] = useState('');

    useEffect(() => {
        // Save tasks to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Request notification permission on mount
    useEffect(() => {
        if ("Notification" in window && Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }, []);

    // Check for reminders every minute
    useEffect(() => {
        const checkReminders = setInterval(() => {
            const now = new Date().getTime();
            tasks.forEach(task => {
                const reminderTime = new Date(task.reminder).getTime();
                if (!task.notified && reminderTime <= now) {
                    if (Notification.permission === 'granted') {
                        new Notification('Task Reminder', {
                            body: `Reminder: ${task.taskObj}`,
                        });
                    }
                    // Update the task to mark it as notified
                    updateTasks(prevTasks =>
                        prevTasks.map(t =>
                            t.indexObj === task.indexObj ? { ...t, notified: true } : t
                        )
                    );
                }
            });
        }, 60000); // check every minute

        return () => clearInterval(checkReminders);
    }, [tasks]);

    const saveDate = () => {
        if (inputtext.trim()) {
            const newTask = {
                indexObj: uuidv4(),
                colorObj: selectedColor,
                taskObj: inputtext,
                reminder: reminderDate,
                completed: false,
                notified: false // New field to track if notification has been shown
            };
            updateTasks([...tasks, newTask]);
            updateinputtext('');
            setReminderDate('');
            toast.success('Added Successfully!');
        } else {
            toast.error("Task cannot be empty!");
        }
    };

    const deleteTask = (indexObj) => {
        updateTasks(tasks => tasks.filter(task => task.indexObj !== indexObj));
        toast.success("Deleted Successfully", { duration: 1000 });
    };

    const toggleComplete = (indexObj) => {
        updateTasks(tasks.map(task =>
            task.indexObj === indexObj ? { ...task, completed: !task.completed } : task
        ));
    };

    const startEditing = (task) => {
        setEditingTaskId(task.indexObj);
        updateinputtextIdit(task.taskObj);
        updateSelectedColor(task.colorObj);
    };

    const saveEdit = (indexObj) => {
        if (inputtextIdit.trim()) {
            updateTasks(tasks.map(task =>
                task.indexObj === indexObj ? { ...task, taskObj: inputtextIdit, colorObj: selectedColor } : task
            ));
            updateinputtextIdit('');
            setEditingTaskId(null);
            toast.success("Task updated successfully!");
        } else {
            toast.error("Task cannot be empty!");
        }
    };

    const printF = (
        <AnimatePresence>
            {tasks.map((task, index) => (
                <motion.li
                    key={task.indexObj}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className={`flex flex-col sm:flex-row justify-between items-center p-4 mb-2 rounded-lg shadow-lg transition duration-200 
          ${task.completed ? 'bg-gray-100 line-through text-gray-500' : 'bg-white shadow-md hover:shadow-lg'}`}
                    style={{
                        backgroundColor: task.completed ? 'grey' : task.colorObj,
                    }}
                >
                    <span
                        className="flex gap-2 cursor-pointer text-left mb-2 sm:mb-0 text-lg sm:text-base font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200"
                        onClick={() => toggleComplete(task.indexObj)}
                    >
                        <p className="text-gray-700">Task {index + 1}:</p>
                        <p>{task.taskObj}</p>
                    </span>
                    <span className="text-xs sm:text-sm backdrop-contrast-50 py-1 px-2 text-gray-900">
                        {task.reminder ? `Reminder: ${new Date(task.reminder).toLocaleString()}` : 'No reminder set'}
                    </span>
                    <div className="flex-shrink-0 flex gap-2 mt-2 sm:mt-0">
                        {editingTaskId === task.indexObj ? (
                            <>
                                <input
                                    type="text"
                                    className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:border-blue-400 transition duration-200 w-full sm:w-auto"
                                    value={inputtextIdit}
                                    onChange={(e) => updateinputtextIdit(e.target.value)}
                                />
                                <button
                                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 active:bg-green-700 transition transform duration-200"
                                    onClick={() => saveEdit(task.indexObj)}
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition transform hover:scale-105 duration-200"
                                    onClick={() => startEditing(task)}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteTask(task.indexObj)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 active:bg-red-700 transition transform hover:scale-105 duration-200"
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                </motion.li>))}
        </AnimatePresence>
    );

    return (
        <div className="bg-gray-50 flex items-center justify-center py-10 px-4">
            <Toaster />
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Task Manager</h2>
                <div className="inputSection flex flex-col items-center justify-center">
                    <div className="colorPanel flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md mb-3">
                        <h1 className="text-lg font-semibold text-gray-700 text-center">Choose Color</h1>
                        <div className="flex gap-4 items-center justify-center">
                            {['#FF5733', '#33A1FF', '#33FF57', '#FFEB33', '#B833FF'].map((color) => (
                                <button
                                    key={color}
                                    className={`w-10 h-10 rounded-full duration-150 ease-in-out hover:scale-125 hover:shadow-lg ${selectedColor === color ? 'border-4 border-gray-700 ring-2 ring-gray-300' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => updateSelectedColor(color)}
                                    aria-label={`Select ${color} color`}
                                ></button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row mt-2 justify-center mb-4 sm:gap-0 gap-3">
                        <div className="flex ">
                            <input
                                value={inputtext}
                                onChange={(e) => updateinputtext(e.target.value)}
                                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-400 transition duration-150 w-full"
                                type="text"
                                placeholder="Add a new task..."
                            />
                        </div>
                        <div className="flex ">
                            <input
                                value={reminderDate}
                                onChange={(e) => setReminderDate(e.target.value)}
                                type="datetime-local"
                                className="border border-gray-300 px-4 py-2 focus:outline-none text-sm w-full"
                            />
                        </div>
                        <div className="flex flex-1">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition duration-200 w-full"
                                onClick={saveDate}
                            >
                                Save
                            </button>
                        </div>
                    </div>

                </div>
                <ul>{printF}</ul>
            </div>
        </div>
    );
}
