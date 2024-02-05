import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { db } from '../firebase.config'

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loader, setLoader] = useState(false);

  const handleOnChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const {name, email, message} = contactData;
    // console.log(contactData);
    db.collection('contacts')
      .add({
        contactData,
      })
      .then(() => {
        name && email && message ? toast.success('Message Sent') : toast.error('Please fill all the fields');
        setLoader(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setContactData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='max-w-md w-full mx-auto p-6 flex flex-col items-center bg-white border-stone-400'>
      <h2 className='font-titleFont text-center text-2xl mb-6 text-stone-600'>Contact Us</h2>
      <form action='' onSubmit={handleSubmit} className='w-full mx-auto flex flex-col items-center'>
        <input placeholder='Name' name='name' value={contactData.name} onChange={handleOnChange} className='w-full mb-4 px-3 py-2 placeholder:text-sm placeholder:text-stone-600 border focus:outline-none focus:border focus:border-stone-600' required type='text' />
        <input placeholder='Email' name='email' value={contactData.email} onChange={handleOnChange} className='w-full mb-4 px-3 py-2 placeholder:text-sm placeholder:text-stone-600 border focus:outline-none focus:border focus:border-stone-600' required type='text' />
        <textarea rows='4' placeholder='Message' name='message' value={contactData.message} onChange={handleOnChange} className='w-full mb-4 px-3 py-10 placeholder:text-sm placeholder:text-stone-600 placeholder:-translate-y-8 border focus:outline-none focus:border focus:border-stone-600' required type='text' /> 
        <button type='submit' style={{background: loader ? "green" : null }} className='text-base rounded-lg bg-stone-600 text-white w-2/3 py-3 mt-6 mb-6 hover:bg-white hover:text-stone-600 hover:border hover:border-stone-600 cursor-pointer duration-300'>Send</button>
      </form>
      <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    </div>
  );
};

export default Contact;