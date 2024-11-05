import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { MoreVertical, ChevronFirst, ChevronLast } from "lucide-react";



export default function Sidebar({ children }) {

    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <aside className='h-screen'>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="https://img.logoipsum.com/243.svg" className='w-32' />
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst />
                    </button>
                </div>

                <ul className="flex-1 px-3">{children}</ul>
                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        className="w-10 h-10 rounded-md"
                    />
                </div>
                <div className={'flex justify-between items-center w-52 ml-3'} >
                    <div className="leading-4">
                        <h4 className="font-semibold">John Doe</h4>
                        <span className="tect-xs text-gray-600">johndoe@email.com</span>
                    </div>
                    <MoreVertical size={20} />
                </div>
            </nav>
        </aside>
    );
};

export function SidebarItem({ icon, text, active, alert }) {
    return (
        <li className={'relative flex items-center py-2 px-3 my-1 font-medium rounded-md courser-pointer trasition-colors ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800": "hover:bg-indigo-50 text-gray-600"}'}>
            {icon}
            <span className="w-52 ml-3">{text}</span>
        </li>
    )
}

