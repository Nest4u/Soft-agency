import React, { useState, useEffect } from 'react';
import { Goal, MoveDown, Eye, Puzzle, Box } from 'lucide-react';
import classNames from 'classnames';

const itemsData = [
  { icon: Goal, text: "Item 1" },
  { icon: MoveDown, text: "Item 2" },
  { icon: Eye, text: "Item 3" },
  { icon: Puzzle, text: "Item 4" },
  { icon: Box, text: "Item 5" }
];

const Conveyor = () => {
  const [items, setItems] = useState(itemsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prevItems => {
        const updatedItems = [...prevItems];
        const firstItem = updatedItems.shift();
        updatedItems.push(firstItem);
        return updatedItems;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex overflow-hidden">
      {items.map(({ icon: Icon, text }, index) => (
        <Item key={index} Icon={Icon} text={text} index={index} totalItems={items.length} />
      ))}
    </div>
  );
};

const Item = ({ Icon, text, index, totalItems }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={classNames('flex items-center space-x-2 p-4 transition-transform duration-500', {
        'translate-x-full': animate,
        '-translate-x-full': index === totalItems - 1 && animate,
      })}
    >
      <div className="transition-transform duration-500 transform translate-x-full">
        <Icon className="w-8 h-8" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Conveyor;
