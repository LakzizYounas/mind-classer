import React, { useState } from 'react';
import { List } from 'immutable';

import {
  EditableBlock,
  IBlock,
} from '@mind-class/timeline/article/feature-editable-block';
import { setCaretToEnd } from '@mind-class/timeline/article/util-block';

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const initialBlock: IBlock = {
  id: uid(),
  html: '',
  tag: 'p',
};

export const EditablePage: React.FC = () => {
  const [blocks, setBlocks] = useState(List<IBlock>([initialBlock]));

  const updatePageHandler = (updatedBlock: IBlock) => {
    console.log(
      '🚀 ~ file: editable-page.tsx ~ line 24 ~ updatePageHandler ~ updatedBlock',
      updatedBlock
    );
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);

    setBlocks(
      blocks.update(index, (block) => ({
        ...(block as IBlock),
        tag: updatedBlock.tag,
        html: updatedBlock.html,
      }))
    );
  };

  const addBlockHandler = (currentBlock: any) => {
    const newBlock = { id: uid(), html: '', tag: 'p' };
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);

    setBlocks(blocks.splice(index + 1, 0, newBlock));
    // currentBlock.ref.nextElementSibling?.focus();// set focus won't work
  };

  const deleteBlockHandler = (currentBlock: any) => {
    const previousBlock = currentBlock.ref.previousElementSibling;
    if (previousBlock) {
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id);

      setBlocks(blocks.splice(index, 1));

      setCaretToEnd(previousBlock);
      previousBlock.focus();
    }
  };

  return (
    <div>
      {blocks.map((block) => {
        return (
          <EditableBlock
            key={block.id}
            id={block.id}
            tag={block.tag}
            html={block.html}
            updagePage={updatePageHandler}
            addBlock={addBlockHandler}
            deleteBlock={deleteBlockHandler}
          />
        );
      })}
    </div>
  );
};
