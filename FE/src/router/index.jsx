import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../components/layout/DefaultLayout';
import SettingLayout from '../components/layout/SettingLayout';

import MentorRegisterPage from '../pages/settings/mentor/PG8_MentorRegisterPage';
import MentoringPage from '../pages/mentoring/PG2_MentoringPage';
import MentoringDetailsPage from '../pages/mentoring/PG3_MentoringDetailsPage';
import ProfilePage from '../pages/settings/profile/PG7_ProfilePage';
import Calendar from '../pages/calendar/Calendar';
import RegisterHistoryPage from '../pages/settings/mentor/PG9_RegisterHistoryPage';
import MyMentoringPage from '../pages/settings/mentor/PG11_MyMentoringPage';
import CreateMentoringPage from '../pages/settings/mentor/PG12_CreateMentoringPage';
import ChattingPage from '../Chatting/chattingpage';
import GoogleCallbackPage from '../pages/auth/GoogleCallbackPage';
import LoginPage from '../pages/auth/LoginPage';
import AuthenticationLayout from '../pages/auth/AuthenticationLayout';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<MentoringPage />} />
                <Route
                    path="/details/:mentoringId"
                    element={<MentoringDetailsPage />}
                />
                <Route path="/calendar" element={<Calendar />} />
                <Route element={<SettingLayout />}>
                    <Route path="/settings/profile" element={<ProfilePage />} />
                    <Route
                        path="/settings/mentor-register"
                        element={<MentorRegisterPage />}
                    />
                    <Route
                        path="/settings/register-history"
                        element={<RegisterHistoryPage />}
                    />
                    <Route
                        path="/settings/my-mentoring"
                        element={<MyMentoringPage />}
                    />
                    <Route
                        path="/settings/create-mentoring"
                        element={<CreateMentoringPage />}
                    />
                </Route>
            </Route>
            <Route path="/chattingpage" element={<ChattingPage />} />
            <Route path="/callback/google" element={<GoogleCallbackPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}
