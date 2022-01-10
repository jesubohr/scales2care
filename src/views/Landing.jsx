import { useNavigate } from "react-router-dom";
import { BannerButton } from "../components/Buttons";
import LandingHeader from "../components/LandingHeader";
//@ts-ignore
import waves from "../waves.png";

function Landing () {
   const navigate = useNavigate();
   return (
      <main className="flex flex-col items-center">
         <LandingHeader />
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
         <BannerButton click={() => navigate('/app/categories')}>¡Usar ahora!</BannerButton>
         <img
            className="absolute bottom-0 w-full max-h-[210px] dark:brightness-75"
            src={ waves }
            alt="Waves image decoration"
         />
      </main>
   );
}

export default Landing;