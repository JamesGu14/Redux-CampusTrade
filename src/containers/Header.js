import { connect } from 'react-redux'
import Header from '../components/Header'
import { collapseAction } from '../actions'

const mapStateToProps = (state) => ({
  menuCollapse: state.home.collapse,
  username: 'James'
})

const mapDispatchToProps = (dispatch) => ({
  onCollapseChange: () => dispatch(collapseAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
