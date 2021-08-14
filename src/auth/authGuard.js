import { getInstance } from './authWrapper';

export const authGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    if (authService.isAuthenticated) {
      return next();
    }

    authService.redirectToLogin();
  };

  return fn();
};
