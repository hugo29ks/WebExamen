import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';
@Injectable()
export class ProductoPipe implements PipeTransform{
    constructor (private readonly _schema){
    }
    transform(valorProductoRequest: any,
              metadata: ArgumentMetadata){
        const {error} = Joi.
        validate(valorProductoRequest,
            this._schema)
        if(error){
            throw  new PeticionInvalidaException(
                {
                    erorr: error,
                    mensaje: 'Datos Incorrectos',
                },
                10
            )
        } else{
            return valorProductoRequest;
        }
    }
}