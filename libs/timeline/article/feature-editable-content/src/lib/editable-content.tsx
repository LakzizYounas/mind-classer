import React, { useRef, useState } from 'react';
import './editable-content.module.scss';

export interface EditableContentProps {
  text: string;
}

export const EditableContent: React.FC<EditableContentProps> = ({ text }) => {
  const ref = useRef(null);
  const [content, setContent] = useState(text);

  return (
    <div contentEditable suppressContentEditableWarning ref={ref}>
      {content}
    </div>
  );
};
