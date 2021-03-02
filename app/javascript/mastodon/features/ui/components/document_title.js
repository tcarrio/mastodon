import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { title } from 'mastodon/initial_state';

const mapStateToProps = state => ({
  unread: state.getIn(['missed_updates', 'unread']),
});

export default @connect(mapStateToProps)
class DocumentTitle extends PureComponent {

  static propTypes = {
    unread: PropTypes.number.isRequired,
  };

  componentDidMount () {
    this._sideEffects();
  }

  componentDidUpdate() {
    this._sideEffects();
  }

  _sideEffects () {
    document.title = title;
  }

  render () {
    return null;
  }

}
