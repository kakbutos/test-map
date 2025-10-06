import { MapView } from '@/widgets/map-view';
import './MainPage.css';

export function MainPage() {
  return (
    <div className="app">
      <main className="app__main">
        <MapView />
      </main>
    </div>
  );
}

