//假数据

const _products = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 },
    { 'id': 4, 'title': 'Samsung Galaxy S21', 'price': 799.99, 'inventory': 8 },
    { 'id': 5, 'title': 'Sony WH-1000XM4', 'price': 349.99, 'inventory': 15 },
    { 'id': 6, 'title': 'MacBook Pro 16"', 'price': 2399.00, 'inventory': 3 },
    { 'id': 7, 'title': 'Bose SoundLink Mini', 'price': 149.99, 'inventory': 20 },
    { 'id': 8, 'title': 'Nike Air Max 270', 'price': 149.99, 'inventory': 12 },
    { 'id': 9, 'title': 'Canon EOS R5', 'price': 3899.00, 'inventory': 7 },
    { 'id': 10, 'title': 'Dell XPS 13', 'price': 1199.99, 'inventory': 5 },
    { 'id': 11, 'title': 'JBL Flip 5', 'price': 89.95, 'inventory': 25 },
    { 'id': 12, 'title': 'Apple Watch Series 6', 'price': 749.00, 'inventory': 10 },
    { 'id': 13, 'title': 'GoPro HERO 9 Black', 'price': 399.99, 'inventory': 6 },
    { 'id': 14, 'title': 'Fitbit Charge 4', 'price': 149.95, 'inventory': 18 },
    { 'id': 15, 'title': 'Nintendo Switch', 'price': 299.99, 'inventory': 14 },
    { 'id': 16, 'title': 'Acer Predator Helios 300', 'price': 1399.99, 'inventory': 4 },
    { 'id': 17, 'title': 'Logitech MX Master 3', 'price': 99.99, 'inventory': 22 },
    { 'id': 18, 'title': 'iPhone 12 Pro Max', 'price': 1099.99, 'inventory': 6 },
    { 'id': 19, 'title': 'Samsung QLED TV 55"', 'price': 799.99, 'inventory': 2 },
    { 'id': 20, 'title': 'Apple AirPods Pro', 'price': 249.00, 'inventory': 12 }
];



export default {
    // cb callback 回调函数解决异步问题
    getProducts(cb){
        setTimeout(() => cb(_products),100)
    }
}