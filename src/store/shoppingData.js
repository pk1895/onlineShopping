const SHOPPING_DATA = [
    {
        id: 'S01',
        title: 'MEN',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        linkUrl: '/mens',
        items: [{
            id: 'T01',
            title: 'Ethanic',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            subItems: [
                {
                    id: 'U01',
                    name: "Floral T-shirt",
                    imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
                    price: 20,
                    path:'MEN/Ethanic'
                },
                {
                    id: 'U02',
                    name: "Black & White Longsleeve",
                    imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
                    price: 25,
                    path:'MEN/Ethanic'
                },
                {
                    id: 'U03',
                    name: "Pink T-shirt",
                    imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
                    price: 25,
                    path:'MEN/Ethanic'
                },
                {
                    id: 'U04',
                    name: "Jean Long Sleeve",
                    imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
                    price: 40,
                    path:'MEN/Ethanic'
                }
            ]
        }, {
            id: 'T02',
            title: 'Formal',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            subItems: [
                {
                    id: 'U05',
                    name: "Burgundy T-shirt",
                    imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
                    price: 25,
                    path:'MEN/Formal'
                },
                {
                    id: 'U06',
                    name: "Floral T-shirt",
                    imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
                    price: 20,
                    path:'MEN/Formal'
                },
                {
                    id: 'U07',
                    name: "Black & White Longsleeve",
                    imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
                    price: 25,
                    path:'MEN/Formal'
                },
                {
                    id: 'U08',
                    name: "Camo Down Vest",
                    imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
                    price: 325,
                    path:'MEN/Formal'
                }
            ]
        }]

    }, {
        id: 'S02',
        title: 'WOMEN',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        linkUrl: '/womens',
        items: [{
            id: 'T03',
            title: 'Ethanic',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            subItems: [{
                id: 'U011',
                name: "Blue Tanktop",
                imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
                price: 25,
                path:'WOMEN/Ethanic'
            },
            {
                id: 'U012',
                name: "Floral Blouse",
                imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
                price: 20,
                path:'WOMEN/Ethanic'
            },
            {
                id: 'U013',
                name: "Floral Dress",
                imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
                price: 80,
                path:'WOMEN/Ethanic'
            },
            {
                id: 'U014',
                name: "Red Dots Dress",
                imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
                price: 80,
                path:'WOMEN/Ethanic'
            }]
        }, {
            id: 'T04',
            title: 'Western',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            subItems: [{
                id: 'U015',
                name: "Striped Sweater",
                imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
                price: 45,
                path:'WOMEN/Western'
            },
            {
                id: 'U016',
                name: "Yellow Track Suit",
                imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
                price: 135,
                path:'WOMEN/Western'
            },
            {
                id: 'U017',
                name: "White Blouse",
                imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
                price: 20,
                path:'WOMEN/Western'
            },
            {
                id: 'U018',
                name: "Floral Dress",
                imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
                price: 80,
                path:'WOMEN/Western'
            }]
        }]
    }, {
        title: "HATS",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 'S03',
        linkUrl: "/hats",
        items: [{
            title: "Casual Hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 'T05',
            subItems: [{
                id: 'U021',
                name: "Brown Brim",
                imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                price: 25,
                path:'HATS/Casual Hats'
            },
            {
                id: 'U022',
                name: "Blue Beanie",
                imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                price: 18,
                path:'HATS/Casual Hats'
            },
            {
                id: 'U023',
                name: "Brown Cowboy",
                imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
                price: 35,
                path:'HATS/Casual Hats'
            },
            {
                id: 'U024',
                name: "Grey Brim",
                imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
                price: 25,
                path:'HATS/Casual Hats'
            }]
        }, {
            title: "New Arrival",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 'T06',
            subItems: [{
                id: 'U025',
                name: "Green Beanie",
                imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
                price: 18,
                path:'HATS/New Arrival'
            },
            {
                id: 'U026',
                name: "Palm Tree Cap",
                imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
                price: 14,
                path:'HATS/New Arrival'
            },
            {
                id: 'U027',
                name: "Red Beanie",
                imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
                price: 18,
                path:'HATS/New Arrival'
            },
            {
                id: 'U028',
                name: "Wolf Cap",
                imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
                price: 14,
                path:'HATS/New Arrival'
            }]
        }]
    },
    {
        title: "JACKETS",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 'S04',
        linkUrl: "/jackets",
        items: [{
            title: "Casual Jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 'T07',
            subItems: [{
                id: 'U031',
                name: "Black Jean Shearling",
                imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
                price: 125,
                path: 'JACKETS/Casual Jackets'
            },
            {
                id: 'U032',
                name: "Blue Jean Jacket",
                imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
                price: 90,
                path: 'JACKETS/Casual Jackets'
            },
            {
                id: 'U033',
                name: "Grey Jean Jacket",
                imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
                price: 90,
                path: 'JACKETS/Casual Jackets'
            },
            {
                id: 'U034',
                name: "Brown Shearling",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 165,
                path: 'JACKETS/Casual Jackets'
            }]
        }, {
            title: "Formal Jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 'T08',
            subItems: [{
                id: 'U035',
                name: "Black Jean Shearling",
                imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
                price: 125,
                path: 'JACKETS/Formal Jackets'
            },
            {
                id: 'U036',
                name: "Blue Jean Jacket",
                imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
                price: 90,
                path: 'JACKETS/Formal Jackets'
            },
            {
                id: 'U037',
                name: "Tan Trench",
                imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
                price: 185,
                path: 'JACKETS/Formal Jackets'
            },
            {
                id: 'U038',
                name: "Blue Snapback",
                imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
                price: 16,
                path: 'JACKETS/Formal Jackets'
            }]
        }]
    },
    {
        title: "SHOES",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 'S05',
        linkUrl: "/shoes",
        items: [{
            title: "Casual",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 'T09',
            subItems: [{
                id: 'U041',
                name: "Adidas NMD",
                imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                price: 220,
                path: 'SHOES/Casual'
            },
            {
                id: 'U042',
                name: "Adidas Yeezy",
                imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
                price: 280,
                path: 'SHOES/Casual'
            },
            {
                id: 'U043',
                name: "Black Converse",
                imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
                price: 110,
                path: 'SHOES/Casual'
            },
            {
                id: 'U044',
                name: "Nike White AirForce",
                imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
                price: 160,
                path: 'SHOES/Casual'
            }]
        }, {
            title: "Formal",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 'T10',
            subItems: [{
                id: 'U045',
                name: "Nike Red High Tops",
                imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
                price: 160,
                path: 'SHOES/Formal'
            },
            {
                id: 'U046',
                name: "Nike Brown High Tops",
                imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
                price: 160,
                path: 'SHOES/Formal'
            },
            {
                id: 'U047',
                name: "Air Jordan Limited",
                imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
                price: 190,
                path: 'SHOES/Formal'
            },
            {
                id: 'U048',
                name: "Timberlands",
                imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
                price: 200,
                path: 'SHOES/Formal'
            }]
        }]
    }
]

export default SHOPPING_DATA;
