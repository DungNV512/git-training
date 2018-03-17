import React from 'react'
import PropTypes from 'prop-types';
import './App.css';

const App = ({users, onLoadDataFromAPI}) => {
    return (
        <div>
            <div className={"wrapper-button"}>
                <button type="button" class="btn btn-default middle-btn" onClick={onLoadDataFromAPI}>
                    Load Data From API
                </button>
            </div>
            <div className={"wrapper-result"}>
                {users.length > 0 ?
                        <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Birth day</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(function (user, index) {
                            return <tr key={index}>
                                <td>{user.name} </td>
                                <td>{user.age} </td>
                                <td>{user.birthday} </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                    :
                    <div></div>
                }
            </div>
        </div>
    )
}
App.propTypes = {
    users: PropTypes.array,
    onLoadDataFromAPI: PropTypes.func.isRequired
}
export default App;
