import React, { useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    // console.log(data);
    // const textValue = formData.get("text") as string;
    const person: Person = { name: data.text as string };
    console.log(person);
  };

  return (
    <section>
      <h2>Events example</h2>
      <div>
        <p>Text: {text}</p>
        <p>Email: {email}</p>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input mb-1'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          name='text'
        />
        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleEmailChange}
          name='email'
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
