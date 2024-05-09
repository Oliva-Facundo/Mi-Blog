import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newUser = {
      username: form.username,
      email: form.email,
      password: form.password,
      id: "",
    };
  };

  return (
    <div className="min-h-[90vh]">
      <h1 className="text-center text-3xl py-6">Register</h1>
      <form
        className="flex gap-5 flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={form.username}
            autoComplete="off"
            placeholder="Username"
            className=" outline-none rounded-lg h-10 w-72 p-2 bg-transparent !important border-2 border-dark"
          />
        </div>
        <div>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={form.email}
            autoComplete="off"
            placeholder="Email"
            className=" outline-none rounded-lg h-10 w-72 p-2 bg-transparent border-2 border-dark after:bg-transparent after:appearance-none"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={form.password}
            placeholder="Password"
            className=" outline-none rounded-lg h-10 w-72 p-2 bg-transparent border-2 border-dark"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
