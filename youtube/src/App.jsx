import Header from './components/Header'
import MainContainer from './components/MainContainer'
import SideBar from './components/SideBar'
import appStore from './appStore'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <div className='flex'>
          <SideBar/>
          <Outlet/>
        </div>
      </Provider>
    </>
  )
}

export default App
