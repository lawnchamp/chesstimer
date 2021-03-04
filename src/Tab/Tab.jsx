import React from 'react';

export default function Tab({ active, children, onClick }) {
  const activeClasses = active
    ? 'text-blue-800 bg-gray-100 border-t border-l border-r border-gray-500'
    : 'text-blue-500 hover:text-blue-800';

  return (
    <li className={`mr-1 ${active ? '-mb-px' : ''}`} onClick={onClick}>
      <div className={`${activeClasses} inline-block px-4 py-2 font-medium rounded-t`}>
        {children}
      </div>
    </li>
  );
}
