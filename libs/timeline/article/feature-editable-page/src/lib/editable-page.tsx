import React, { useEffect, useState } from 'react';
import { List } from 'immutable';

import {
  EditableBlock,
  IBlock,
} from '@mind-class/timeline/article/feature-editable-block';

const initialBlock: IBlock = {
  id: 'random-id',
  html: '',
  tag: 'p',
};

const setCaretToEnd = (element: any) => {
  const range = document.createRange();
  const selection = window.getSelection() as any;

  range.selectNodeContents(element);
  range.collapse(false);

  selection.removeAllRanges();
  selection.addRange(range);

  element.focus();
};

export const EditablePage: React.FC = () => {
  const [blocks, setBlocks] = useState(List<IBlock>([initialBlock]));

  const updatePageHandler = (updatedBlock: IBlock) => {
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
    const newBlock = { id: 'randomid pas si random', html: '', tag: 'p' };
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);

    setBlocks(blocks.splice(index + 1, 0, newBlock));
    // currentBlock.ref.nextElementSibling?.focus();
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
