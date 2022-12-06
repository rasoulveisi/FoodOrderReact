import MealsAvailable from "./MealsAvailable";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <MealsAvailable />
    </>
  );
};

export default Meals;
