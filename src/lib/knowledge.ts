export type Article = {
  id: number;
  title: string;
  content: string;
};

const knowledge: Article[] = [
  { id: 1, title: 'Resetting your password', content: 'Go to ...etc' },
  { id: 2, title: 'Connecting to VPN', content: 'Open ...etc' },
];

export default knowledge;
