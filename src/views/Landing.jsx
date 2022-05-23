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
        <>
            <LandingHeader />
            <MainContent className="lg:items-start gx:block pt-12" landing>
                <h1
                    className={
                        "w-full sm:w-4/5 sm:text-7xl" +
                        "lg:w-1/2 lg:text-7xl lg:text-left " +
                        "text-6xl leading-none text-center " +
                        "text-med-blue dark:text-med-sky " +
                        "font-poppins font-bold"
                    }
                >
                    Las escalas que necesitas en un solo lugar
                </h1>
                <BannerButton
                    className=""
                    click={ () => navigate("/app/categories") }
                >¡Usar ahora!</BannerButton>
                <img
                    className="hidden absolute top-12 right-20 xl:right-0 max-h-[65vh] gx:block dark:brightness-90 z-10"
                    src={ accept }
                    alt="Representation of the app"
                />
                <ReloadPrompt />
            </MainContent>
            <img
                className="absolute left-0 bottom-0 w-full max-h-[210px] lg:max-h-[180px] dark:brightness-[90%]"
                src={ waves }
                alt="Waves image decoration"
            />
        </>
    );
}

export default Landing;
