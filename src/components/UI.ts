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

export const createTable = (headers: string[], rows: (string | number)[][]): string => {
    const headerHTML = headers.map(h => `<th>${h}</th>`).join('');

    const rowsHTML = rows.map(row => `
    <tr>
      ${row.map(cell => `<td>${cell}</td>`).join('')}
    </tr>
  `).join('');

    return `
    <div class="table-container">
      <table>
        <thead>
          <tr>${headerHTML}</tr>
        </thead>
        <tbody>
          ${rowsHTML}
        </tbody>
      </table>
    </div>
  `;
};

export const createButton = (text: string, onClickId: string, primary = false) => {
    // In a vanilla string-based approach, binding events is tricky. 
    // We will just return HTML and expect the caller to attach listeners to IDs or classes.
    return `<button id="${onClickId}" class="btn ${primary ? 'btn-primary' : ''}">${text}</button>`;
}
