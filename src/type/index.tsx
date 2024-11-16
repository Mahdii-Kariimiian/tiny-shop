export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
    image: string;
    images: string[]; // آرایه‌ای از رشته‌ها برای تصاویر
    creationAt: string; // تاریخ ایجاد
    updatedAt: string; // تاریخ به‌روزرسانی
};
