import { matchSorter } from 'match-sorter';
import React, { useEffect, useState } from 'react';

const MENU_HEIGHT = 150;
const allowedTags = [
  {
    id: 'page-title',
    tag: 'h1',
    label: 'Page Title',
  },
  {
    id: 'heading',
    tag: 'h2',
    label: 'Heading',
  },
  {
    id: 'subheading',
    tag: 'h3',
    label: 'Subheading',
  },
  {
    id: 'paragraph',
    tag: 'p',
    label: 'Paragraph',
  },
];

interface SelectBlockProps {
  position: {
    x: number;
    y: number;
  };
  onSelect: (tag: string) => void;
  close: () => void;
}

export const SelectBlock: React.FC<SelectBlockProps> = ({
  position: { x, y },
  onSelect,
  close,
}) => {
  const [command, setCommand] = useState('');
  const [items, setItems] = useState(allowedTags);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, []);

  useEffect(() => {
    const items = matchSorter(allowedTags, command, { keys: ['tag'] });
    setItems(items);
  }, [command]);

  const keyDownHandler = (e: any) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        onSelect(items[selectedItem].tag);
        break;
      case 'Backspace':
        if (!command) {
          close();
        }
        setCommand(command.substring(0, command.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevSelected =
          selectedItem === 0 ? items.length - 1 : selectedItem - 1;
        setSelectedItem(prevSelected);
        break;
      case 'ArrowDown':
      case 'Tab':
        e.preventDefault();
        const nextSelected =
          selectedItem === items.length - 1 ? 0 : selectedItem + 1;
        setSelectedItem(nextSelected);
        break;
      default:
        setCommand(command + e.key);
        break;
    }
  };

  const positionStyle = { top: y - MENU_HEIGHT, left: x };

  return (
    <div className="SelectMenu" style={positionStyle}>
      <div className="Items">
        {items.map((item, key) => {
          const isSelected = items.indexOf(item) === selectedItem;

          return (
            <div
              className={isSelected ? 'Selected' : ''}
              key={key}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(item.tag)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
