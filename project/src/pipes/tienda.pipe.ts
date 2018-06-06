import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';

@Injectable()
export class TiendaPipe implements PipeTransform{
    constructor (private readonly _schema){
    }

    transform(valorTiendaRequest: any,
              metadata: ArgumentMetadata){
        const  {error}= Joi.validate(
            valorTiendaRequest,
            this._schema);
        if(error){
            throw  new PeticionInvalidaException(
                {
                    error: error,
                    mensaje: 'Datos Incorrectos',
                },
                10
            )
        }else{
            return valorTiendaRequest;
        }
    }
}