"use client"

import { FC, useState } from "react";

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
        <div>
            <p>Price</p>
        </div>
    )
}

export default Filter;