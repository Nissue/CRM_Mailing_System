document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('nP2ACp6kiYMVmsE8b');
    const emailForm = document.getElementById('emailForm');
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const recipients = document.getElementById('recipients').value.split(',').map(email => email.trim());
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        recipients.forEach(recipient => {
            const templateParams = {
                to_email: recipient,
                subject: subject,
                message: message,
            };
            emailjs.send('service_gmb1sui', 'template_wdjnuye', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully to', recipient);
                }, function(error) {
                    console.error('Failed to send email to', recipient, 'Error:', JSON.stringify(error));
                });
        });
        alert('Emails are being sent!');
    });
});