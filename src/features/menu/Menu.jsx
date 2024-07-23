import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

function Menu() {
  const menu = useLoaderData();
  const cart = useSelector((state) => state.cart.cart);
  let cartIndex = 0;

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => {
        let cartItem;
        if (cart.length && cart[cartIndex]?.pizzaId === pizza.id) {
          cartItem = cart[cartIndex++];
        }
        return <MenuItem key={pizza.id} pizza={pizza} cartItem={cartItem} />;
      })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
