export interface Service {
    title: string;
    description: string;
    image?: string;
    alt?: string;
}

export interface Perk {
    name: string;
    isActive: boolean;
}

export interface PricingPlan {
    description: string;
    price: number;
    buttonLabel: string;
    perkList: Perk[];
}

export interface ClientProfile {
    [key: string]: string | number;
}

export interface CaseStudy {
    title: string;
    image: string;
    clientProfile: ClientProfile;
    challenge: string;
    solution: string[];
    results: string[];
}

export interface ContactData {
    address: {
        physical: {
            street: string;
            city: string;
            state: string;
            zip: string;
        };
    };
    phone: string;
    email: string;
}
