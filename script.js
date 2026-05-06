// Theme Persistence Logic (Session Based)
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Page load hote hi check karein ki kya current session mein 'light' mode chuna gaya tha
if (sessionStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
} else {
    // Default: Dark Mode
    body.classList.remove('light-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
}

// Button click par theme change
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        // Sirf is session ke liye save karo
        sessionStorage.setItem('theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        // Light mode hata do
        sessionStorage.removeItem('theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Modal functions
function openModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});