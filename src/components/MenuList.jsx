import MenuItem from './MenuItem';
export default function MenuList({ items, onSelectItem }) {
  //   console.log(decks);
  return (
    <ul className='menu-list'>
      {items.map((item) => (
        <MenuItem item={item} onSelectItem={onSelectItem} key={item.id} />
      ))}
    </ul>
  );
}
