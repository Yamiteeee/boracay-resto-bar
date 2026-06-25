export interface MenuItem {
  id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  category: 'food' | 'drinks';
  tag?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'f1',
    title: 'Boracay Garlic Butter Prawns',
    price: '₱650',
    description: 'Freshly caught local prawns sautéed in a rich, savory garlic butter sauce with a hint of chili and calamansi.',
    imageUrl: 'https://images.unsplash.com/photo-1684253193395-bb87ad32d4be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'food',
    tag: 'Best Seller',
  },
  {
    id: 'f2',
    title: 'Sizzling Pork Sisig',
    price: '₱380',
    description: 'The ultimate Filipino bar chow. Crispy, seasoned pork served on a sizzling hot plate with egg and fresh chilies.',
    imageUrl: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600',
    category: 'food',
    tag: 'Local Favorite',
  },
  {
    id: 'f3',
    title: 'Grilled Tuna Belly',
    price: '₱480',
    description: 'Tender tuna belly marinated in soy-ginger glaze, perfectly grilled over charcoal for that authentic beach BBQ flavor.',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600',
    category: 'food',
  },
  {
    id: 'd1',
    title: 'Calamansi Mojito',
    price: '₱280',
    description: 'A tropical twist on a classic. White rum, fresh mint leaves, brown sugar, and local Boracay calamansi juice.',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    category: 'drinks',
    tag: 'Happy Hour',
  },
  {
    id: 'd2',
    title: 'White Beach Mango Daiquiri',
    price: '₱320',
    description: 'Blended perfectly frozen with world-famous sweet Philippine mangoes, light rum, and a splash of lime.',
    imageUrl: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600',
    category: 'drinks',
    tag: 'Signature',
  },
  {
    id: 'd3',
    title: 'Chilled Coconut Craft Beer',
    price: '₱220',
    description: 'Local island craft ale infused with subtle notes of toasted coconut. Perfect for watching the sunset.',
    imageUrl: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=600',
    category: 'drinks',
  },
];