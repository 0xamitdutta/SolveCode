import { atom } from 'recoil';

export const userState = atom<{
    isLoading: boolean;
    user?: {
        email: string;
    };
}>({
    key: 'userState',
    default: {
        isLoading: true,
    },
});