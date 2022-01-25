import React, { RefObject, useRef, useState } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

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
  const [html, setHtml] = useState(props.html);
  const [htmlBackup, setHtmlBackup] = useState<string>();
  const [previousKey, setPreviousKey] = useState('');
  const [tag, setTag] = useState(props.tag);

  const handleChange = (event: ContentEditableEvent) => {
    setHtml(event.target.value);
  };

  function onKeyDownHandler(e: any) {
    console.log('🚀 ~ file: editable-block.tsx ~ line 20 ~ html', html);
    if (e.key === '/') {
      setHtmlBackup(html);
    }
    if (e.key === 'Enter') {
      if (previousKey !== 'Shift') {
        e.preventDefault();
        props.addBlock({
          id: props.id,
          ref: content.current,
        });
      }
    }
    if (e.key === 'Backspace' && html === '') {
      console.log('INSIDE ????');
      e.preventDefault();
      props.deleteBlock({
        id: props.id,
        ref: content.current,
      });
    }
    setPreviousKey(e.key);
  }

  return (
    <div style={{ backgroundColor: 'grey' }}>
      <ContentEditable
        className="Block"
        innerRef={content}
        html={html}
        tagName={tag}
        onChange={handleChange}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
};
