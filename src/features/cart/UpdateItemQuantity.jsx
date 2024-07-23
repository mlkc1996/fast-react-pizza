import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ cartItem }) => {
  const dispatch = useDispatch();
  if (!cartItem) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => {
          dispatch(decreaseItemQuantity(cartItem.pizzaId));
        }}
      >
        -
      </Button>
      <span className="text-sm font-medium">{cartItem?.quantity ?? 0}</span>
      <Button
        type="round"
        onClick={() => {
          dispatch(increaseItemQuantity(cartItem.pizzaId));
        }}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
