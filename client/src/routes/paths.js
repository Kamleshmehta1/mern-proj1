export const ROOTS_PATH = '/';
export const USER_PATH = '/user';
export const ADMIN_ROOT_PATH = '/admin';

export const UNAUTHORIZE_PATH = {
  SIGN_IN: {
    path: '/login',
    fullPath: '/login',
    permissions: [],
    title: 'Log In',
    pageName: 'log-in',
  },
  SIGN_UP: {
    path: '/signup',
    fullPath: '/signup',
    permissions: [],
    title: 'Sign Up',
    pageName: 'sign-up',
  },
};

export const ADMIN = {
  root: ADMIN_ROOT_PATH,
  ADMIN_HOME: {
    path: `/home`,
    fullPath: `${ADMIN_ROOT_PATH}/home`,
    permissions: [],
    title: 'Admin',
    pageName: 'Admin',
  },
  USERS: {
    path: `/users`,
    fullPath: `${ADMIN_ROOT_PATH}/users`,
    permissions: [],
    title: 'Users',
    pageName: 'Users',
  },
};

export const NO_PAGE = {
  NO_PAGE: {
    path: `/no-page`,
    fullPath: `${ADMIN_ROOT_PATH}/page`,
    permissions: [],
    title: 'NoPage',
    pageName: 'NoPage',
  },
};

export const AUTHORIZED_PATHS = {
  root: USER_PATH,
  HOME: {
    path: `/home`,
    fullPath: `${USER_PATH}/home`,
    permissions: [],
    title: 'Home',
    pageName: 'Home',
  },
  products: {
    path: `/products`,
    fullPath: `${USER_PATH}/products`,
    permissions: [],
    title: 'Products',
    pageName: 'Products',
  },
  chat: {
    path: `/chat`,
    fullPath: `${USER_PATH}/chat`,
    permissions: [],
    title: 'Chats',
    pageName: 'Chat',
  },
};
