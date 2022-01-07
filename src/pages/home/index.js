import React from 'react'
import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom'
function Home() {
    let [searchParams, setSearchParams] = useSearchParams();
    let datas = [1, 2, 3, 4, 5, 6];
    function QueryLink(value) {
        let loc = useLocation();
        return (<NavLink to={`/home/${value}` + loc.search}>
            {value}
        </NavLink>)
    }
    return (
        <div className="P-home">
            <h1>Home page</h1>
            <nav>

                <input value={searchParams.get('filter') || ''}
                    onChange={event => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}></input>
                {datas.filter(value => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    if (filter.startsWith('1'))
                        return value % 2;
                    else if (filter.startsWith('0'))
                        return !(value % 2);
                    else return true;
                }).map(value => QueryLink(value))}
            </nav>
            <Outlet />
        </div>
    );

}

export default Home