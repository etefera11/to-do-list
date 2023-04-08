import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoList.css';

type Item = {
    text: string;
    id: number;
}

function TodoList() {
    const [items, setItems] = useState<Item[]>([]);
    const [text, setText] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!text.length) {
            return;
        }

        const newItem: Item = {
            text: text,
            id: Date.now(),
        };

        setItems(items.concat(newItem));
        setText("");
    };

    return (
        <div>
            <img className="to-do-img" src="/to-do-list.png"></img>
            <h1>To-Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add to-do item"
                    value={text}
                    onChange={handleChange}
                />
                <button className="btn btn-primary">Add Item</button>
            </form>
            <ul>
                {items.map((item: Item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
