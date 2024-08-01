"use client";
import { ChangeEvent, useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      placeholder="Find your favourite cocktail"
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
}
