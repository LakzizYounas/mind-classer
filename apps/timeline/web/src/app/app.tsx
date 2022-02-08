import { Route, Routes } from 'react-router-dom';

import { EditablePage } from '@mind-class/timeline/article/feature-editable-page';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<EditablePage />} />
    </Routes>
  );
}

export default App;
