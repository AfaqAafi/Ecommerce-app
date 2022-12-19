import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((categories) => {
        return <CategoryItem key={categories.id} {...categories} />;
      })}
    </div>
  );
};

export default Directory;
