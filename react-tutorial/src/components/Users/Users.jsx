import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                followed: false,
                fullName: 'Igor',
                status: 'Fine',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                followed: true,
                fullName: 'Sasha',
                status: 'Fine1',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                followed: false,
                fullName: 'Dima',
                status: 'Fine2',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} src={u.photoUrl} alt="User photo"/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;