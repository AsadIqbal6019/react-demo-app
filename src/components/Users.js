import { Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') == 'active';
    return (
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <h2>User 4</h2>
            <Outlet />
            <div>

                <button onClick={() => setSearchParams({ filter: 'active' })}>Active users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>

            </div>
            {showActiveUsers ? <h2>showing active Users</h2> : <h2>showing all users</h2>}
        </div>
    )
}

export default Users;