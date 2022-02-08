import { Route } from 'react-router-dom';

import { EditablePage } from '@mind-class/timeline-article-feature-editable-page';

export function App() {
  return (
    <>
      <Route path="/" element={<EditablePage />} />
      {/* Put other routes here */}
    </>
  );
}

export default App;
