
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
}

export interface Cart {
    product: Product;
    amount: number;
    id: string;
}
