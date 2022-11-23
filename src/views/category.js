import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { Layout } from "../components/Layout";
import { item } from "../mocks/item.mock"

const CategoryView = () => {
  const { category } = useParams();
  const categories = item.filter((product) => product.category === category);

  return (
    <Layout>
      <ul className="d-flex flex-wrap justify-content-center">
        {categories.map((product)=> (
        <Item product={product} />
        ))}
      </ul>
    </Layout>
    );
};

export default CategoryView;