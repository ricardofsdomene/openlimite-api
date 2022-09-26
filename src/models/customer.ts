export interface Customer {
    organizationId: string;
    brandName: string;
    companyCnpj: string;
    occupationCode: string;
    occupationDescription: string;
    informedIncome: {
        frequency: string,
        amount: number,
        currency: string,
        date: string
    };
    informedPatrimony: {
        amount: number,
        currency: string,
        year: number
    };
}