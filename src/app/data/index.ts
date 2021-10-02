export const STATIC = {
  REGEX: {
    EMAIL_REGEXP:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{10,50}))$/,
    PHONE_REGEXP: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
    FULLNAME_REGEXP: /^[a-zA-Z._-\s]{10,30}$/,
  },
  ERROR_MESSAGE: {
    NAME: [
      { type: 'required', message: 'Nombre es requerido' },
      { type: 'pattern', message: 'Debe ingresar un nombre válido' },
    ],
    PHONE: [
      { type: 'required', message: 'Teléfono es requerido' },
      { type: 'pattern', message: 'Debe ingresar número de teléfono móvil' },
    ],
    EMAIL: [
      { type: 'required', message: 'Email es requerido' },
      { type: 'pattern', message: 'Debe ingresa un email valido' },
    ],
  },
};
