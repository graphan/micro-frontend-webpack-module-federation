import React from 'react';

const RemoteComponent = React.lazy(() => import('OurReactComponent/Component'));

function App() {
  return (
    <React.Suspense fallback="Loading Component">
      <RemoteComponent />
    </React.Suspense>
  );
}

export default App;