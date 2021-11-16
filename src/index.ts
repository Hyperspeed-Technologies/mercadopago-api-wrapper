import { EventEmitter } from "events";
import { MPConstructor } from "../typings";

class Mercadopago extends EventEmitter {
  private _secretKey = "";
  constructor({ secretKey }: MPConstructor) {
    super();
    this._secretKey = secretKey;
  }
}

export default Mercadopago;
