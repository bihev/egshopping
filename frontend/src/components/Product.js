import './Product.css';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

const Product = () => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfH
            x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
            alt="product name" />

            <div className="product__info">
                <p className="info__name">Product 1</p>
                {/* <p className="info__description"> */}
                    <LinesEllipsis text="
                    loremEa dolor irure minim laborum aliquip. Sint sunt eu eiusmod minim ea ex est do pariatur mollit duis nisi incididunt. 
                    Laborum occaecat minim nulla duis exercitation enim irure occaecat tempor labore laborum dolore ut. Cillum incididunt 
                    incididunt cupidatat magna velit anim minim occaecat duis voluptate nulla labore mollit. Deserunt irure velit culpa 
                    pariatur velit do qui culpa cupidatat. Nulla aliqua incididunt consectetur enim ea adipisicing. Duis ad quis 
                    cupidatat est eu aute quis eiusmod est adipisicing labore ad in."
                    maxLine="4"
                    ellipsis="...(Show More)"
                    trimRight
                    basedOn="letters"
                    />
                {/* </p> */}
                <p className="info__price">$999.99</p>
                <Link to={`/product/${1111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product
