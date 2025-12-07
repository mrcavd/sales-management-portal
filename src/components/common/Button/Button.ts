export const createButton = (text: string, onClickId: string, primary = false) => {
    // In a vanilla string-based approach, binding events is tricky. 
    // We will just return HTML and expect the caller to attach listeners to IDs or classes.
    return `<button id="${onClickId}" class="btn ${primary ? 'btn-primary' : ''}">${text}</button>`;
}
