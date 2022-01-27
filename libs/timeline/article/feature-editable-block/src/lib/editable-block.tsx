import React, { useRef, useState } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

import { SelectBlock } from '@mind-class/timeline/article/feature-select-block';
import {
  getCaretCoordinates,
  setCaretToEnd,
} from '@mind-class/timeline/article/util-block';

export interface IBlock {
  id: string;
  html: string;
  tag: string;
  ref?: HTMLElement | null;
}

export interface IBlockActions {
  updagePage: (block: IBlock) => void;
  addBlock: (block: Partial<IBlock>) => void;
  deleteBlock: (block: Partial<IBlock>) => void;
}

export const EditableBlock: React.FC<IBlock & IBlockActions> = (props) => {
  const content = useRef<HTMLElement>(null);

  const [tag, setTag] = useState(props.tag);
  const [html, setHtml] = useState<string | null>(props.html);
  const [htmlBackup, setHtmlBackup] = useState<string | null>(null);

  const [previousKey, setPreviousKey] = useState('');

  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);
  const [selectMenuPosition, setSelectMenuPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const handleChange = (event: ContentEditableEvent) => {
    setHtml(event.target.value);
  };

  // const onKeyUpHandler = (e: any) => {
  //   if (e.key === '/') {
  //     openSelectMenuHandler();
  //   }
  // };

  // const openSelectMenuHandler = () => {
  //   const { x, y } = getCaretCoordinates();
  //   setSelectMenuIsOpen(true);
  //   setSelectMenuPosition({ x, y });
  // };

  // const closeSelectMenuHandler = () => {
  //   setHtmlBackup(null);
  //   setSelectMenuIsOpen(false);
  //   setSelectMenuPosition({ x: 0, y: 0 });
  //   document.removeEventListener('click', closeSelectMenuHandler);
  // };

  // const tagSelectionHandler = (tag: string) => {
  //   setTag(tag);
  //   setHtml(htmlBackup);
  //   if (content.current) {
  //     setCaretToEnd(content.current);
  //   }
  //   closeSelectMenuHandler();
  // };

  // const onKeyDownHandler = (e: any) => {
  //   if (e.key === '/') {
  //     setHtmlBackup(html);
  //   }
  //   if (e.key === 'Enter') {
  //     if (previousKey !== 'Shift') {
  //       e.preventDefault();
  //       props.addBlock({
  //         id: props.id,
  //         ref: content.current,
  //       });
  //     }
  //   }
  //   // if (e.key === 'Backspace' && html === '') {
  //   //   e.preventDefault();
  //   //   props.deleteBlock({
  //   //     id: props.id,
  //   //     ref: content.current,
  //   //   });
  //   // }
  //   setPreviousKey(e.key);
  // };

  return (
    <>
      {/* {selectMenuIsOpen && (
        <SelectBlock
          position={selectMenuPosition}
          onSelect={tagSelectionHandler}
          close={closeSelectMenuHandler}
        />
      )} */}
      <div style={{ backgroundColor: 'grey' }}>
        {/* <ContentEditable
          className="Block"
          innerRef={content}
          html={html || ''}
          tagName={tag}
          onChange={handleChange}
          onKeyDown={onKeyDownHandler}
          onKeyUp={onKeyUpHandler}
        /> */}
      </div>
    </>
  );
};
