import * as Joi from 'joi';
export const TIENDA_SCHEMA = Joi
    .object()
    .keys({
        id: Joi
            .number(),
        nombres: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        direccion: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        fechaApertura: Joi
            .date(),
        RUC:Joi
            .number()
            .min(0),
        matriz:Joi
            .boolean(),
    });