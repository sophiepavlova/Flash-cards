// { id: 1, title: 'Coding', cardCount: 32, meta: 'Last studied 2d ago' }
export default function MenuItem({ deck, onSelectDeck }) {
  const cardsCount = deck.sets.reduce((sum, set) => sum + set.cardCount, 0);
  return (
    <li className='menu-item' onClick={() => onSelectDeck(deck)}>
      <p className='menu-item_name'>{deck.title}</p>
      <div className='menu-item_subs'>
        <p className='menu-item_subs_info1'>{cardsCount} cards</p>
        <p className='menu-item_subs_info2'>{deck.meta}</p>
      </div>
    </li>
  );
}
