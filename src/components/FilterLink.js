import { connect } from "react-redux";

function mapStateToProps(state) {
  return { currentFilter: state.visibilityFilter }
}

const FilterLink = ({ filter, currentFilter, children, dispatch }) => {
  if (filter === currentFilter){
    return <span>{children}</span>
  }
  else return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        dispatch({ type: "SET_VISIBILITY_FILTER", filter });
      }}
    >
      {children}
    </a>
  );
};

export default connect(mapStateToProps, null)(FilterLink);
