import { useState } from "react";
import Item from "./Item";
const items = [
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

const ItemsList = () => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="container mx-auto max-w-md md:max-w-xl mt-20">
      <ul className=" flex flex-col gap-y-16">
        {items.map((item, i) => (
          <Item
            key={item.id}
            title={item.title}
            num={i}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {item.text}
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
