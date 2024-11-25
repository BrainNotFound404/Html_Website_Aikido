document.querySelector('.delayed-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent immediate navigation
  
    // Add an animation class to the body
    document.body.classList.add('animate');
  
    // Delay the navigation
    setTimeout(() => {
      window.location.href = "nextpage.html"; // Replace with your target URL
    }, 2000); // 2-second delay
  });
  