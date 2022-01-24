import React, { useRef, useState } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

export interface IBlock {
  id: string;
  html: string;
  tag: string;
}

export const EditableBlock: React.FC<IBlock> = (initialBlock) => {
  const content = useRef(null);
  const [html, setHtml] = useState(initialBlock.html);
  const [tag, setTag] = useState(initialBlock.tag);

  const handleChange = (event: ContentEditableEvent) => {
    setHtml(event.target.value);
  };

  return (
    <ContentEditable
      innerRef={content}
      html={html}
      tagName={tag}
      onChange={handleChange}
    />
  );
};
