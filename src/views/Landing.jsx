import { useNavigate } from "react-router-dom";
import { BannerButton } from "../components/Buttons";
import LandingHeader from "../components/LandingHeader";
import MainContent from "../components/MainContent";
import ReloadPrompt from "../components/ReloadPrompt";
//@ts-ignore
import waves from "../assets/waves.png";
//@ts-ignore
import accept from "../assets/accept-terms.svg";

function Landing () {
    const navigate = useNavigate();
    return (
        <MainContent className="lg:items-start" landing>
            <LandingHeader />
            <h1 className="
            mt-10
            w-11/12
            sm:w-4/5
            md:w-2/3

            lg:ml-20
            lg:w-1/2
            lg:text-7xl
            lg:text-left

            text-[3.5rem]
            leading-none
            text-center
            text-med-blue
            dark:text-med-sky
            font-noto
            font-bold
         ">
                Las escalas que necesitas en un solo lugar
            </h1>
            <BannerButton
                className="lg:ml-20 lg:mt-14"
                click={ () => navigate('/app/categories') }
            >¡Usar ahora!</BannerButton>
            <img
                className="
               absolute
               bottom-0
               w-full
               max-h-[210px]
               lg:max-h-[180px]
               dark:brightness-[90%]
            "
                src={ waves }
                alt="Waves image decoration"
            />
            <img
                className="
               hidden
               absolute
               right-[1%]
               top-28
               max-h-[65vh]
               lg:block
               dark:brightness-90
            "
                src={ accept }
                alt="Accept terms representation"
            />
            <ReloadPrompt />
        </MainContent>
    );
}

export default Landing;
