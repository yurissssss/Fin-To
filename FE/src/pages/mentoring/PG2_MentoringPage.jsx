import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ApplyMentor from './components/ApplyMentor';
import MentorList from './components/MentorList';

import { Select, SelectItem } from '@heroui/select';

import { nations } from '../../constants/nations';
import { languages } from '../../constants/languages';

export default function MentoringPage() {
  const [value, setValue] = React.useState(new Set([]));
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full">
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={(v) => setSearchTerm(v)}
        placeholder="멘토링 검색"
        className="w-full"
      />
      <ApplyMentor className="w-full mt-4" />

      <div className="flex gap-3 w-full mt-4 justify-end">
        <Select
          aria-label="국적 선택"
          className="w-40"
          placeholder="국적"
          selectedKeys={value}
          variant="bordered"
          onSelectionChange={setValue}
        >
          {nations.map((nation) => (
            <SelectItem key={nation.key}>{nation.label}</SelectItem>
          ))}
        </Select>
        <Select
          aria-label="언어 선택"
          className="w-40"
          placeholder="언어"
          selectedKeys={value}
          variant="bordered"
          onSelectionChange={setValue}
        >
          {languages.map((language) => (
            <SelectItem key={language.key}>{language.label}</SelectItem>
          ))}
        </Select>
        <Select
          aria-label="정렬 기준 선택"
          className="w-30"
          placeholder="평점순"
          selectedKeys={value}
          variant="bordered"
          onSelectionChange={setValue}
        >
          <SelectItem key="newest">최신순</SelectItem>
          <SelectItem key="rating">평점순</SelectItem>
          <SelectItem key="mentees">멘티수순</SelectItem>
        </Select>
      </div>

      <MentorList query={searchTerm} className="w-full gap-2" />
    </div>
  );
}
