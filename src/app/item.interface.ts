export interface Item {
    _id: string;
    updateTime: number;
    href: string;
    description: string;
    productCode: string;
    purchaseDate: string;
    price: number;
    quantity: number;
    productUrl: string;
    imageUrl: string;
    imageWidth?: any;
    imageHeight?: any;
    returnByDate: string;
    category: Category;
    parsingConfidence: number;
    returend: boolean;
    order: Order;
    shipments: any[];
    orderEmails: Order[];
    shipmentEmails: any[];
    priceHistory: any[];
    merchantData: MerchantData;
    userName: string;
    userFullName: string;
    userImageUrl: string;
    fashbashId: string;
    productVisibility: boolean;
}

interface MerchantData {
    _id: string;
    updateTime: number;
    createTime: number;
    hidden: boolean;
    name: string;
    logoUrl: string;
    serviceFormUrl: string;
    servicePhoneNumber: string;
    priceDropPolicyUrl: string;
    returnPolicyUrl: string;
    websiteUrl: string;
    editable: boolean;
    supportsPriceDrop: boolean;
    href: string;
    serviceEmail: string;
}

interface Order {
    href: string;
}

interface Category {
    href: string;
    name: string;
}