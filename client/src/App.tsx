import './App.css'
import LocalPane from './panels/LocalPane'
import RemotePane from './panels/RemotePane'
function App() {

  return (
    <>
      <div className='main'>
        <div className='pane-wrapper'>
          <LocalPane />
          <RemotePane />
        </div>
      </div>
    </>
  )
}

export default App
