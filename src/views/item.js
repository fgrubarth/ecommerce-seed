import ItemDetailContainer from "../components/ItemDetailConteiner";
import { Layout } from "../components/Layout";   
import { item } from "../mocks/item.mock"

const ItemView = () => {

  return (
    <Layout>
      <ItemDetailContainer />
    </Layout>
  );
};

export default ItemView;