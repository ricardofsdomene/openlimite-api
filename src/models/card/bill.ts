export interface CardBill {
    creditCardAccountId: string;
    customerId: string;
    organizationId: string;
    organizationName: string;
    billId: string;
    dueDate: string;
    billTotalAmount: number;
    billTotalAmountCurrency: string;
    billMinimumAmount: number;
    billMinimumAmountCurrency: string;
    isInstalment: string;
    financeCharges: string;
    payments: string;
}