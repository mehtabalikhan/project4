var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var Username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
    localStorage.setItem(Username, JSON.stringify(resumeData));
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableURL = " ".concat(window.location.origin, "?username=").concat(encodeURIComponent(Username), ";\n    shareableLinkContainer.style.display = 'block';\n    shareableLinkElement.href = shareableURL;\n    shareableLinkElement.textContent = ShareableURL;\n});\n\ndownloadPdfButton.addEventListener('click', () => {\n    window.print()");
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var _a = JSON.parse(savedResumeData), name_1 = _a.name, email = _a.email, phone = _a.phone, education = _a.education, experience = _a.experience, skills = _a.skills;
            document.getElementById('username').value = username;
            document.getElementById('name').value = name_1;
            document.getElementById('email').value = email;
            document.getElementById('phone').value = phone;
            document.getElementById('education').value = education;
            document.getElementById('experience').value = experience;
            document.getElementById('skills').value = skills;
        }
    }
});
