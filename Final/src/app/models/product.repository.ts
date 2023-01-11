import { Product } from "./product";

export class ProductRepository {
    private products : Product[] = [
        { id: 1, name: "Kavacık Villa", price: 2000000, imageUrl: "1.jpg", description: "iyi ev", isActive: true, categoryId: 1 },
        { id: 2, name: "Paşabahçe Villa", price: 3000000, imageUrl: "2.jpg", description: "iyi ev", isActive: true, categoryId: 1 },
        { id: 3, name: "Soğuksu Ev", price: 4000000, imageUrl: "4.jpg", description: "iyi ev", isActive: true, categoryId: 1 },   
        { id: 4, name: "Rüzgarlıbahçe Ev", price: 5000000, imageUrl: "5.jpg", description: "iyi ev", isActive: true, categoryId: 2 },   
        { id: 5, name: "Emirgan Villa", price: 6000000, imageUrl: "6.jpg", description: "iyi ev", isActive: true, categoryId: 2 },   
        { id: 6, name: "Üsküdar Villa", price: 7000000, imageUrl: "7.jpg", description: "iyi ev", isActive: true, categoryId: 3 },   
    ];

    getProducts(): Product[] {
        return this.products.filter(p=>p.isActive);
    }

    getProductById(id: number) {
        return this.products.find(p=>p.id == id);
    }

    getProductsByCategoryId(id: number): Product[] {
        return this.products.filter(p=>p.categoryId == id);
    }
}