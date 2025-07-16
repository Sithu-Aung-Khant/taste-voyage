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
      'https://images.squarespace-cdn.com/content/v1/5c5c3aa4840b161566ee5eb8/1613592561255-97GOQFKRJ5YZYT7RHXE3/mohinga-burmese-fish-soup.jpg',
  },
  {
    id: 'tea-leaf-salad',
    name: 'tea-leaf-salad',
    displayName: 'Tea Leaf Salad',
    image:
      'https://assets.bonappetit.com/photos/57acc7c353e63daf11a4d9a3/1:1/w_1600,h_1600,c_limit/burmese-tea-leaf-salad.jpg',
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
      'https://images.squarespace-cdn.com/content/v1/5c5c3aa4840b161566ee5eb8/1613592561255-97GOQFKRJ5YZYT7RHXE3/mont-lin-ma-yar.jpg',
  },
  {
    id: 'inle-fish-curry',
    name: 'inle-fish-curry',
    displayName: 'Inle Fish Curry',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c5c3aa4840b161566ee5eb8/1613592561255-97GOQFKRJ5YZYT7RHXE3/inle-fish-curry.jpg',
  },
  {
    id: 'tomato-salad',
    name: 'tomato-salad',
    displayName: 'Tomato Salad',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c5c3aa4840b161566ee5eb8/1613592561255-97GOQFKRJ5YZYT7RHXE3/burmese-tomato-salad.jpg',
  },
  {
    id: 'kayin-sausage',
    name: 'kayin-sausage',
    displayName: 'Kayin Sausage',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c5c3aa4840b161566ee5eb8/1613592561255-97GOQFKRJ5YZYT7RHXE3/kayin-sausage.jpg',
  },
];

export const getDishByName = (name: string): Dish | undefined => {
  return dishes.find((dish) => dish.name === name);
};
