export default function Book({ item }) {
  // ========== Початок зони редагування ==============
  return (
    <div className="book">
        <img
          className="book__cover"
          alt={item.alt}
          src={item.coverUrl}
        />
        <div className="book__summary">
          <span className="book__title">{item.title}</span>
          <span className="book__year">{item.year}</span>
          <span className="book__author">{item.author}</span>
        </div>
        <div className="book__actions">
          <button>Купити</button>
          <button>До списку бажань</button>
        </div>
    </div>
  );
  // ========== Кінець зони редагування ===============
}
