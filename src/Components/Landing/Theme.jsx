import React, { useState, useEffect } from 'react';
import { FaGear } from "react-icons/fa6";



const Theme = () => {
    const [activeColor, setActiveColor] = useState('purple');

    useEffect(() => {
        // This effect runs after the component mounts and whenever activeColor changes
        document.getElementById('theme-color').href = `css/${activeColor}.css`;
        console.log(`css/${activeColor}.css`)
    }, [activeColor]);

    const toggleSwitcher = () => {
        const switcherWrap = document.querySelector('.switcher-wrap');
        switcherWrap.classList.toggle('active');
    };

    const handleColorItemClick = (color) => {
        setActiveColor(color);
        const colorSwitcherItems = document.querySelectorAll('.color-switcher ul li');
        colorSwitcherItems.forEach(item => item.classList.remove('active'));
        const currentItem = document.querySelector(`.color-switcher ul li[data-color="${color}"]`);
        currentItem.classList.add('active');
    };

    return (
        <main>
            <div className="switcher-wrap">
                <div className="switcher-trigger" onClick={toggleSwitcher}>
                <FaGear className="fa fa-gear"/>

                </div>
                <div className="color-switcher">
                    <h6>Color Switcher</h6>
                    <ul className="mt-3 clearfix">
                        {['default', 'purple', 'blue', 'red', 'green', 'indigo', 'orange', 'cyan', 'yellow', 'pink'].map(color => (
                            <li
                                key={color}
                                className={`bg-${color} ${activeColor === color ? 'active' : ''}`}
                                data-color={color}
                                title={color.charAt(0).toUpperCase() + color.slice(1)}
                                onClick={() => handleColorItemClick(color)}
                            ></li>
                        ))}
                    </ul>
                    <p>These are just demo colors. You can <b>easily</b> create your own color scheme.</p>
                </div>
            </div>
        </main>
    );
}

export default Theme;
