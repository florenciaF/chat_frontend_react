import { api } from '../../api/query';

export const Users = () => {

    const { data:users } = api.useGetUsersQuery()
    return (
        <>
            <h1>Users</h1>
            {users?.map(user=><article key={user._id}>
                <p>{user.name}</p>
                <button>Agregar contacto</button>
            </article>)}
        </>
    )
}
