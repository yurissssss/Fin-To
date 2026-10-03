import React, { useMemo } from 'react';
import { Chip } from '@heroui/react';

import star from '../../../assets/imgs/icons/icon_star.png';
import { UserRound } from 'lucide-react';

const profileImages = [
    'https://i.pinimg.com/1200x/3e/ae/04/3eae04da2274a8cfe8d0bc1f5b2208de.jpg',
    'https://i.pinimg.com/736x/99/c5/9a/99c59a135ffd76b663996c503985b755.jpg',
    'https://i.pinimg.com/1200x/7d/22/60/7d2260b9d7b0e92b8ec6b693a982ed57.jpg',
    'https://i.pinimg.com/1200x/4a/e4/5b/4ae45b3560cc11438ac63ad43344d25e.jpg',
    'https://i.pinimg.com/1200x/20/ec/44/20ec449b3a7074fc5ea89cc8debcb68d.jpg',
    'https://i.pinimg.com/1200x/b4/d0/38/b4d0382c47787e0e9f904001faf1796d.jpg',
    'https://i.pinimg.com/736x/70/70/2a/70702a21370a452d26e07346da526d42.jpg',
    'https://i.pinimg.com/736x/e9/db/41/e9db412913329a73d075409fc894f22b.jpg',
    'https://i.pinimg.com/736x/17/9c/26/179c26a0dc72bc2cb767c80da70b34f9.jpg',
    'https://i.pinimg.com/1200x/f3/93/63/f3936315ff3c67577d87dbc6b45ccde9.jpg',
    'https://i.pinimg.com/736x/4b/67/d4/4b67d468e05edc9238440212fcf658d5.jpg',
    'https://i.pinimg.com/1200x/05/c4/16/05c416f60c1b1ce535d4386ff5b39ed7.jpg',
    'https://i.pinimg.com/1200x/b4/61/95/b46195070d1c396eba9d11701c4860e4.jpg',
    'https://i.pinimg.com/1200x/5b/2f/b0/5b2fb03d1f432d8bdb7cb3449a4d6581.jpg',
    'https://i.pinimg.com/1200x/27/ea/0c/27ea0c96d80e962ffb646bfc993be11d.jpg',
];

// 사용된 이미지를 추적하는 Set (컴포넌트 외부에서 관리)
let usedImages = new Set();

function MentoringCard({
    title,
    name,
    emoji,
    languages,
    rating,
    mentees,
    className,
}) {
    // 중복되지 않는 랜덤 이미지 선택
    const randomProfileImg = useMemo(() => {
        // 사용 가능한 이미지들 (아직 사용되지 않은 것들)
        const availableImages = profileImages.filter(
            (img) => !usedImages.has(img)
        );

        // 모든 이미지가 사용되었다면 리셋
        if (availableImages.length === 0) {
            usedImages.clear();
            availableImages.push(...profileImages);
        }

        // 랜덤 선택
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        const selectedImage = availableImages[randomIndex];

        // 선택된 이미지를 사용된 목록에 추가
        usedImages.add(selectedImage);

        return selectedImage;
    }, []); // 빈 의존성 배열로 한 번만 실행
    return (
        <div
            className={`flex rounded-2xl border border-neutral-200 bg-white p-6 ${className}`}
        >
            {/* 왼쪽: 프로필 이미지 */}
            <div className="flex-shrink-0">
                <img
                    src={randomProfileImg}
                    alt="profile"
                    className="size-13 rounded-full object-cover"
                />
            </div>

            {/* 오른쪽: 내용 */}
            <div className="ml-4 flex-1">
                <h3 className="text-sm font-semibold text-neutral-900">
                    {title}
                </h3>
                <div className="mt-1 text-neutral-500 flex items-center gap-2">
                    <span>{name}</span>
                    <span className="text-lg" aria-hidden>
                        {emoji}
                    </span>
                </div>

                {/* 오른쪽: 언어 배지 */}
                <div className="mt-3 flex flex-wrap gap-1">
                    {languages.map((lang, index) => (
                        <Chip
                            key={index}
                            size="sm"
                            className="bg-neutral-200 text-neutral-900 text-xs px-3 py-1"
                        >
                            {lang}
                        </Chip>
                    ))}
                </div>

                {/* 하단: 정보 */}
                <div className="mt-3 flex items-center gap-5 text-neutral-700">
                    <div className="flex items-center gap-1">
                        <img src={star} alt="star" className="size-5" />
                        <span className="text-sm">
                            {Number(rating).toFixed(1)}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <UserRound className="size-5" />
                        <span className="text-sm">{mentees}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MentoringCard;
