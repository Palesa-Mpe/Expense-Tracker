export const getAllCategories: string = 'SELECT * FROM expense_tracker.categories';

export const getCategoryById: string = 'SELECT * FROM expense_tracker.categories WHERE categoryid = ?';

export const getCategoryByName: string = 'SELECT * FROM expense_tracker.categories WHERE name = ? ALLOW FILTERING';

export const createCategory: string = 'INSERT INTO expense_tracker.categories (categoryid, name) values (?, ?) IF NOT EXISTS';

export const updateCategory: string = 'UPDATE expense_tracker.categories SET name = ? WHERE categoryid = ? IF EXISTS';

export const deleteCategory: string = 'DELETE FROM expense_tracker.categories WHERE categoryid = ?';