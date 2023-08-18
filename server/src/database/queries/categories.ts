export const getAllCategories: string = 'SELECT * FROM categories';

export const getCategoryById: string = 'SELECT * FROM categories WHERE categoryid = ?';

export const createCategory: string = 'INSERT INTO categories (name) values (?)';

export const updateCategory: string = 'UPDTAE categories SET name = ? WHERE categoryid = ?';

export const deleteCategory: string = 'DELETE FROM categories WHERE categoryid = ?';