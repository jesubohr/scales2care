import { useParams } from "react-router-dom";
import MainContent from "../components/MainContent";
import { nameScales } from '../utils/scales';

function Scale () {
    const { scaleId } = useParams();
    const scaleIndex = Number(scaleId) - 1;
    return (
        <MainContent>
            { nameScales[scaleIndex] }
        </MainContent>
    );
}

export default Scale;
