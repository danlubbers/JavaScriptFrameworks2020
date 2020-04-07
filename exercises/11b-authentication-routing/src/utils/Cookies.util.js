import Cookies from 'js-cookie';

export const setSessionCookie = uuid => {
  Cookies.set('session', uuid, {expires: 1});
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get('session');
  // If sessionCookie is found(true) then return it.
  return sessionCookie && sessionCookie;
};

export const destroySessionCookie = () => {
  Cookies.remove('session');
};
  