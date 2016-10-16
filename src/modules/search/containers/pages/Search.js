import { connect }   from 'react-redux';
import SearchActions from '../../actions/search';
import config        from '../../config/config';
import endpoints     from '../../config/endpoints';
import Api           from '../../../../system/Api';
import page          from '../../components/pages/Search';

const mapStateToProps = ({ search }) => {
  return { search };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch(query, offset) {
      Api.fetchJSON(`${endpoints.search}?query=${query}&per_page=${config.perPages}&offset=${(offset - 1) * config.perPages}`)
        .then((response) => {
          dispatch(SearchActions.search(query, response));
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(page);
