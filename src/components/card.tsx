import { CardItems } from '@/app/page';
import Link from 'next/link';

export const Card = ({ id, title, price, date, imageUrl }: CardItems) => {
  return (
    <Link href={'/adv/' + id}>
      <div className=" bg-cyan-800 w-[220px] rounded-md overflow-hidden">
        <div className="h-[220px]">
          <img src={imageUrl} width={220} alt="картинка" />
        </div>
        <div className="text-white p-2 flex flex-col">
          {title}
          <strong>{price} ₽</strong>
          {date}
        </div>
      </div>
    </Link>
  );
};
