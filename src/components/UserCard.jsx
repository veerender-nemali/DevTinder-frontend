import React from 'react'

const UserCard = ({ user }) => {
    console.log(user)
    const { firstName, lastName, about, age, gender, photoUrl } = user
    return (
        <div className="card bg-base-200 w-96 shadow-sm">
            <figure>
                <img
                    src={photoUrl || "https://imgs.search.brave.com/UAfQNeJyakRkWciqoAav4H0QUp33MOOspOQfF3FKM-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8y/Ni80MC9wcm9maWxl/LXBsYWNlaG9sZGVy/LWltYWdlLWdyYXkt/c2lsaG91ZXR0ZS12/ZWN0b3ItMjIxMjI2/NDAuanBn"}
                    alt="user image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                {about && <p>{about}</p>}
                <div className="card-actions justify-center mt-5">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard