import React, { useState } from "react"

const FormContact = (props) => {

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const submit = () => {
    props.addContact(contactName, contactEmail);
    setContactName("");
    setContactEmail("");
  }

  return (
    <div>
      <div>
        <div className="mb-3">
          <form>
            <div className="mb-3">
              <label className="form-label"></label>
              <input
                className="form-control;"
                type="text"
                //value={contactName}
                onChange={(e) => { setContactName(e.target.value) }}
                placeholder="Введите имя:"

              />
            </div>
            <div className="mb-3">
              <label className="form-label"></label>
              <input
                className="form-control;"
                type="text"
                //value={contactEmail}
                onChange={(e) => { setContactEmail(e.target.value) }}
                placeholder="Введите e-mail:"

              />
            </div>
          </form>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => { submit() }}
        >
          Добавить контакт
        </button>
      </div>
    </div>
  );
}

export default FormContact;