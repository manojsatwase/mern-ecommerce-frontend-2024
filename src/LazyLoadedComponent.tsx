import { Suspense, FC } from 'react';

import Loading from './components/loading';

interface LazyLoadedComponentProps {
    component: FC<any>;
  }
  
  const LazyLoadedComponent: FC<LazyLoadedComponentProps> = ({ component: Component }) => (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
  
  
  export default LazyLoadedComponent;
  