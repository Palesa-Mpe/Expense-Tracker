export interface Expense {
    id?: number;
    ItemName: string;
    Desc: string;
    Amount:number;
    CategoryId: number;
    UserId?: number;
  }