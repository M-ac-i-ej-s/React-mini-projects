import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ToDoItems from './ToDoItems';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ToDoItems />
  </StrictMode>
);
