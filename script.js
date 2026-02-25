// ---------- AUTH ----------

function signup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account Created Successfully!");
    window.location.href = "index.html";
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials");
    }
}

function logout() {
    window.location.href = "index.html";
}

const careerData = {

    // ----- TECH CAREERS -----
    "Data Analyst": ["Excel", "SQL", "Python", "Power BI"],
    "Frontend Developer": ["HTML", "CSS", "JavaScript", "React"],
    "Backend Developer": ["Node.js", "Express", "MongoDB", "APIs"],
    "Full Stack Developer": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    "AI/ML Engineer": ["Python", "Machine Learning", "Data Structures", "TensorFlow"],
    "Cybersecurity Analyst": ["Networking", "Linux", "Security Tools", "Risk Analysis"],
    "Cloud Engineer": ["AWS", "Azure", "Docker", "Kubernetes"],
    "Software Tester": ["Manual Testing", "Selenium", "Bug Tracking", "Test Cases"],

    // ----- PRIVATE SECTOR JOBS -----
    "Business Analyst": ["Excel", "SQL", "Data Visualization", "Communication"],
    "Digital Marketer": ["SEO", "Social Media", "Content Marketing", "Analytics"],
    "HR Executive": ["Communication", "Recruitment", "MS Office", "Employee Relations"],
    "Sales Manager": ["Communication", "Negotiation", "CRM Tools", "Marketing"],
    "Financial Analyst": ["Accounting", "Excel", "Financial Modeling", "Data Analysis"],
    "Operations Manager": ["Leadership", "Project Management", "Process Optimization"],
    
    // ----- CREATIVE CAREERS -----
    "Actor": ["Acting Skills", "Voice Modulation", "Body Language", "Audition Techniques"],
    "Dancer": ["Dance Techniques", "Choreography", "Stage Presence", "Fitness"],
    "Graphic Designer": ["Photoshop", "Illustrator", "Creativity", "Branding"],
    "Content Creator": ["Video Editing", "Public Speaking", "Social Media", "Storytelling"],
    "Fashion Designer": ["Creativity", "Sketching", "Textile Knowledge", "Trend Analysis"],
    "Musician": ["Instrument Skills", "Music Theory", "Composition", "Performance Skills"],

    // ----- GOVERNMENT JOBS -----
    "IAS Officer": ["General Knowledge", "Current Affairs", "Essay Writing", "Ethics"],
    "IPS Officer": ["Physical Fitness", "Law Knowledge", "Leadership", "Current Affairs"],
    "Bank PO": ["Quantitative Aptitude", "Reasoning", "English", "Banking Awareness"],
    "SSC CGL Officer": ["Mathematics", "Reasoning", "General Awareness", "English"],
    "Railway Officer": ["Technical Knowledge", "General Awareness", "Mathematics"],
    "Defense Officer": ["Physical Fitness", "General Knowledge", "Leadership", "Discipline"],
    "Teacher (Govt)": ["Subject Knowledge", "Teaching Skills", "Pedagogy", "Communication"],
    "Police Officer": ["Physical Fitness", "Law Knowledge", "Discipline", "Decision Making"],

    // ----- HEALTHCARE -----
    "Doctor": ["Biology", "Medical Knowledge", "Diagnosis Skills", "Patient Care"],
    "Nurse": ["Patient Care", "Medical Procedures", "Communication", "Compassion"],
    "Pharmacist": ["Pharmacy Knowledge", "Attention to Detail", "Chemistry"],

    // ----- ENTREPRENEURSHIP -----
    "Entrepreneur": ["Leadership", "Financial Planning", "Marketing", "Risk Management"],
    "Startup Founder": ["Innovation", "Networking", "Business Strategy", "Pitching"]
};

// ---------- ROADMAP ----------

function generateRoadmap() {

    let userSkillsInput = document.getElementById("skills").value;

    if (userSkillsInput.trim() === "") {
        alert("Please enter your skills.");
        return;
    }

    let userSkills = userSkillsInput
                        .split(",")
                        .map(skill => skill.trim());

    let selectedCareer = document.getElementById("career").value;

    // ✅ Check if selected career exists in careerData
    if (!careerData[selectedCareer]) {
        alert("Invalid Credentials");
        return;
    }

    let requiredSkills = careerData[selectedCareer];

    let missingSkills = requiredSkills.filter(skill =>
        !userSkills.includes(skill)
    );

    let output = `<h3>Recommended Role: ${selectedCareer}</h3>`;

    if (missingSkills.length === 0) {
        output += "<p>🎉 You already match most required skills!</p>";
    } else {
        output += "<h4>Skill Gap:</h4><p>" + missingSkills.join(", ") + "</p>";
        output += "<h4>Learning Roadmap:</h4>";

        missingSkills.forEach((skill, index) => {
            output += `<p>Month ${index + 1}: Learn ${skill}</p>`;
        });
    }

    document.getElementById("output").innerHTML = output;
}
function showPopup(message) {
    const popup = document.createElement("div");
    popup.innerText = message;
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.background = "#e74c3c";
    popup.style.color = "white";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "6px";
    popup.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}
