import React, { Suspense } from 'react';

let OtherComponent;

if (process.env.REACT_APP_BUILD_TARGET === 'RAMA') {
  OtherComponent = React.lazy(() => import('./RamaOtherComponent'));
} else {
  OtherComponent = React.lazy(() => import('./OtherComponent'));
}

function MyComponent() {
  const [displayLazyComponent, setDisplayLazyComponent] = React.useState(false);

  return (
    <div>
      {displayLazyComponent === true && (
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      )}

      <button onClick={() => setDisplayLazyComponent(!displayLazyComponent)}>
        Load Lazy OtherComponent
      </button>
    </div>
  );
}

export default MyComponent;
