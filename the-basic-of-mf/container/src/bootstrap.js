import { mount } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

mount(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
