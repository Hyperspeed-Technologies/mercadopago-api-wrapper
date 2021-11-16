import { EventEmitter } from "events";

export default class Mercadopago extends EventEmitter {
  private _secretKey: string;
}

export type MPConstructor = {
    private secretKey: string;
}
