import { useState } from "react";

type NavLink = {
  id: number;
  url: string;
  text: string;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    url: "/about",
    text: "About",
  },
  {
    id: 2,
    url: "/contact",
    text: "Contact",
  },
  {
    id: 3,
    url: "/blog",
    text: "Blog",
  },
];

function Component() {
  const [text, setText] = useState("shakeAndBake");
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState(navLinks);

  const listJSX = list.map((item) => (
    <p className='mb-1' key={item}>
      {item}
    </p>
  ));

  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <button
        type='button'
        className='btn btn-center'
        onClick={() => {
          setText("Just Do It");
          setList(["hello", "world"]);
          setLinks((prevLinks) => [
            ...prevLinks,
            { id: 4, url: "/dialog", text: "Dialog" },
          ]);
        }}
      >
        {text}
      </button>
      <button className='btn' type='button' onClick={() => setNumber(2342)}>
        {number}
      </button>
      {listJSX}
      <ul style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Component;
