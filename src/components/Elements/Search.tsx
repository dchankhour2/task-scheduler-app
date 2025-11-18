import { Search, Calendar } from "lucide-react";
import React from 'react';

interface SearchProps {
    searchTerm: string;
    filterDate: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setFilterDate: React.Dispatch<React.SetStateAction<string>>;
}

const SearchTask: React.FC<SearchProps> = ({ searchTerm, filterDate, setSearchTerm, setFilterDate}) => {

    return (
        <div className="bg-white rounded-xl shadow p-4 mb-4 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center w-full sm:w-2/3 border border-gray-300 rounded-lg px-3">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="Search by title or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 outline-none"
                />
            </div>
            <div className="flex items-center w-full sm:w-1/3 border border-gray-300 rounded-lg px-3">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    className="w-full p-2 outline-none"
                />
            </div>
        </div>
    )
}

export default SearchTask;
 