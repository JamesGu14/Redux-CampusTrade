import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
  currentPage: 'Dashboard page'
})

const mapDispatchToProps = () => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
