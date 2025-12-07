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
