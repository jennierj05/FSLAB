document.getElementById('coaching-session-client-feedback-survey').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally


    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log(data);


    document.getElementById('message').textContent = 'Feedback submitted successfully!';

    event.target.reset();
  });
