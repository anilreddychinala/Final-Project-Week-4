document.getElementById('job-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const jobTitle = document.getElementById('job-title').value.trim();
    const companyName = document.getElementById('company-name').value.trim();
    const applicationDate = document.getElementById('application-date').value;
    const status = document.getElementById('status').value;

    // Validate inputs
    if (!jobTitle || !companyName || !applicationDate) {
        alert('Please fill out all fields.');
        return;
    }

    // Add job application to the list
    addJobApplication({ jobTitle, companyName, applicationDate, status });

    // Clear the form
    this.reset();
});

function addJobApplication(job) {
    const jobList = document.getElementById('job-list');
    const jobItem = document.createElement('div');
    jobItem.classList.add('job-item');
    jobItem.innerHTML = `
        <h3>${job.jobTitle}</h3>
        <p><strong>Company:</strong> ${job.companyName}</p>
        <p><strong>Date:</strong> ${job.applicationDate}</p>
        <p><strong>Status:</strong> ${job.status}</p>
    `;
    jobList.appendChild(jobItem);
}