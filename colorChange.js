var lightMode = false
var style = getComputedStyle(document.body)

function lightDarkMode() {
    if (lightMode == true) {
        document.documentElement.style.setProperty('--bg-color', '#0d1117');
        document.documentElement.style.setProperty('--bg-accent-color', '#1b222d');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--note-hover-color', 'rgba(255, 255, 255, 0.15)');
        lightMode = false
    }
    else {
        document.documentElement.style.setProperty('--bg-color', '#f2eee8');
        document.documentElement.style.setProperty('--bg-accent-color', '#e4ddd2');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--note-hover-color', 'rgba(0, 0, 0, 0.15)');
        lightMode = true
    }
}