import { formatCurrency } from "./../../utilities/helpers";
import Button from "./../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "./../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "./../cart/UpdateItemQuantity";

function MenuItem({ pizza, cartItem }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (cartItem) {
      return;
    }
    const newItem = {
      pizzaId: id,
      unitPrice,
      quantity: 1,
      name,
    };
    dispatch(addItem(newItem));
  };

  let button;

  if (soldOut) {
    button = null;
  } else if (!cartItem) {
    button = (
      <Button type="small" onClick={addToCartHandler}>
        Add to cart
      </Button>
    );
  } else if (cartItem) {
    button = (
      <div className="flex items-center gap-3 sm:gap-8">
        <UpdateItemQuantity cartItem={cartItem} />
        <DeleteItem pizzaId={id} />
      </div>
    );
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {button}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
