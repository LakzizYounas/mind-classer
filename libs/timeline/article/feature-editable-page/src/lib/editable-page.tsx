import React from 'react';
import { List } from 'immutable';

import { IBlock } from '@mind-class/timeline/article/feature-editable-block';

const initialBlock: IBlock = {
  id: 'random-id',
  html: '',
  tag: 'p',
};

export const EditablePage: React.FC = () => {
  const [blocks, setBlocks] = React.useState(List<IBlock>([initialBlock]));

  return (
    <div>
      {blocks.map((block) => {
        return (
          <div key={block.id} id={block.id}>
            Tag: {block.tag}, Content: {block.html}
          </div>
        );
      })}
    </div>
  );
};
