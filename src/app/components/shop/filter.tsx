"use client"

import { FC, useState } from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Image from "next/image";
import cross from '@/../public/images/cross.png'

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: { minPrice: number; maxPrice: number }) => void;
}

const Filter : FC<FilterSidebarProps> = ({ isOpen, onClose, onApply }) => {
    const [minPrice, setMinPrice] = useState<number>(10);
    const [maxPrice, setMaxPrice] = useState<number>(150);

    if (!isOpen) return null;

    return(
        <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        >
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-70 bg-white shadow-lg p-6 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-4">Filter</h2>
                    <button onClick={onClose}><Image src={cross} alt="cross" className="w-6 h-6 -mt-4" /></button>
                </div>

                <label className="block mb-2">Min Price</label>
                <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full border rounded p-2 mb-4"
                />

                <label className="block mb-2">Max Price</label>
                <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full border rounded p-2 mb-4"
                />

                <div className="flex justify-between">
                <button onClick={onClose} className="px-3 py-1 border rounded text-sm">
                    Cancel
                </button>
                <button
                    onClick={() => onApply({ minPrice, maxPrice })}
                    className="px-3 py-1 bg-black text-white rounded text-sm"
                >
                    Apply
                </button>
                </div>
            </div>
        </div>
    );
    
}

export default Filter;