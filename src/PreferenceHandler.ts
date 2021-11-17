import { PreferenceItem } from '../typings'

class PreferenceHandler {
    _items: Array<PreferenceItem> = []
    _payer = {
        phone: {},
        identification: {},
        address: {}
    }
    _payment_methods = {
        excluded_payment_methods: [
            {}
        ],
        excluded_payment_types: [
            {}
        ]
    }
    _shipments = {
        free_methods: [
            {}
        ],
        receiver_address: {}
    }
    _back_urls = {}
    _differential_pricing = {}
    _tracks = [
        {}
    ]


    constructor() {

    }
}