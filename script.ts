//listing element
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
     event.preventDefault();

//type assertion
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const degreeElement = document.getElementById('degree') as HTMLInputElement;
const instituteElement = document.getElementById('institute') as HTMLInputElement;
const yearElement = document.getElementById('year') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;

if (profilePictureInput && nameElement && emailElement && phoneElement && degreeElement && instituteElement && yearElement && experienceElement && skillsElement){

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const degree = degreeElement.value;
    const institute = instituteElement.value;
    const year = yearElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

//picture elements
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


//create resume output
const resumeOutput = `
<h2>Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL}" alt="PROFILE PICTURE" class="profilePicture">` : ''}

<p><strong>Name:</strong> ${name} </p>
<p><strong>Email:</strong> ${email} </p>
<p><strong>Phone Number:</strong> ${phone} </p>

<p><strong>Degree:</strong> ${degree}</p>
<p><strong>Institute:</strong> ${institute}</p>
<p><strong>Year:</strong> ${year}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
}
else{
    console.error('the resume output elements are missing')
}
}else{
    console.error('one or more output elements are missing')
}}
)