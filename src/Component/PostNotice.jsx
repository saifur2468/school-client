import React, { useState, useEffect } from 'react';

const postNotice = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(false);

  
    const loadNotices = () => {
        fetch('http://localhost:5000/SeeNotice')
            .then(res => res.json())
            .then(data => setNotices(data));
    };

    useEffect(() => {
        loadNotices();
    }, []);

  
    const handlePostNotice = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const message = form.message.value;

        const noticeData = { title, category, message };

        setLoading(true);
        const response = await fetch('http://localhost:5000/admin/post-notice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(noticeData)
        });

        const result = await response.json();

        if (result.success) {
            alert(" Notice Posted Successfully!"); 
            form.reset(); 
            loadNotices(); 
        }
        setLoading(false);
    };

    return (
        <div className="p-10 max-w-4xl mx-auto">
            {/* Form */}
            <form onSubmit={handlePostNotice} className="bg-gray-100 p-6 rounded-lg mb-10 shadow">
                <h2 className="text-xl font-bold mb-4">Post a Notice</h2>
                <input name="title" placeholder="Title" className="w-full p-2 mb-2 border rounded" required />
                <select name="category" className="w-full p-2 mb-2 border rounded">
                    <option value="General">General</option>
                    <option value="Urgent">Urgent</option>
                </select>
                <textarea name="message" placeholder="Message" className="w-full p-2 mb-2 border rounded" rows="4" required />
                <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
                    {loading ? 'Posting...' : 'Publish'}
                </button>
            </form>

            {/* View List */}
            {/* <h2 className="text-2xl font-bold mb-4">Current Notices</h2>
            <div className="space-y-4">
                {notices.map(notice => (
                    <div key={notice._id} className="p-4 border-l-4 border-blue-500 bg-white shadow rounded">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-lg">{notice.title}</h3>
                            <span className="text-sm bg-blue-100 px-2 py-1 rounded">{notice.category}</span>
                        </div>
                        <p className="text-gray-700 mt-2">{notice.message}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default postNotice;