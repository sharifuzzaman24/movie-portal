import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <p>&copy; 2024 MoviePortal. All Rights Reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-red-600">Contact</a>
                        <a href="#" className="hover:text-red-600">Privacy</a>
                        <a href="#" className="hover:text-red-600">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;