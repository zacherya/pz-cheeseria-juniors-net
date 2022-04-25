import { PurchaseItem } from "./purchaseItem";

export interface Purchase {
    id: number;
    purchasedOn: string;
    items: PurchaseItem[];
}