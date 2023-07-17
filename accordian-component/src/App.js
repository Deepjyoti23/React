import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  // const [isopen, setCurOpen] = useState("false")
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordian">
      {faqs.map((item, i) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          id={i}
          title={item.title}
          // text={item.text}
        >
          {item.text}
        </AccordianItem>
      ))}
      <AccordianItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        id={22}
        title="Test 1"
        // text={item.text}
      >
        <ul>
          <li>Hello!! are you ready for test</li>
          <li>Specify yes or no</li>
          <li>If yes start writing the test</li>
        </ul>
      </AccordianItem>
    </div>
  );
}

function AccordianItem({ id, title, children, curOpen, onOpen }) {
  const isopen = id === curOpen;

  function isItemOpen() {
    onOpen(isopen ? null : id);
  }

  return (
    <>
      <div className={`item ${isopen ? "open" : ""}`} onClick={isItemOpen}>
        <p className="number">{id < 9 ? `0${id + 1}` : id + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isopen ? "-" : "+"}</p>
        {isopen && <div className="content-box">{children}</div>}
        {/* <div className="content-box">{text}</div> */}
      </div>
    </>
  );
}
