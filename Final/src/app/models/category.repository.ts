import { Category } from "./category";

export class CategoryRepository {
    private categories: Category[] = [
        { id: 1, name: "Satılık" },
        { id: 2, name: "Kiralık" },
        { id: 3, name: "Günlük Kiralık" }
    ];

    getCategories(): Category[] {
        return this.categories;
    }

    getCategoryById(id: number) {
        return this.categories.find(c => c.id == id);
    }
}