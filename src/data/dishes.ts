interface Dish {
  id: string;
  name: string;
  image: string;
  displayName: string;
}

export const dishes: Dish[] = [
  {
    id: 'mohinga',
    name: 'mohinga',
    displayName: 'Mohinga',
    image:
      'https://burmawalakitchen.com/wp-content/uploads/2024/05/Moginga.jpg',
  },
  {
    id: 'tea-leaf-salad',
    name: 'tea-leaf-salad',
    displayName: 'Tea Leaf Salad',
    image:
      'https://c8.alamy.com/comp/FAR1Y0/tea-leaf-salad-served-in-an-ornate-bowl-in-yangon-myanmar-burma-FAR1Y0.jpg',
  },
  {
    id: 'shan-noodles',
    name: 'shan-noodles',
    displayName: 'Shan Noodles',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/shan-noodles.jpg',
  },
  {
    id: 'burmese-curry',
    name: 'burmese-curry',
    displayName: 'Burmese Curry',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c5c3aa4840b161566ee5eb8/1613592561255-97GOQFKRJ5YZYT7RHXE3/burmese-chicken-curry.jpg',
  },
  {
    id: 'mont-lin-ma-yar',
    name: 'mont-lin-ma-yar',
    displayName: 'Mont Lin Ma Yar',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/mont-lin-ma-yar.jpg',
  },
  {
    id: 'inle-fish-curry',
    name: 'inle-fish-curry',
    displayName: 'Inle Fish Curry',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/inle-fish-curry.jpg',
  },
  {
    id: 'tomato-salad',
    name: 'tomato-salad',
    displayName: 'Tomato Salad',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/burmese-tomato-salad.jpg',
  },
  {
    id: 'kayin-sausage',
    name: 'kayin-sausage',
    displayName: 'Kayin Sausage',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/kayin-sausage.jpg',
  },
  {
    id: 'biryani',
    name: 'biryani',
    displayName: 'Burmese Biryani',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt4aAT6t8SWbxuE7YgThGOLOOPImFMqCpYg&s',
  },
  {
    id: 'nan-gyi-thoke',
    name: 'nan-gyi-thoke',
    displayName: 'Nan Gyi Thoke',
    image:
      'https://myanmarlivingimages.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/04/07023017/nan-gyi-thoke.jpg',
  },
  {
    id: 'htoe-mont',
    name: 'htoe-mont',
    displayName: 'Htoe Mont',
    image:
      'https://3.bp.blogspot.com/-oGk4-fzVt14/XDm1ctPXzXI/AAAAAAAABWs/63xLTvh8yt4N04qUrVU5Tf6Eri7bpGWYgCLcBGAs/s1600/Myanmar%2Btraditional%2Bhtoe%2Bmont%2Bcake.jpg',
  },
  {
    id: 'local-wine',
    name: 'local-wine',
    displayName: 'Local Wine',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/65/70/3b/red-mountain-winery.jpg',
  },
  {
    id: 'local-coffee',
    name: 'local-coffee',
    displayName: 'Local Coffee',
    image:
      'https://yangonlife.com.mm/sites/default/files/styles/article/public/field/image/coffee.jpg',
  },
  {
    id: 'seafood-curry',
    name: 'seafood-curry',
    displayName: 'Seafood Curry',
    image:
      'https://www.seriouseats.com/thmb/fXRpYxcmq9YKyHifkQqFYmd_xEI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2020_curry_karides_02-981b0e13b79f46f78ed85bb2e2fdc0ff.jpg',
  },
  {
    id: 'grilled-fish',
    name: 'grilled-fish',
    displayName: 'Grilled Fish',
    image:
      'https://www.butteroverbae.com/wp-content/uploads/2020/12/grilled-fish-2.jpg',
  },
  {
    id: 'coconut-noodles',
    name: 'coconut-noodles',
    displayName: 'Coconut Noodles',
    image:
      'https://myanmarlivingimages.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/10/kyar-zan-hin.jpg',
  },
  {
    id: 'kat-kyi-kaik',
    name: 'kat-kyi-kaik',
    displayName: 'Kat Kyi Kaik (Fried Noodles)',
    image:
      'https://img-global.cpcdn.com/recipes/80d66349f2c3902e/1200x630cq70/photo.jpg',
  },
];

export const getDishByName = (name: string): Dish | undefined => {
  return dishes.find((dish) => dish.name === name);
};
