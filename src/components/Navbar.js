import React from 'react';


const Navbar = () => {
    return (
        <div className='Navbar'>
             <ul>
                <li><a href='#Home'><span class="material-symbols-outlined">home</span></a></li>
                <li><a href='#Aboutme'><span class="material-symbols-outlined">person_filled</span></a></li>
                <li><a href='#Knowledges'><span class="material-symbols-outlined">terminal</span></a></li>
                <li><a href='#Project'><span class="material-symbols-outlined">fact_check</span></a></li>
                <li><a href='#Experiences'><span class="material-symbols-outlined">menu_book</span></a></li>
                <li><a href='#Contact'><span class="material-symbols-outlined">call</span></a></li>
            </ul>
        </div>
    );
};

export default Navbar;