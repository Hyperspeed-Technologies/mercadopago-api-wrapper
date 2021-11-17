import { EventEmitter } from "events";

export default class Mercadopago extends EventEmitter {
  private _secretKey: string;
}

export type MPConstructor = {
    private secretKey: string;
}

export interface PreferenceItem {
  title: string;
  description: string;
  picture_url: string;
  category_id: string;
  quantity: number;
  currency_id: string;
  unit_price: string;
}
