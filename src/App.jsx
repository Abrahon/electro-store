import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes/Routes"


function App() {


  return (
    <>
    <div className="mx-10">
    <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  )
}

export default App
