import { useParams } from "react-router-dom";
import { nameScales } from '../utils/scales';

function Scale () {
    const { scaleId } = useParams();
    const scaleIndex = Number(scaleId) - 1;
    return (
        <main>{ nameScales[scaleIndex] }</main>
    );
}

export default Scale;
