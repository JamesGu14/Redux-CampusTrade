import { connect } from 'react-redux'
import MainLayout from '../components/MainLayout'
import { collapseAction } from '../actions'

const mapStateToProps = (state) => ({
  menuCollapse: state.home.collapse,
  username: 'James'
})

const mapDispatchToProps = (dispatch) => ({
  onCollapseChange: () => dispatch(collapseAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
