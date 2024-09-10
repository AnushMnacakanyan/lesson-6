import { useContext, useState } from "react";
import { UserContext } from "../context";
import { addUserForm } from "../type";

export const AddUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("Context missing");
    }

    const { users, setUsers } = context;

    const [addUser, setAddUser] = useState<addUserForm>({
        name: "",
        age: 0,
        salary: 0,
        isMarried: false
    });

    const [error, setError] = useState<string | undefined>(undefined);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setAddUser(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!addUser.name || addUser.age <= 0 || addUser.salary <= 0) {
            setError("All fields must be filled correctly.");
            return;
        }

        const newUser = {
            ...addUser,
            id: Date.now()
        };

        setUsers([...users, newUser]);

        setAddUser({
            name: "",
            age: 0,
            salary: 0,
            isMarried: false
        });

        setError(undefined);
    };

    return (
        <>
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={addUser.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={addUser.age}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="salary"
                    placeholder="Enter your salary"
                    value={addUser.salary}
                    onChange={handleChange}
                />
                <label>
                    Married:
                    <input
                        type="checkbox"
                        name="isMarried"
                        checked={addUser.isMarried}
                        onChange={handleChange}
                    />
                </label>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Save</button>
            </form>
        </>
    );
};
