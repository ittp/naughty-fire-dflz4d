import Image from "next/image";
// import { readFileSync  } from  'fs'
import { headers } from 'next/headers'
 
/* async function getUser() {
  const headersInstance = headers()
  const authorization = headersInstance.get('authorization')
  // Forward the authorization header
  const res = await fetch('https://its.anabasis.pro/api/', {
    headers: { authorization },
  })
  return res.json()
}
 */



let CardTop = async (data:any) => { 


  console.log(data)
return <div className="p-24 min-h-6 m-4 bg-white dashed-3 /rounded-1"> 

<h2>{data.title}</h2>

{data.content}
  </div>


}


export default function Home() {

  let brand = "logo KS.png"
  return (<><main
    className="flex min-h-screen flex-row items-center justify-beetween p-24 text-white">
        <CardTop data={{ title: 1, content: 2 }} />


          <div className="p-24 m-4 bg-white dashed-3 rounded-1"> 
        <p>Content</p>
        <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>
        1
          </div>
          <div className="p-24 m-2 bg-white dashed-3 rounded-1"> 
        <p>Content</p>
        <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>
        1
          </div>
          <div className="p-24 m0 bg-white dashed-3 rounded-1"> 
        <p>Content</p>
        <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>
        1
          </div>
          <div className="p-24 m0 bg-white dashed-3 rounded-1"> 
        <p>Content</p>
        <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>
        1
          </div>
          <div className="p-24 m0 bg-white dashed-3 rounded-1"> 
        <p>Content</p>
        <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>   <p>Content</p>
        1
          </div>
          
          
          <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
    <input className="pt-2 pb-2 pl-3 pr-3 m-0 br-0 outline-0 text-black rounded-3" type={"search"} />
    </main>

  </>
    );
}
