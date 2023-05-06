function Header({ title, titleContacts }) {
  return (
    <>
      {title && <h1>{title}</h1>}
      {titleContacts && <h2>{titleContacts}</h2>}
    </>
  );
}

export default Header;
