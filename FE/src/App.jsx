import { HeroUIProvider } from '@heroui/react';
import AppRoutes from './router/index';

function App() {
  return (
    <HeroUIProvider>
      <AppRoutes />;
    </HeroUIProvider>
  );
}

export default App;
