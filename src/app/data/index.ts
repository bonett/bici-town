export const STATIC = {
  REGEX: {
    EMAIL_REGEXP:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PHONE_REGEXP: /^\+?(6\d{2}|34[1-9]\d{1})\d{7}$/,
    REGEXNUMBER: /^\d+$/,
  },
  ERROR_MESSAGE: {
    BIKE: [{ type: 'required', message: 'Bicicleta de alquiler es requerida' }],
    NUMBER: [
      { type: 'required', message: 'Número de dias es requerido' },
      { type: 'pattern', message: 'Solo se permite números' },
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
