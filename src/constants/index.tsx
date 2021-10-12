export const HOST_CLOUD = process.env.REACT_APP_HOST_CLOUD;
export const BASIC_KEY = process.env.REACT_APP_BASIC_KEY;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID!;

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';
export const EXPIRES_IN = 'expires_in';
export const TYPE_TOKEN = 'Bearer';
export const USER_REGISTRATION = 'user_registration';
export const TIME_VERIFICATION_PAGE = '30'; //minute
export const TIME_RESEND = '3'; //minute
export const ROLE_ID_COMPANY = '2,4';
export const CURRENT_USER = 'current_user';

const passwordRegexp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const inputPhoneRegExp = /^[0-9-]+$/;

const specialCharacterReg = /[$&+,:;=?[\]@#|{}'<>.^*()%!-/]/;

const onlyLetterReg = /^[a-zA-Z\s]*$/;

export const router = {
    login: '/login',
    sign_up: '/signup',
    system_management: '/system-management',
    register_program: '/register-program',
    user_info: '/user-info',
    user_register: '/user-register',
    center_operator: '/center-operator',
    contact_admin: '/contact-adminstration',
    demo: '/demo',
};

export const GRANT_TYPE = {
    password: 'password',
    refresh_token: 'refresh_token',
};

const listPhone = [
    { label: '+(82)', value: '+(82)' },
    { label: '+(84)', value: '+(84)' },
];

const listCountry = [
    { label: 'Korean', value: 'Korean' },
    { label: 'VietNam', value: 'VietNam' },
];

export const CONSTANT = {
    router: router,
    routerLogged: [
        router.system_management,
        router.register_program,
        router.user_info,
        router.user_register,
        router.center_operator,
        router.contact_admin,
    ],
    routerNotLoggedIn: [router.login, router.sign_up],
    listPhone,
    listCountry,
    passwordRegexp,
    phoneRegExp,
    emailRegExp,
    inputPhoneRegExp,
    specialCharacterReg,
    onlyLetterReg,
};

export const ERROR_STATUS = [400, 500, 426, 422];

export const ERORR_UNAUTHORIZED = 401;

export const acceptFileImportCenterZone =
    '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

export const WIDTH_SIDEBAR_COLLAPSE = '55px';

export const WIDTH_SIDEBAR_EXPAND = '200px';

export const WIDTH_SUBMENU = '265px';

export const WIDTH_SUBMENU_LEVEL_2 = '560px';
