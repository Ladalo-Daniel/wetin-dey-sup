export default function formatTimeToAMPM(date) {
    // Get the hour and minute components
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Converting the hour to 12-hour format
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; // Ensuring 12:00am instead of 0:00am
  
    // Adding leading zeros to minutes if needed
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  
    // Creating the formatted time string
    const formattedTime = `${formattedHours}:${formattedMinutes}${ampm}`;
  
    return formattedTime;
  }
  