import user from "../../assets/AppNav/next.png";
import arrow from "../../assets/AppNav/user.png";

function AppNavbar() {
  return (
    <>
      <>
        <div className=" col-12 bg-dark d-flex justify-content-lg-between">
          
          <button type="button" className="btn btn-dark mx-3">
            <img src={arrow} width="30" className="d-inline-block " alt=""/> Choose your races
          </button>

          <button type="button" className="btn btn-dark">Connect Me
           <img src={user} width="30" className="d-inline-block " alt=""/>
          </button>

        </div>
      </>
    </>
  );
}

export default AppNavbar;
