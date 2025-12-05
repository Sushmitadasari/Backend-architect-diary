import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, this is from backend server!\n');
});
app.get('/users', (req, res) => {
    const users = [
        {name: 'Sushmita', age: 24},
        {name: 'Sri', age: 30}
    ];
    res.json(users);
});
app.get('/products', (req, res) => {
    const products = [
        {name: 'Laptop', price: 1000},
        {name: 'Phone', price: 5000}
    ];
    res.json(products);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
