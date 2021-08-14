import { getInstance } from './authWrapper';

export const authGuard = async (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    if (localStorage.getItem('secretCode') === 'cool2') {
      return next();
    }

    authService.redirectToLogin();
  };

  return fn();
};
