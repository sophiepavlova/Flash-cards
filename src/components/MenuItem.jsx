// { id: 1, title: 'Coding', cardCount: 32, meta: 'Last studied 2d ago' }
export default function MenuItem({ item, onSelectItem }) {
  const cardsCount = item.sets?.reduce((sum, set) => sum + set.cardCount, 0);
  return (
    <li className='menu-item' onClick={() => onSelectItem(item)}>
      <p className='menu-item_name'>{item.title}</p>
      <div className='menu-item_subs'>
        <p className='menu-item_subs_info1'>{cardsCount} cards</p>
        <p className='menu-item_subs_info2'>{item.meta}</p>
      </div>
    </li>
  );
}
