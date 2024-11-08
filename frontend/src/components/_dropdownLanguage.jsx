import React, { useState } from 'react';
import i18n from 'i18next'; 
import { US, DE } from 'country-flag-icons/react/3x2';
import { MdLanguage } from 'react-icons/md';

function DropDownLanguage() {
    const [selectValue, setSelectedValue] = useState(i18n.language);
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const options = [
        { value: 'de', label: 'de', flag: <DE /> },
        { value: 'en', label: 'en', flag: <US /> }
    ];

    const handleSelect = (selectedLang) => {
        setSelectedValue(selectedLang);
        changeLanguage(selectedLang);
        setIsOpen(false);  // Close the dropdown after selection
        console.log('language changed.');
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                <MdLanguage />
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <div 
                            key={option.value} 
                            className="dropdown-item" 
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.flag}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDownLanguage;
