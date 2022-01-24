import { List } from 'immutable';
import React from 'react';

export interface IBlock {
  id: string;
  html: string;
  tag: string;
}

const initialBlock: IBlock = {
  id: 'random-id',
  html: '',
  tag: 'p',
};

export const TimelineArticleFeature: React.FC = () => {
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
