import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const Searchbar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = () => {
        if (query.trim()) {
        onSearch(query.trim());
        } else {
        alert('Please enter a search term');
        }
    };

    return (
        <div className="flex items-center gap-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="border p-2 rounded w-64"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Search
            </button>
        </div>
    );
};

export default Searchbar;
