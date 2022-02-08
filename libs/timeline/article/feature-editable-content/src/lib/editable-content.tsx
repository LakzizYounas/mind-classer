import React, { useEffect, useRef, useState } from 'react';

import './editable-content.module.scss';

export interface EditableContentProps {
  text: string;
}

const EditableElement = (props: any) => {
  const { onChange } = props;
  const elem = useRef<HTMLHeadingElement>();
  const elements: any = React.Children.toArray(props.children);

  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }

  const onMouseUp = () => {
    const value = elem.current?.innerText;
    onChange(value);
  };

  useEffect(() => {
    const value = elem.current?.innerText;
    onChange(value);
  }, []);

  const editableClone = React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: elem,
    onKeyUp: onMouseUp,
  });

  return editableClone;
};

export const EditableContent: React.FC<EditableContentProps> = ({ text }) => {
  const [content, setContent] = useState(text);

  console.log('render');

  return (
    <EditableElement
      onChange={(text: string) => {
        setContent(text);
      }}
    >
      <div>{content}</div>
    </EditableElement>
  );
};
