import './App.css'
import ConnectionPane from './panels/ConnectionPane'
import LocalPane from './panels/LocalPane'
import RemotePane from './panels/RemotePane'
function App() {

  return (
    <>
      <div className='main'>
        <ConnectionPane />
        <div className='pane-wrapper'>
          <LocalPane />
          <RemotePane />
        </div>
      </div>
    </>
  )
}

export default App
