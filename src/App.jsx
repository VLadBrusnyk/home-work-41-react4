import { Suspense } from 'react';
import MessageComponent from './components/MessageComponent';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Функція, яка повертає Promise із затримкою (симуляція асинхронного запиту)
function fetchMessage(delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        content: 'Це повідомлення було отримано з Promise за 2 секунди.',
        timestamp: new Date().toLocaleString('uk-UA'),
      });
    }, delay);
  });
}

const messagePromise = fetchMessage(2000);

function App() {
  return (
    <div className="app">
      <h1>React Demo</h1>   
      <ErrorBoundary>
        <Suspense fallback={<div className="loading"> Завантаження...</div>}>
          <MessageComponent messagePromise={messagePromise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
