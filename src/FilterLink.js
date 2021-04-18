import { connect } from "react-redux";
import { setVisibilityFilter } from "./redux/ActionCreators";

function mapStateToProps(state) {
  return { currentFilter: state.visibilityFilter }
}

const FilterLink = ({ filter, currentFilter, children, dispatch }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  else return (
    <a className="filterLink"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        dispatch(setVisibilityFilter(filter));
      }}
    >
      {children}
    </a>
  );
};

export default connect(mapStateToProps, null)(FilterLink);
