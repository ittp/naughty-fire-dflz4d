import Image from "next/image";

export default function Home() {
  return (<><main
    className="flex min-h-screen flex-row items-center justify-beetween p-24">
    <Image 
          
      src={"https://support.evotor.ru/assets/images/logo.svg"} 
      width={150} 
      height={24}
      alt={"E"} />

    <input className="pt-2 pb-2 pl-3 pr-3 m-0 br-0 outline-0 text-black rounded-3" type={"search"} />
    </main>

  </>
    );
}
