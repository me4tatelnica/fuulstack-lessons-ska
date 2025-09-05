import React from "react"
const FormContact = (props) => {
  return (
    <div>
      <div>
        <div className="mb-3">
          <form>
            <div className="mb-3">
              <label className="form-label"></label>
              <input className="form-control;" type="text" placeholder="Введите имя:"/>
            </div>
            <div className="mb-3">
              <label className="form-label"></label>
              <input className="form-control;" type="text" placeholder="Введите e-mail:"/>
            </div>
          </form>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => { props.addContact() }}
        >
          Добавить контакт
        </button>
      </div>
    </div>
  );
}

export default FormContact;