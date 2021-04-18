import FilterLink from "./FilterLink";

const Header = () => {
  return (
    <>
    <h1>Todos App</h1>
    <p>
     <span className="header__showText">Show: </span> <FilterLink filter="SHOW_ALL">All tasks </FilterLink>
      <FilterLink filter="SHOW_ACTIVE">Active </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">Completed </FilterLink>
    </p>
    </>
  );
};

export default Header;
