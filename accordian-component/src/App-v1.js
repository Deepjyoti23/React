import { useState } from "react";
import "./index.css";

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  // const [isopen, setIsopen] = useState("false")
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordian">
      {faqs.map((item,i) => (
        <AccordianItem id={i} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

function AccordianItem({ id, title, text }) {
  const [isopen, setIsopen] = useState(false);

  function isItemOpen(){
    setIsopen((isopen)=>!isopen)
  }
  
  return (
    <>
      <div className= {`item ${isopen?"open":""}`} onClick={isItemOpen}>
      <p className="number">{id<9?`0${id+1}`:id+1}</p>
      <p className="title">{title}</p>
      <p className="icon" >{isopen?"-":"+"}</p>
      {isopen && <div className="content-box">{text}</div>}
      {/* <div className="content-box">{text}</div> */}
    </div>
    </>
    
  );
}
