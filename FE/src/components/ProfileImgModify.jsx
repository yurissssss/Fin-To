import React, { useState, useRef } from 'react';

export default function ProfileImgModify({ initialImg }) {
  const [profileImg, setProfileImg] = useState(initialImg);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="relative w-32 h-32 mx-auto mb-6">
      <img
        src={profileImg}
        alt="Profile"
        className="w-full h-full rounded-full object-cover"
      />
      <button
        onClick={handleImageClick}
        className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="프로필 이미지 변경"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
        </svg>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
}