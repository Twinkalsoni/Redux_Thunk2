import React from "react";
const User = ({ users }) => {
    return (
        <div>
            <h1 style={{color:"gray"}}>User comp</h1>
            <table border="4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>CompanyName</th>
                        <th>CatchPhrase</th>
                        <th>bs</th>
                    </tr>
                </thead>
                {
                    users.map(users => (
                        <tbody style={{background:"#000",fontSize: "17px",color: "#fff", margin:"15px", padding:"15px"}}>
                            <tr>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>{users.phone}</td>
                                <td>{users.website}</td>
                                <td>{users.company.name}</td>
                                <td>{users.company.catchPhrase}</td>
                                <td>{users.company.bs}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};
export default User;