
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const name = document.getElementById('name').value;
            const responseMessage = document.getElementById('responseMessage');
            
          
            responseMessage.innerHTML = `Teşekkürler <b>${name}</b>, mesajın başarıyla alındı!`;
            responseMessage.style.color = "green";
            
            
            contactForm.reset();
        });
    }
});