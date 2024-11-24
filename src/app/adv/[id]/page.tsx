import axios from 'axios';

async function fetchData(id: number) {
  try {
    const { data } = await axios.get(`https://b84b23197ab404c1.mokky.dev/ads/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function AdvPage({ params }: { params: { id: number } }) {
  const itemData = await fetchData(params.id);
  return (
    <div className="flex items-center  flex-col mt-12">
      <div>
        <img src={itemData.imageUrl} width={400} alt="pic" />
        <p>{itemData.title}</p>
        <strong>{itemData.price} ₽</strong>
        <p>{itemData.description}</p>
        <p>Категории: {itemData.category}</p>
        <p>{itemData.date}</p>
      </div>
    </div>
  );
}
