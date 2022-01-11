import { useParams } from "react-router-dom";
import { nameScales} from '../utils/scales'

function Scale () {
   const { scaleId } = useParams();
   return (
      <main>{ nameScales[Number(scaleId) - 1] }</main>
   );
}

export default Scale;