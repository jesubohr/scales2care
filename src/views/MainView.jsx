//@ts-ignore
import waves from "../waves.png";
import Header from "../components/Header";
import { BannerButton } from "../components/Buttons";

function MainView () {
   return (
      <main className="flex flex-col items-center">
         <Header />
         <h1 className="
            mx-auto
            mt-10
            w-11/12
            sm:w-4/5
            md:w-2/3
            text-5xl
            text-center
            text-med-blue
            dark:text-med-sky
            font-noto
            font-bold
         ">
            Las escalas que necesitas en un solo lugar
         </h1>
         <BannerButton>¡Usar ahora!</BannerButton>
         <img
            className="absolute bottom-0 w-full max-h-[210px] dark:brightness-75"
            src={ waves }
            alt="Waves image decoration"
         />
      </main>
   );
}

export default MainView;