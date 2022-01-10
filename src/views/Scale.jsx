import { useParams } from "react-router-dom";

function Scale () {
   const { scaleId } = useParams();
   return (
      <main>Escala { scaleId }</main>
   );
}

export default Scale;