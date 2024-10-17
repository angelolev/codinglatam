// @ts-nocheck
export function formatDate(dateString, includeYear = false) {
    // Create a date object in UTC
    const date = new Date(dateString);
    
    // Get the UTC date components
    const utcDay = date.getUTCDate();
    const utcMonth = date.getUTCMonth();
    const utcYear = date.getUTCFullYear();
    
    // Create a new date object using the UTC components
    const adjustedDate = new Date(Date.UTC(utcYear, utcMonth, utcDay));
    
    const options = {
      day: 'numeric',
      month: 'long',
      timeZone: 'UTC'
    };
  
    if (includeYear) {
      options.year = 'numeric';
    }
  
    return adjustedDate.toLocaleDateString('es-ES', options);
  }