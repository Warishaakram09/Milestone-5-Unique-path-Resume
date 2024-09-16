document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get elements
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement | null;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const contactElement = document.getElementById('phone') as HTMLInputElement | null;
    const addressElement = document.getElementById('Address') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
    const hobbiesElement = document.getElementById('hobbies') as HTMLTextAreaElement | null;
    const userNameElement = document.getElementById('username') as HTMLInputElement | null;

    if (profilePictureInput && nameElement && emailElement && contactElement && addressElement && educationElement && experienceElement && skillsElement && hobbiesElement && userNameElement) {
        // Collect values from inputs
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const hobbies = hobbiesElement.value;
        const userName = userNameElement.value;

        // Format resume path
        const uniquePath = `resumes/${userName.replace(/\s+/g, '_')}_resume.html`;

        // Handle profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Create resume HTML
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilepicture">` : ""}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact Number:</strong> ${contact}</p>
            <p><strong>Address:</strong> ${address}</p>
            
            <h3>Education</h3>
            <p>${education}</p>
            
            <h3>Experience</h3>
            <p>${experience}</p>
            
            <h3>Skills</h3>
            <p>${skills}</p>
            
            <h3>Hobbies</h3>
            <p>${hobbies}</p>
        `;

        // Create download link
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Resume';

        // Insert the generated resume into the page and offer download
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});
