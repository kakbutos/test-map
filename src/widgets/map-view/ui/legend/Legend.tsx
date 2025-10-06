import { LEGEND_ITEMS } from '@/features/cost-visualization';
import './Legend.css';

export function Legend() {
  return (
    <div className="legend">
      <h3 className="legend__title">Затраты на перемещение</h3>
      <div className="legend__items">
        {LEGEND_ITEMS.map((item) => (
          <div key={item.label} className="legend__item">
            <div
              className="legend__color"
              style={{ backgroundColor: item.color }}
            />
            <span className="legend__label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="legend__hint">
        Выберите остановку на карте для анализа
      </div>
    </div>
  );
}

