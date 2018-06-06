import * as Joi from 'joi';
export const PRODUCTO_SCHEMA = Joi
    .object()
    .keys({
        id: Joi
            .number(),
        nProducto: Joi
            .number(),
        nombre: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        descripcion: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        precio: Joi
            .number(),
        fechaLanzamiento: Joi
            .date(),
        aniosGarantia: Joi
            .number(),
        tiendaId: Joi
            .number(),
    });