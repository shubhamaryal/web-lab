import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    
    const [editIndex, setEditIndex] = useState(null);
    const [editInput, setEditInput] = useState("");

    const addTodo = () => {
        if (input.trim() === "") return;
        setTodos([...todos, input]);
        setInput("");
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((item, i) => i !== index);
        setTodos(newTodos);
        if (editIndex === index) {
            setEditIndex(null);
        }
    };

    const saveEdit = (index) => {
        if (editInput.trim() === "") return;
        const newTodos = [...todos];
        newTodos[index] = editInput;
        setTodos(newTodos);
        setEditIndex(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow w-96">
                <h1 className="text-2xl text-center mb-4">My Todos</h1>

                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Add a todo..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-2 border rounded"
                    />
                    <button
                        onClick={addTodo}
                        className="bg-gray-800 text-white px-4 rounded cursor-pointer"
                    >
                        Add
                    </button>
                </div>

                <ul>
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center p-2 mb-2 bg-gray-50 rounded"
                        >
                            {editIndex === index ? (
                                <div className="flex gap-2 w-full">
                                    <input
                                        type="text"
                                        value={editInput}
                                        onChange={(e) => setEditInput(e.target.value)}
                                        className="flex-1 p-1 border rounded"
                                    />
                                    <button
                                        onClick={() => saveEdit(index)}
                                        className="text-green-500 cursor-pointer"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditIndex(null)}
                                        className="text-gray-500 cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <span>{todo}</span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                setEditIndex(index);
                                                setEditInput(todo);
                                            }}
                                            className="text-blue-500 cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteTodo(index)}
                                            className="text-red-500 cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
