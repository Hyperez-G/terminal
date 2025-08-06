// Simple script to update the current date and time
document.addEventListener('DOMContentLoaded', function() {
    updateTerminalTime();
    setInterval(updateTerminalTime, 1000);
});

function updateTerminalTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
                   'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const time = now.toTimeString().split(' ')[0]; // Get HH:MM:SS
    
    const terminalDate = document.getElementById('terminal-date');
    if (terminalDate) {
        terminalDate.textContent = `${month} ${day} ${year} - ${time}`;
    }
}