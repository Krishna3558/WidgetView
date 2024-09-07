import Tabs from './components/Tabs'
import AddImg from './components/AddImg'
import line from './line.png'

function App() {

  return (
    <div className=' flex h-screen bg-gradient-to-r from-[#373E44] to-[#191B1F] rounded-3xl'>
      <div className=' w-1/2 '>
      </div>
      <div className=' w-1/2 py-7 flex-col space-y-5'>
        <Tabs/>
        <div className=' flex justify-center'>
        <img src={line} />
        </div>
        <AddImg/>
      </div>
    </div>
  )
}

export default App
