import './SideDrawer.css';
import { Link } from 'react-router-dom';

const SideDrawer = ({ show, click }) => {
    const sideDrawerclass = ["sidedrawer"];
    if (show) {
        sideDrawerclass.push('show');
    }
    return (
        <div className={sideDrawerclass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            cart <span className="sidedrawer__cartbadge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">shop</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
