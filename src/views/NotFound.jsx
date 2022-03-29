import { useNavigate } from "react-router-dom";
import { BannerButton } from "../components/Buttons";
import LandingHeader from "../components/LandingHeader";
import MainContent from "../components/MainContent";
//@ts-ignore
import waves from "../assets/waves.png";

function NotFound () {
    const navigate = useNavigate();
    return (
        <MainContent landing>
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
         "
            >
                Parece que te equivocaste de ruta
                <p className="mt-3 text-4xl font-medium">¿Gustas volver?</p>
            </h1>
            <BannerButton click={ () => navigate('/') }>Volver al inicio</BannerButton>
            <img
                className="absolute bottom-0 w-full max-h-[210px] dark:brightness-75"
                src={ waves }
                alt="Waves image decoration"
            />
        </MainContent>
    );
}

export default NotFound;
