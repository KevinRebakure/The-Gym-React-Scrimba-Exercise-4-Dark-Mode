import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmation: "",
    newsLetter: false,
  });

  // console.log(data);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setData((prev) => {
      return { ...prev, [name]: type !== "checkbox" ? value : checked };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (data.password === data.confirmation) {
      console.log("Successfully logged in!");
      data.newsLetter &&
        console.log("Thanks for signing up for our newsletter!");
    } else {
      console.log("Passwords do not match");
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="mx-auto flex w-[350px] flex-col gap-y-5 rounded-lg p-10 shadow-xl"
      >
        <input
          className="rounded-md border border-gray-400 px-3 py-2 outline-none"
          type="text"
          placeholder="Email address"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          className="rounded-md border border-gray-400 px-3 py-2 outline-none"
          type="text"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <input
          className="rounded-md border border-gray-400 px-3 py-2 outline-none"
          type="text"
          placeholder="Confirm password"
          name="confirmation"
          value={data.confirmation}
          onChange={handleChange}
        />
        <div className="flex items-center gap-x-3">
          <input
            type="checkbox"
            id="newsLetter"
            name="newsLetter"
            checked={data.newsLetter}
            onChange={handleChange}
          />{" "}
          <label htmlFor="newsLetter">I want to join the news letter</label>
        </div>

        <button className="rounded-lg bg-purple-800 px-5 py-2 text-white">
          Sign up
        </button>
      </form>
    </>
  );
}
