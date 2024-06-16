import  { useState } from 'react';
import axios from "axios";

const QuoteRequestForm = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [text,setText] = useState('');

   

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/v1/form/new",{name,email,phone,text})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h3 className="text-2xl font-semibold mb-4">Request a <span className="text-blue-500">Quote</span></h3>
                <p className="mb-6">Fill all information details to consult with us to get services from us</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}

                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="telephone"
                        placeholder="Telephone"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}

                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Write some text..."
                        value={text}
                        onChange={(e)=>setText(e.target.value)}

                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        Get a quote <i className="fa fa-arrow-right ml-2"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default QuoteRequestForm;
