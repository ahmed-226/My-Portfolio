import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        email_id: '',
        message: ''
    });

    const { name, email, message } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        
        const templateParams = {
            from_name: formData.name,  
            email_id: formData.email,  
            message: formData.message  
        };

        
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
        )
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
            });

        
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4 text-2xl'>Submit the form below or shoot me an email - ahmedmhmouad41@gmail.com</p>
                </div>
                <input type="text" className='bg-[#ccd6f6] p-2' placeholder='Name' name='name' value={name} onChange={handleChange} />
                <input type="email" className='my-4 bg-[#ccd6f6] p-2' placeholder='Email' name='email' value={email} onChange={handleChange} />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={message} onChange={handleChange}></textarea>
                <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    );
};

export default Contact;
