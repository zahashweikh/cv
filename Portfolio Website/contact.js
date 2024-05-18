const contactForm = document.getElementsById('contact-form'),
        contactMessage=document.getElementById('contact-message')

const sendEmail=(e)=>{
    e.preventDefault()

    emailjs.sendForm('service_ynfmymf','template_jdxu9lc','#contact-form','Q4el0U-WpJ30COUrf')
    .then(() =>{
        contactMessage.textContent = 'Message sent successfully'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
    }, () =>{
        contactMessage.textContent = 'Message not sent (service error)'
    })
}

contactForm.addEventListener('submit',sendEmail)