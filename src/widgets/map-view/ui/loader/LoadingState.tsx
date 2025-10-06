import './LoadingState.css';

export function LoadingState() {
  return (
    <div className="map-loading">
      <div className="spinner" />
      <p>Загрузка данных...</p>
    </div>
  );
}

