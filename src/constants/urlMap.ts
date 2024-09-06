import {RootParamList} from '../types/Navigation';

export const urlMap: Record<string, keyof RootParamList> = {
  'record-challenge': '기록챌린지',
  home: '홈',
  attendance: '행운출첵',
  login: '로그인',
} as const;
