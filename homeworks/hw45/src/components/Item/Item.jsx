import {ListGroup} from "react-bootstrap";

function Item({item}) {
    return (
        <ListGroup.Item>
            Title: {item.title} <br/>

            Description: {item.description} <br/>
            
            Price: {item.price} <br/>

            Discounted Price: {item.discountedPrice} <br/>

            Category: {item.category} <br/>

            Brand: {item.brand} <br/>

            SKU: {item.sku} <br/>

            Quantity: {item.quantity} <br/>

            Main image (URL): {item.mainImgUrl} <br/>

            Additional images (URLs): {item.additionalImgUrls} <br/>

            Is active: {item.isActive ? 'Yes' : 'No'} <br/>

            Is available: {item.isAvailable ? 'Yes' : 'No'} <br/>

            Show on home page: {item.showOnHomePage ? 'Yes' : 'No'}
            
        </ListGroup.Item>
    );
}

export default Item;