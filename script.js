var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get elements
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('phone');
    var addressElement = document.getElementById('Address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var hobbiesElement = document.getElementById('hobbies');
    var userNameElement = document.getElementById('username');
    if (profilePictureInput && nameElement && emailElement && contactElement && addressElement && educationElement && experienceElement && skillsElement && hobbiesElement && userNameElement) {
        // Collect values from inputs
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var hobbies = hobbiesElement.value;
        var userName = userNameElement.value;
        // Format resume path
        var uniquePath = "resumes/".concat(userName.replace(/\s+/g, '_'), "_resume.html");
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create resume HTML
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : "", "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact Number:</strong> ").concat(contact, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            \n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            \n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            \n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            \n            <h3>Hobbies</h3>\n            <p>").concat(hobbies, "</p>\n        ");
        // Create download link
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Resume';
        // Insert the generated resume into the page and offer download
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
