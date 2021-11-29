export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        const productos = [
            {
                id: 'a1',
                name: 'Tshirt',
                description: 'nice shirt',
                stock: 5,
                img: 'https://dictionary.cambridge.org/es/images/thumb/shirt_noun_002_33400.jpg?version=5.0.195',
            },
            {
                id: 'a2',
                name: 'Tshirt B',
                description: 'ugly shirt',
                stock: 5,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbP74poZAaGVu2aLI6iE2vwFbOhANYW50TLyfDxSiKA141ZlAD5GNo3wxKXJv8ACqm7o&usqp=CAU',
            },
            {
                id: 'b1',
                name: 'Trousers',
                description: 'nice trouser',
                stock: 5,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g7lNfjtGGne0ItRaEy7hX_BSFWpkZE72Uw&usqp=CAU',
            },
            {
                id: 'b2',
                name: 'B Trousers',
                description: 'ugly trouser',
                stock: 5,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGbRipKOgVH9diTIjv9G_xU_iXoB2v4AUfA&usqp=CAU',
            },
        ]
        resolve(productos)
    }, 3000)
    //reject('404 not found');
})
