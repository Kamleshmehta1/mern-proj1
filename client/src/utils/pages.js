import {
  ADMIN,
  ADMIN_ROOT_PATH,
  AUTHORIZED_PATHS,
  USER_PATH,
} from '../routes/paths';

export const userPages = [
  { page: 'Home', url: USER_PATH + AUTHORIZED_PATHS.HOME.path },
  { page: 'Products', url: USER_PATH + AUTHORIZED_PATHS.products.path },
  { page: 'Chat', url: USER_PATH + AUTHORIZED_PATHS.chat.path },
];

export const adminPages = [
  { page: 'Home', url: ADMIN_ROOT_PATH + ADMIN.ADMIN_HOME.path },
  { page: 'Users', url: ADMIN_ROOT_PATH + ADMIN.USERS.path },
];
