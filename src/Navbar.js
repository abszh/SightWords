import { Link, useResolvedPath, useMatch } from "react-router-dom";

export default function Navbar({links}) {
    console.log(links);
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                <div className="container-lg">
                    <div className="navbar-brand">Sight Words</div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            {links.map((link, index) => 
                            <li className="nav-item" key={index}>
                                <CustomLink className="nav-link" to={"/" + link.name} >
                                    {link.title}
                                </CustomLink>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

function CustomLink({ to, className, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    const newClassName = className + (isActive ? " active" : "");
    return (
        <Link to={to} className={newClassName} {...props}>
            {children}
        </Link>
    );
}
