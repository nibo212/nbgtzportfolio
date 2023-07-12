import React from 'react';


const Navbar = () => {
    return (
        <div className='Navbar'>
             <ul>
                <li><strong><a href='#Home'><span className="material-symbols-outlined">home</span></a></strong></li>
                <li><a href='#Aboutme'><span className="material-symbols-outlined">person_filled</span></a></li>
                <li><a href='#Knowledges'><span className="material-symbols-outlined">terminal</span></a></li>
                <li><a href='#Project'><span className="material-symbols-outlined">fact_check</span></a></li>
                <li><a href='#Experiences'><span className="material-symbols-outlined">menu_book</span></a></li>
                <li><a href='#Contacts'><span className="material-symbols-outlined">call</span></a></li>
            </ul>
        </div>
    );
};

export default Navbar;