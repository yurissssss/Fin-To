import React, { useState } from 'react';
import { Chip, Select, SelectItem } from '@heroui/react';

const ALL_LANGUAGES = [
  { value: 'Korean', label: 'Korean' },
  { value: 'English', label: 'English' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Spanish', label: 'Spanish' },
];

export default function LanguageSection({ languages: initialLanguages }) {
  const [languages, setLanguages] = useState(initialLanguages);

  const handleAddLanguage = (selectedLanguage) => {
    if (selectedLanguage && !languages.includes(selectedLanguage)) {
      const newLanguages = [...languages, selectedLanguage];
      setLanguages(newLanguages);
    }
  };

  const handleDeleteLanguage = (languageToRemove) => {
    const newLanguages = languages.filter((lang) => lang !== languageToRemove);
    setLanguages(newLanguages);
  };

  const availableLanguages = ALL_LANGUAGES.filter(
    (lang) => !languages.includes(lang.value)
  );

  return (
    <div>
      <Select
        className="w-full z-10"
        label="언어 선택"
        onChange={(e) => handleAddLanguage(e.target.value)}
      >
        {availableLanguages.map((language) => (
          <SelectItem key={language.value} value={language.value}>
            {language.label}
          </SelectItem>
        ))}
      </Select>

      <div className="flex flex-wrap pt-2">
        {languages.map((language) => (
          <Chip
            className="mr-2 z-0"
            key={language}
            onClose={() => handleDeleteLanguage(language)}
          >
            {language}
          </Chip>
        ))}
      </div>
    </div>
  );
}
