// products.js
const products = [
  {
      id: 1,
      image: 'pic/productpage/Bead_Bracelet.webp',
      title: 'Elegant Bead Bracelet',
      description: 'Cambodian Handmade Craft',
      price: 25.00,
      category: 'jewelry'
  },
  {
      id: 2,
      image: 'pic/productpage/Bead_Bracelet2.webp',
      title: 'Colorful Bead Bracelet',
      description: 'Cambodian Handmade Craft',
      price: 30.00,
      category: 'jewelry'
  },
  {
      id: 3,
      image: 'pic/productpage/Bead_Bracelet3.webp',
      title: 'Classic Bead Bracelet',
      description: 'Cambodian Handmade Craft',
      price: 28.00,
      category: 'jewelry'
  },
  {
      id: 4,
      image: 'pic/productpage/Bead_Bracelet1.webp',
      title: 'Modern Bead Bracelet',
      description: 'Cambodian Handmade Craft',
      price: 32.00,
      category: 'jewelry'
  },
  {
      id: 5,
      image: 'pic/productpage/Ceramic_Vase.webp',
      title: 'Decorative Ceramic Vase',
      description: 'Cambodian Handmade Craft',
      price: 45.00,
      category: 'ceramic'
  },
  {
      id: 6,
      image: 'pic/productpage/Ceramic_Vase2.webp',
      title: 'Elegant Ceramic Vase',
      description: 'Cambodian Handmade Craft',
      price: 50.00,
      category: 'ceramic'
  },
  {
      id: 7,
      image: 'pic/productpage/Ceramic_Vase3.webp',
      title: 'Modern Ceramic Vase',
      description: 'Cambodian Handmade Craft',
      price: 55.00,
      category: 'ceramic'
  },
  {
      id: 8,
      image: 'pic/productpage/Ceramic_Vase4.webp',
      title: 'Classic Ceramic Vase',
      description: 'Cambodian Handmade Craft',
      price: 60.00,
      category: 'ceramic'
  },
  {
      id: 9,
      image: 'pic/productpage/SilverJewelry.webp',
      title: 'Elegant Silver Earrings',
      description: 'Cambodian Handmade Craft',
      price: 120.00,
      category: 'silverwork'
  },
  {
      id: 10,
      image: 'pic/productpage/SilverJewelry2.webp',
      title: 'Classic Silver Earrings',
      description: 'Cambodian Handmade Craft',
      price: 130.00,
      category: 'silverwork'
  },
  {
      id: 11,
      image: 'pic/productpage/SilverJewelry3.webp',
      title: 'Modern Silver Earrings',
      description: 'Cambodian Handmade Craft',
      price: 140.00,
      category: 'silverwork'
  },
  {
      id: 12,
      image: 'pic/productpage/SilverJewelry4.webp',
      title: 'Decorative Silver Earrings',
      description: 'Cambodian Handmade Craft',
      price: 150.00,
      category: 'silverwork'
  },
  {
      id: 13,
      image: 'pic/productpage/Wood_Sculpture.webp',
      title: 'Classic Wood Sculpture',
      description: 'Cambodian Handmade Craft',
      price: 300.00,
      category: 'wooden carving'
  },
  {
      id: 14,
      image: 'pic/productpage/Wood_Sculpture2.webp',
      title: 'Elegant Wood Sculpture',
      description: 'Cambodian Handmade Craft',
      price: 350.00,
      category: 'wooden carving'
  },
  {
      id: 15,
      image: 'pic/productpage/Wood_Sculpture3.webp',
      title: 'Modern Wood Sculpture',
      description: 'Cambodian Handmade Craft',
      price: 400.00,
      category: 'wooden carving'
  },
  {
      id: 16,
      image: 'pic/productpage/Wood_Sculpture4.webp',
      title: 'Decorative Wood Sculpture',
      description: 'Cambodian Handmade Craft',
      price: 450.00,
      category: 'wooden carving'
  },
  {
      id: 17,
      image: 'pic/productpage/SilkScarf1.webp',
      title: 'Elegant Silk Scarf',
      description: 'Cambodian Handmade Craft',
      price: 80.00,
      category: 'silk'
  },
  {
      id: 18,
      image: 'pic/productpage/SilkScarf2.webp',
      title: 'Classic Silk Scarf',
      description: 'Cambodian Handmade Craft',
      price: 85.00,
      category: 'silk'
  },
  {
      id: 19,
      image: 'pic/productpage/SilkScarf3.webp',
      title: 'Modern Silk Scarf',
      description: 'Cambodian Handmade Craft',
      price: 90.00,
      category: 'silk'
  },
  {
      id: 20,
      image: 'pic/productpage/SilkScarf4.webp',
      title: 'Decorative Silk Scarf',
      description: 'Cambodian Handmade Craft',
      price: 95.00,
      category: 'silk'
  },
  {
      id: 21,
      image: 'pic/productpage/Ceramic_Pot1.webp',
      title: 'Classic Ceramic Pot',
      description: 'Cambodian Handmade Craft',
      price: 100.00,
      category: 'ceramic'
  },
  {
      id: 22,
      image: 'pic/productpage/Ceramic_Pot2.webp',
      title: 'Modern Ceramic Pot',
      description: 'Cambodian Handmade Craft',
      price: 110.00,
      category: 'ceramic'
  },
  {
      id: 23,
      image: 'pic/productpage/Ceramic_Pot3.webp',
      title: 'Elegant Ceramic Pot',
      description: 'Cambodian Handmade Craft',
      price: 120.00,
      category: 'ceramic'
  },
  {
      id: 24,
      image: 'pic/productpage/Ceramic_Pot.webp',
      title: 'Decorative Ceramic Pot',
      description: 'Cambodian Handmade Craft',
      price: 130.00,
      category: 'ceramic'
  },
  {
      id: 25,
      image: 'pic/productpage/Jade_EarRing.webp',
      title: 'Elegant Jade Earrings',
      description: 'Cambodian Handmade Craft',
      price: 200.00,
      category: 'jewelry'
  },
  {
      id: 26,
      image: 'pic/productpage/Jade_Necklace.webp',
      title: 'Elegant Jade Necklace',
      description: 'Cambodian Handmade Craft',
      price: 250.00,
      category: 'jewelry'
  },
  {
      id: 27,
      image: 'pic/productpage/Jade_Necklace2.webp',
      title: 'Classic Jade Necklace',
      description: 'Cambodian Handmade Craft',
      price: 275.00,
      category: 'jewelry'
  },
  {
      id: 28,
      image: 'pic/productpage/Scarf_Bracelet.webp',
      title: 'Elegant Scarf Bracelet',
      description: 'Cambodian Handmade Craft',
      price: 150.00,
      category: 'jewelry'
  },
  {
      id: 29,
      image: 'pic/productpage/Budha1.webp',
      title: 'Classic Budha Sculpture',
      description: 'Cambodian Handmade Craft',
      price: 320.00,
      category: 'woodencarving'
  },
  {
      id: 30,
      image: 'pic/productpage/Budha2.webp',
      title: 'Elegant Budha Sculpture',
      description: 'Cambodian Handmade Craft',
      price: 340.00,
      category: 'woodencarving'
  },
  {
      id: 31,
      image: 'pic/productpage/Budha3.webp',
      title: 'Modern Budha Sculpture',
      description: 'Cambodian Handmade Craft',
      price: 360.00,
      category: 'woodencarving'
  },
  {
      id: 32,
      image: 'pic/productpage/Budha4.webp',
      title: 'Decorative Budha Sculpture',
      description: 'Cambodian Handmade Craft',
      price: 380.00,
      category: 'woodencarving'
  },
  {
      id: 33,
      image: 'pic/productpage/Ceramic_Figurine.webp',
      title: 'Classic Ceramic Figurine',
      description: 'Cambodian Handmade Craft',
      price: 200.00,
      category: 'figurine'
  },
  {
      id: 34,
      image: 'pic/productpage/Ceramic_Figurine2.webp',
      title: 'Modern Ceramic Figurine',
      description: 'Cambodian Handmade Craft',
      price: 220.00,
      category: 'figurine'
  },
  {
      id: 35,
      image: 'pic/productpage/Ceramic_Figurine3.webp',
      title: 'Elegant Ceramic Figurine',
      description: 'Cambodian Handmade Craft',
      price: 240.00,
      category: 'figurine'
  },
  {
      id: 36,
      image: 'pic/productpage/Ceramic_Figurine4.webp',
      title: 'Decorative Ceramic Figurine',
      description: 'Cambodian Handmade Craft',
      price: 260.00,
      category: 'figurine'
  }
];


const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  };
  
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
  };
  
  document.addEventListener("DOMContentLoaded", updateCartCount);
  
  
  
  
  