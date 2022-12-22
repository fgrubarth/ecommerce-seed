// Firebase

// Own components
import { useGetItem } from "../hooks/useGetItem";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";

export const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <Loading />;
  }

  return (
    <div className="h-full">
      <ItemList products={items} />
    </div>
  );
};


//   useEffect(() => {
//     new Promise((resolve) =>
//       setTimeout(() => {
//         resolve(item);
//       }, 2000)
//     ).then((data) => {
//       if (category) {
//         const categories = data.filter(
//           (product) => product.category === category
//         );
//         setProducts(categories);
//       } else {
//         setProducts(data);
//       }
//     });
//   }, [category]);

//   if (products.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="h-full">
//       <ItemList products={products} />
//     </div>
//   );
// };

// export default ItemListContainer;