import MenuItem from './MenuItem';
export default function MenuList({ decks, onSelectDeck }) {
  //   console.log(decks);
  return (
    <ul className='menu-list'>
      {decks.map((deck) => (
        <MenuItem deck={deck} onSelectDeck={onSelectDeck} key={deck.id} />
      ))}
    </ul>
  );
}
