// Show/Hide Loading Bar
function toggleLoading(show = true) {
    const loadingBar = document.getElementById('loadingBar');
    loadingBar.style.display = show ? 'block' : 'none';
}

// Show Message
function showMessage(message, type = 'success') {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = `
        <div class="message ${type}">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            ${message}
        </div>
    `;
    setTimeout(() => {
        messageContainer.innerHTML = '';
    }, 5000);
}

// Modal Functionality
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Form Validation
function validateForm(formData) {
    const gpa = parseFloat(formData.get('gpa'));
    if (gpa < 0 || gpa > 4) {
        showMessage('Please enter a valid GPA between 0 and 4', 'error');
        return false;
    }
    return true;
}

// Form Submission
document.getElementById('educationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    if (!validateForm(formData)) {
        return;
    }

    toggleLoading(true);

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        showMessage('Your application has been submitted successfully!');
        this.reset();
    } catch (error) {
        showMessage('There was an error submitting your application. Please try again.', 'error');
    } finally {
        toggleLoading(false);
    }
});

// Form Field Animations
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    element.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    toggleLoading(false);
});
