(function() {
    // Check if the chatbot iframe already exists
    if (document.getElementById('chatbot-iframe')) {
      return;
    }
  
    // Create the iframe element
    var iframe = document.createElement('iframe');
    iframe.id = 'chatbot-iframe'; // Set an ID for later reference
    iframe.src = 'https://chatbot-pi-seven-26.vercel.app/'; // The URL of your chatbot app
    iframe.style.position = 'fixed';
    iframe.style.bottom = '20px';
    iframe.style.right = '20px';
    iframe.style.width = '350px';
    iframe.style.height = '500px';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '10px';
    iframe.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    iframe.style.zIndex = '9999';
  
    // Append the iframe to the body of the document
    document.body.appendChild(iframe);
  })();
  