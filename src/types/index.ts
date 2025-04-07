
export interface Product {
    id: string;
    object: string;
    active: boolean;
    attributes: any[];
    created: number;
    default_price: string;
    description: string;
    images: string[];
    livemode: boolean;
    marketing_features: any[];
    metadata: any;
    name: string;
    package_dimensions: any;
    shippable: any;
    statement_descriptor: any;
    tax_code: string;
    type: string;
    unit_label: any;
    updated: number;
    url: any;
    price?: Prices
}

export interface Prices {
    id: string
    object: string
    active: boolean
    billing_scheme: string
    created: number
    currency: string
    custom_unit_amount: any
    livemode: boolean
    lookup_key: any
    metadata: {}
    nickname: any
    product: string
    recurring: any
    tax_behavior: string
    tiers_mode: any
    transform_quantity: any
    type: string
    unit_amount: number
    unit_amount_decimal: string
}

export interface Cart {
    product: Product;
    amount: number;
    id: string;
}
