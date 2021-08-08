import '../../assets/styles/Loader.scss';
import { Helmet } from "react-helmet";

function Loader() {
  return (
    <>
      <Helmet>
        <title>Cargando...</title>
      </Helmet>
      <div className="loader"></div>
    </>
  );
}

export default Loader;
