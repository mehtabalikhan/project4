
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect input values
    const Username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeData = { name, email, phone, education, experience, skills };
    localStorage.setItem(Username, JSON.stringify(resumeData));

    const resumeHTML = `
        <h2>Editable Resume</h2>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;
    resumeDisplayElement.innerHTML = resumeHTML;

    const shareableURL =` ${window.location.origin}?username=${encodeURIComponent(Username)};
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = ShareableURL;
});

downloadPdfButton.addEventListener('click', () => {
    window.print()`;
});

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const { name, email, phone, education, experience, skills } = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = name;
            (document.getElementById('email') as HTMLInputElement).value = email;
            (document.getElementById('phone') as HTMLInputElement).value = phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = skills;
        }
    }
});