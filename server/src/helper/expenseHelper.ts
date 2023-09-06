interface CategoryAmount {
    categoryid: string;
    amount: number;
}

export class ExpenseHelper {

    static async calculateAverageAmounts<T extends CategoryAmount>(data: T[]): Promise<Array<CategoryAmount>> {
        const categorySums = new Map<string, { sum: number; count: number }>();

        for (const item of data) {
            const categoryid: string = item.categoryid.toString();
            const amount = item. amount;

            if (!categorySums.has(categoryid)) {
                categorySums.set(categoryid, { sum: 0, count: 0 });
            }

            const category = categorySums.get(categoryid)!;
            category.sum += Number(amount);
            category.count++;
        }
        let averages: Array<CategoryAmount> = [];

        for (const [categoryid, { sum, count }] of categorySums.entries()) {
            console.log(sum);
            console.log(count);
            
            averages.push({ categoryid: categoryid, amount: Number(sum / count) });
        }

        return averages;
    }

    static async calculateSumAmounts<T extends CategoryAmount>(data: T[]): Promise<Array<CategoryAmount>> {
        const amountSums = new Map<string, { sum: number }>();

        for (const item of data) {
            const categoryid: string = item.categoryid.toString();
            const amount = item.amount;

            if (!amountSums.has(categoryid)) {
                amountSums.set(categoryid, { sum: 0 });
            }

            const category = amountSums.get(categoryid)!;
            category.sum += Number(amount);
        }

        let sumArray: Array<CategoryAmount> = [];

        for (const [categoryid, { sum }] of amountSums.entries()) {
            sumArray.push({ categoryid: categoryid, amount: Number(sum) });
        }

        return sumArray;
    }
}

