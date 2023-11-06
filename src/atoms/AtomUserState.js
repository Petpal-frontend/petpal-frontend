import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    _id: '',
    username: '',
    email: '',
    accountname: '',
    intro: '',
    image: '',
    token: '',
    refreshToken: '',
  },
  effects_UNSTABLE: [persistAtom],
});
