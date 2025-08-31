const App = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>

        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Имя контакта</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Имя фамилия 1</td>
                <td>example@email1.ru</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Имя фамилия 2</td>
                <td>example@email2.ru</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Имя фамилия 3</td>
                <td>example@email3.ru</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
