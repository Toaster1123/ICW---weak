import { Card } from '@/components/card';
import axios from 'axios';

export type CardItems = {
  id: number;
  title: string;
  price: number;
  description: string;
  date: string;
  imageUrl: string;
  category: string;
};

async function fetchData() {
  try {
    const { data } = await axios.get('https://b84b23197ab404c1.mokky.dev/ads');
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default async function Home() {
  const ads = await fetchData();
  console.log(ads);
  return (
    <div className="flex flex-wrap mx-40 my-14">
      {ads.map((item: CardItems, id: number) => (
        <Card
          key={id}
          id={item.id}
          title={item.title}
          price={item.price}
          date={item.date}
          imageUrl={item.imageUrl}
          description={''}
          category={''}
        />
      ))}
    </div>
  );
}
