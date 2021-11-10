import React from 'react'

const Users = (props) => {
    return (
        <>
        <h3 className="text-center my-3"><u>LIST OF GITHUB USER</u></h3>
        <div className="container">
            <div className="row">
                {
                    props.users.map(e => {
                        
                        return (
                            <div className="col-lg-4 my-5" key={e.id}>
                                <div className="card d-flex flex-direction-column" style={{ width: '18rem' }}>
                                    <img src={e.avatar_url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-center" style={{ textTransform: "Capitalize" }}>{e.login}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </>
    )
}

export default Users
