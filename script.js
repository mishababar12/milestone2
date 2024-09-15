var _a;
//listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var degreeElement = document.getElementById('degree');
    var instituteElement = document.getElementById('institute');
    var yearElement = document.getElementById('year');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && degreeElement && instituteElement && yearElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var degree = degreeElement.value;
        var institute = instituteElement.value;
        var year = yearElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"PROFILE PICTURE\" class=\"profilePicture\">") : '', "\n\n<p><strong>Name:</strong> ").concat(name_1, " </p>\n<p><strong>Email:</strong> ").concat(email, " </p>\n<p><strong>Phone Number:</strong> ").concat(phone, " </p>\n\n<p><strong>Degree:</strong> ").concat(degree, "</p>\n<p><strong>Institute:</strong> ").concat(institute, "</p>\n<p><strong>Year:</strong> ").concat(year, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
