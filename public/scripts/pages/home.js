  export function getStarted(buttonElement) {
    // Remove the 'active' class from all buttons
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => button.classList.remove('btn-active'));
  
    // Add the 'active' class to the clicked button
    buttonElement.classList.add('btn-active');
  
    // Get the target column from the clicked button's data attribute
    const target = buttonElement.getAttribute('data-target');
  
    // Hide all columns
    const allColumns = document.querySelectorAll('.desc-col');
    allColumns.forEach(column => {
      column.style.display = 'none';
    });
  
    // Show the matching column
    const targetColumn = document.querySelector(`[data-column="${target}"]`);
    if (targetColumn) {
      targetColumn.style.display = 'block';
    }
  }
  
  