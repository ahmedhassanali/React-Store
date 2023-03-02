import "./Filters.css";
import promo from '../../assets/filters/hot-sale.png'
import control from '../../assets/filters/control.png'

function Filters() {
  return (
    <>
      <div className="container-fluid">
      <div className="row d-flex justify-content-between">
        <div className="filters col-md-10">

              <div className="filter">
              <a href="/" className="btn btn-light">
                  <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  />
                  Promo
                  <img src={promo} width="25" className="d-inline-block ms-2" alt=""/>
              </a>
              </div>
              
              <div className="filter dropdown">
              <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                  Mark
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><input className="form-check-input m-1" type="checkbox"value=""id="flexCheckDefault"/>Organic</li>
              </ul>
              </div>

              <div className="filter">
              <a href="/" className="btn btn-light">
                  <input className="form-check-input me-2" type="checkbox"value=""id="flexCheckDefault"/>Organic
              </a>
              </div>

              <div className="filter">
              <a href="/" className="btn btn-light">
                  <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  />
                  New
              </a>
              </div>

              <div className="filter dropdown">
              <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                  Customer note
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><input className="form-check-input m-1" type="checkbox"value=""id="flexCheckDefault"/>Organic</li>
              </ul>
              </div>

              <div className="filter">
              <a href="/" className="btn btn-light">
              <img src={control} width="20" className="d-inline-block me-2" alt=""/>
                  More filters
              </a>
              </div>
          </div>

          <div className="dropdown set-default  col-md-1">
            <button
              className="btn btn-light filter  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Set by default
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><input className="form-check-input m-1" type="checkbox"value=""id="flexCheckDefault"/>Organic</li>
            </ul>
          </div>
      </div>
      </div>
    </>
  );
}

export default Filters;
