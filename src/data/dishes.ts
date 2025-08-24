interface Dish {
  id: string;
  name: string;
  image: string;
  displayName: string;
  description: string;
}

export const dishes: Dish[] = [
  {
    id: 'mohinga',
    name: 'mohinga',
    displayName: 'Mohinga',
    description:
      "A hearty fish soup with rice noodles, crispy fritters, and aromatic herbs - Myanmar's beloved national breakfast dish.",
    image:
      'https://burmawalakitchen.com/wp-content/uploads/2024/05/Moginga.jpg',
  },
  {
    id: 'tea-leaf-salad',
    name: 'tea-leaf-salad',
    displayName: 'Tea Leaf Salad',
    description:
      'A unique blend of fermented tea leaves, crunchy nuts, tomatoes, and garlic - a tangy and textural Burmese favorite.',
    image:
      'https://c8.alamy.com/comp/FAR1Y0/tea-leaf-salad-served-in-an-ornate-bowl-in-yangon-myanmar-burma-FAR1Y0.jpg',
  },
  {
    id: 'shan-noodles',
    name: 'shan-noodles',
    displayName: 'Shan Noodles',
    description:
      'Rice noodles in a light tomato-based sauce with marinated chicken or pork, garnished with peanuts and fresh herbs.',
    image:
      'https://hsaba.com/wp-content/uploads/2009/01/shan_noodles_hsaba.jpg',
  },
  {
    id: 'burmese-curry',
    name: 'burmese-curry',
    displayName: 'Burmese Curry',
    description:
      'Rich and aromatic curry made with meat or vegetables, cooked in oil and spices until tender - a staple of Burmese cuisine.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c5c3aa4840b161566ee5eb8/1613592561255-97GOQFKRJ5YZYT7RHXE3/burmese-chicken-curry.jpg',
  },
  {
    id: 'mont-lin-ma-yar',
    name: 'mont-lin-ma-yar',
    displayName: 'Mont Lin Ma Yar',
    description:
      'Crispy "couple snack" made from rice flour, quail eggs, and spring onions - a popular street food delicacy.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/mont-lin-ma-yar.jpg',
  },
  {
    id: 'inle-fish-curry',
    name: 'inle-fish-curry',
    displayName: 'Inle Fish Curry',
    description:
      'Fresh fish from Inle Lake cooked in a rich tomato-based curry sauce with local herbs and spices.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/inle-fish-curry.jpg',
  },
  {
    id: 'tomato-salad',
    name: 'tomato-salad',
    displayName: 'Tomato Salad',
    description:
      'Fresh tomatoes mixed with peanut oil, crispy fried garlic, and dried shrimp - a light and refreshing side dish.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/burmese-tomato-salad.jpg',
  },
  {
    id: 'kayin-sausage',
    name: 'kayin-sausage',
    displayName: 'Kayin Sausage',
    description:
      'Traditional Karen-style pork sausage seasoned with herbs, garlic, and chilies - a specialty of Kayin State.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aa8f119e17ba3c5c4720bef/1597780521463-ZQPZQPZ8V8XWXJ8N8YQF/kayin-sausage.jpg',
  },
  {
    id: 'biryani',
    name: 'biryani',
    displayName: 'Burmese Biryani',
    description:
      'Fragrant rice cooked with aromatic spices, meat, and caramelized onions - influenced by Indian cuisine.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt4aAT6t8SWbxuE7YgThGOLOOPImFMqCpYg&s',
  },
  {
    id: 'nan-gyi-thoke',
    name: 'nan-gyi-thoke',
    displayName: 'Nan Gyi Thoke',
    description:
      'Thick rice noodles tossed with chicken curry, coconut milk, and crispy garnishes - a popular Mandalay dish.',
    image:
      'https://images.squarespace-cdn.com/content/v1/604fca2357feb3489dacff9b/1615924788667-6AOD4HF3780P26L3TY7B/NanGyiThokeBurmalicious1',
  },
  {
    id: 'htoe-mont',
    name: 'htoe-mont',
    displayName: 'Htoe Mont',
    description:
      'Sweet glutinous rice cake with coconut shavings and poppy seeds - a traditional Mon dessert.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zNlhVBIwKljPxq8iPJCePCNLxjdEoxDV5g&s',
  },
  {
    id: 'local-wine',
    name: 'local-wine',
    displayName: 'Local Wine',
    description:
      "Artisanal wine produced in Myanmar's Shan State, particularly from the Red Mountain Estate - known for its unique terroir.",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDPJ7fMxLhXyMnzXx3EFCklVLD664oFl52w&s',
  },
  {
    id: 'local-coffee',
    name: 'local-coffee',
    displayName: 'Local Coffee',
    description:
      'Premium Arabica coffee grown in the highlands of Shan State, known for its smooth flavor and medium body.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/fe/27/98/misty-morning-scene-from.jpg?w=900&h=-1&s=1',
  },
  {
    id: 'seafood-curry',
    name: 'seafood-curry',
    displayName: 'Seafood Curry',
    description:
      'Fresh seafood cooked in a rich curry sauce with lemongrass, turmeric, and local spices - a coastal specialty.',
    image:
      'https://www.seriouseats.com/thmb/fXRpYxcmq9YKyHifkQqFYmd_xEI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2020_curry_karides_02-981b0e13b79f46f78ed85bb2e2fdc0ff.jpg',
  },
  {
    id: 'grilled-fish',
    name: 'grilled-fish',
    displayName: 'Grilled Fish',
    description:
      "Fresh fish grilled to perfection and served with herbs and chili sauce - common along Myanmar's rivers and coast.",
    image:
      'https://www.butteroverbae.com/wp-content/uploads/2020/12/grilled-fish-2.jpg',
  },
  {
    id: 'coconut-noodles',
    name: 'coconut-noodles',
    displayName: 'Coconut Noodles',
    description:
      'Wheat noodles in a rich coconut milk broth with chicken, garnished with crispy wonton strips and hard-boiled eggs.',
    image:
      'https://myanmarlivingimages.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/10/kyar-zan-hin.jpg',
  },
  {
    id: 'kat-kyi-kaik',
    name: 'kat-kyi-kaik',
    displayName: 'Kat Kyi Kaik (Fried Noodles)',
    description:
      'Stir-fried flat rice noodles with seafood, vegetables, and eggs - a popular street food dish from Yangon.',
    image:
      'https://img-global.cpcdn.com/recipes/80d66349f2c3902e/1200x630cq70/photo.jpg',
  },
  {
    id: 'mont-di',
    name: 'mont-di',
    displayName: 'Mont Di - Taunggyi Style',
    description:
      'A spicy rice noodle dish often served with fish gravy, banana stem, and chili oil - a Taunggyi specialty with unique Shan-style ingredients and flavors.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Nangyithohk.gif/1200px-Nangyithohk.gif',
  },
  {
    id: 'aythaya-wine',
    name: 'aythaya-wine',
    displayName: 'Aythaya Wine',
    image:
      'https://www.myanmore.com/wp-content/uploads/2022/09/aythaya_vineyard_wine_myanmar.jpg',
    description:
      "Myanmar's first vineyard located near Taunggyi, producing high-quality red, white, and rosé wines. Aythaya Wine is a signature of Shan State's modern culinary landscape, offering scenic tastings and vineyard tours.",
  },
  {
    id: 'kalaw-paratha-curry',
    name: 'kalaw-paratha-curry',
    displayName: 'Paratha with Indian-style Curry',
    description:
      "Flaky, pan-fried flatbread (paratha) served with lentil or meat-based curry. A testament to Kalaw's colonial and Indian railway history, offering one of the best paratha and curry combinations in Myanmar.",
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/0a/c8/6d/4c/lunch-vegetable-curry.jpg',
  },
  {
    id: 'tofu-nway',
    name: 'tofu-nway',
    displayName: 'Tofu Nway (Shan Tofu Soup)',
    description:
      "A warm, creamy yellow tofu porridge made from chickpeas, topped with rice noodles, meat, and chili oil. Made fresh daily in Kalaw, it's a comforting, protein-rich meal perfect for the cool climate.",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVB0VVUnBThKLv1cnq2gtlWUCbTnIRF2pvw&s',
  },
  {
    id: 'shan-tomato-curry',
    name: 'shan-tomato-curry',
    displayName: 'Shan-style Tomato Curry',
    description:
      "A rich, tangy tomato-based curry with meat, flavored with Shan spices and garnished with fried garlic. Kalaw's version is uniquely herbal and fragrant due to the fresh hill-grown herbs and tomatoes from local farms.",
    image:
      'https://i.ytimg.com/vi/ngvmPvJcyUU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCqZli7k0gvBoKj3LKAX3SPvWl6HA',
  },
  {
    id: 'maymyo-coffee',
    name: 'maymyo-coffee',
    displayName: 'Maymyo Coffee',
    description:
      "Premium Arabica coffee grown in the cool highlands around Pyin Oo Lwin (formerly Maymyo). Known for its smooth, mild flavor and medium body, this coffee is a signature product of the region's colonial-era coffee plantations.",
    image:
      'https://www.madeinmyanmar.asia/wp-content/uploads/2018/10/product-logo-2-3.jpg',
  },
  {
    id: 'strawberry-products',
    name: 'strawberry-products',
    displayName: 'Strawberry Products',
    description:
      "Fresh strawberries and strawberry-based products including jams, preserves, and desserts. Pyin Oo Lwin's cool climate makes it ideal for strawberry cultivation, and the town is famous for its sweet, juicy strawberries.",
    image:
      'https://www.mtnewstoday.com/en/wp-content/uploads/2024/02/photo_2024-02-09_11-07-04-1.jpg',
  },
  {
    id: 'dairy-products',
    name: 'dairy-products',
    displayName: 'Dairy Products',
    description:
      "Fresh dairy products including milk, cheese, yogurt, and butter produced in Pyin Oo Lwin's dairy farms. The town's cool climate and lush pastures make it ideal for dairy farming, producing high-quality, fresh dairy products.",
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6ZWn9PIh3I3wXbDv4NlP_ShJf3tRDlQZm2qZg7nsxxux-glQoSG12pnv-Ku7cM5-T8n6tCkFRcZ9HGa_ahUVmlY2FdYVZRhXD8Mbt-HB2TKZxmsj7e2X_6sbGrKQNcWMNMjTudw/s1600/Server_Holding_Strawberries_and_Milk_Pyin_Oo_Lwin_Myanmar_03_2014.jpg',
  },
];

export const getDishByName = (name: string): Dish | undefined => {
  return dishes.find((dish) => dish.name === name);
};
