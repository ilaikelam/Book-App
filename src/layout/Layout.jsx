import "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header>
        <h3>Book-App</h3>
      </header>
      {children}
      <footer>
        <h4>Developed By Ali</h4>
      </footer>
    </>
  );
}

export default Layout;
