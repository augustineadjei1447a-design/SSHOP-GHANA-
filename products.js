const PRODUCTS = [
  {id:1,title:'Classic T-Shirt',price:19.99,img:'https://picsum.photos/seed/p1/600/400'},
  {id:2,title:'Wireless Earbuds',price:49.99,img:'https://picsum.photos/seed/p2/600/400'},
  {id:3,title:'Ceramic Mug',price:12.5,img:'https://picsum.photos/seed/p3/600/400'},
  {id:4,title:'Denim Jacket',price:79.0,img:'https://picsum.photos/seed/p4/600/400'},
  {id:5,title:'Smart Lamp',price:39.99,img:'https://picsum.photos/seed/p5/600/400'},
  {id:6,title:'Bedsheet (Queen)',price:59.99,img:'https://picsum.photos/seed/p6/600/400'}
];
function renderProducts(){ const wrap = document.getElementById('products'); if(!wrap) return; wrap.innerHTML=''; PRODUCTS.forEach(p=>{ const card=document.createElement('div'); card.className='product-card'; card.innerHTML = `<img src="${p.img}" alt=""><h3>${p.title}</h3><p>$${p.price.toFixed(2)}</p><button data-id="${p.id}">Add to cart</button>`; wrap.appendChild(card); }); }
document.addEventListener('click', e=>{ if(e.target.matches('.product-card button')){ const id=e.target.dataset.id; const prod=PRODUCTS.find(p=>p.id==id); addToCart(prod); alert(prod.title + ' added to cart (demo)'); } });
function addToCart(prod){ const cart = JSON.parse(localStorage.getItem('traco_cart')||'{}'); if(cart[prod.id]) cart[prod.id].qty += 1; else cart[prod.id] = {id:prod.id,title:prod.title,price:prod.price,qty:1,img:prod.img}; localStorage.setItem('traco_cart',JSON.stringify(cart)); }
renderProducts();
