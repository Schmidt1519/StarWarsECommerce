import { withRouter } from 'react-router-dom';
import PostProduct from "./postProduct";

function ProductListingPage(props) {
    console.log(props);
    return (
        <div>
            <PostProduct updateTable={props.getProducts}/>
        </div>
    );
}

export default withRouter(ProductListingPage);