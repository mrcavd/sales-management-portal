export const createInfoCard = (title: string, value: string | number, trend: number, trendLabel: string): string => {
    const trendClass = trend >= 0 ? 'trend-up' : 'trend-down';
    const trendIcon = trend >= 0 ? '↑' : '↓';

    return `
    <div class="info-card">
      <div class="card-title">${title}</div>
      <div class="card-value">${value}</div>
      <div class="card-trend ${trendClass}">
        ${trendIcon} ${Math.abs(trend)}% ${trendLabel}
      </div>
    </div>
  `;
};
